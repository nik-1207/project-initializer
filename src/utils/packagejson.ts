import { spawn } from "child_process";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import chalk from "chalk";
import { getRemoteFileURLs } from "./data";
import type { Language, PackageManager } from "../types";

interface HandlePackageJSONParams {
  packageManager: PackageManager;
  rootPath: string;
  projectType: Language;
  useTsNode: boolean;
}
async function processHandler(packageManager: PackageManager, rootPath: string): Promise<void> {
  const processName = "initializing 'package.json'";
  return new Promise((resolve, reject) => {
    const childProcess = spawn(packageManager, ["init", "-y"], {
      cwd: rootPath,
    });
    childProcess.on("spawn", () => {
      console.log(chalk.green(`${processName}.`));
    });
    childProcess.on("error", (error) => {
      console.log(chalk.red(error));
      reject();
    });
    childProcess.on("close", (code, signal) => {
      if (code !== 0) {
        reject();
        console.log(chalk.red(code, signal));
      }
      resolve();
    });
    childProcess.on("message", (data) => {
      console.log(chalk.green(data));
      resolve();
    });
    childProcess.on("exit", (code, signal) => {
      if (code !== 0) {
        console.log(chalk.red(code, signal));
        reject();
      }
      resolve();
    });
    childProcess.on("disconnect", () => {
      console.log(chalk.green(`${processName} disconnected.`));
      resolve();
    });
  });
}

async function updatePackageJSON({
  projectType,
  rootPath,
  useTsNode,
}: Omit<HandlePackageJSONParams, "packageManager">): Promise<void> {
  const packageJSONPath = join(rootPath, "package.json");
  const remoteFiles = getRemoteFileURLs(projectType);
  const { data } = await axios.get(remoteFiles["package.json"]);
  const serializedPackageJSON = await readFile(packageJSONPath, "utf-8");
  const parsedPackageJSON = JSON.parse(serializedPackageJSON);
  await writeFile(
    packageJSONPath,
    JSON.stringify(
      {
        ...parsedPackageJSON,
        scripts:
          useTsNode === false && projectType === "typescript"
            ? {
                ...data.scripts,
                start: "node build/cjs/index.js",
              }
            : data.scripts,
        dependencies: data.dependencies,
        devDependencies: data.devDependencies,
      },
      undefined,
      2,
    ),
  );
}

export async function handlePackageJSON({
  packageManager,
  projectType,
  rootPath,
  useTsNode,
}: HandlePackageJSONParams): Promise<void> {
  await processHandler(packageManager, rootPath);
  await updatePackageJSON({ rootPath, projectType, useTsNode });
}
