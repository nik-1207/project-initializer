import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { PackageManager } from "../types";
import { spawn } from "child_process";
import chalk from "chalk";
import axios from "axios";
import { RemoteFiles } from "./data";

async function processHandler(packageManager: PackageManager, rootPath: string): Promise<void> {
  const processName = "initialize 'package.json'";
  return new Promise((resolve, reject) => {
    const childProcess = spawn(packageManager, ["init", "-y"], {
      cwd: rootPath,
    });
    childProcess.on("spawn", () => {
      console.log(chalk.green(`${processName} started.`));
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

async function updatePackageJSON(path: string): Promise<void> {
  const packageJSONPath = join(path, "package.json");
  const { data } = await axios.get(RemoteFiles["package.json"]);
  const serializedPackageJSON = await readFile(packageJSONPath, "utf-8");
  const parsedPackageJSON = JSON.parse(serializedPackageJSON);
  await writeFile(
    packageJSONPath,
    JSON.stringify(
      {
        ...parsedPackageJSON,
        scripts: data["scripts"],
        dependencies: data["dependencies"],
        devDependencies: data["devDependencies"],
      },
      undefined,
      2,
    ),
  );
}

export async function handlePackageJSON(
  packageManager: PackageManager,
  rootPath: string,
): Promise<void> {
  await processHandler(packageManager, rootPath);
  await updatePackageJSON(rootPath);
}
