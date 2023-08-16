import { mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { ProjectInfo } from "../types";
import { spawn } from "child_process";
import chalk from "chalk";
import { UnsupportedError } from "../errors";
import axios from "axios";

async function createDir(path: string): Promise<void> {
  await mkdir(path);
}

async function processHandler(
  childProcess: ReturnType<typeof spawn>,
  processName: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
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
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/nik-1207/node-js/master/package.json",
  );
  const serializedPackageJSON = await readFile(packageJSONPath, "utf-8");
  const parsedPackageJSON = JSON.parse(serializedPackageJSON);
  await writeFile(
    packageJSONPath,
    JSON.stringify(
      {
        ...parsedPackageJSON,
        ...data["scripts"],
        ...data["dependencies"],
        ...data["devDependencies"],
      },
      undefined,
      2,
    ),
  );
}

export async function initialize({
  projectTitle,
  packageManager,
  projectType,
}: ProjectInfo): Promise<void> {
  const rootPath = join(process.cwd(), projectTitle);
  const srcPath = join(rootPath, "src");

  if (packageManager === "pnpm") {
    throw new UnsupportedError(`${packageManager} is not supported.`);
  }
  if (projectType === "javascript") {
    throw new UnsupportedError(`${projectType} is not supported.`);
  }

  const childProcess = spawn(packageManager, ["init", "-y"], {
    cwd: rootPath,
  });

  await createDir(rootPath);
  await createDir(srcPath);

  await processHandler(childProcess, "initialize 'package.json'");

  await updatePackageJSON(rootPath);
}
