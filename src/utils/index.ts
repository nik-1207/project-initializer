import { spawn } from "child_process";
import chalk from "chalk";
import { UnsupportedError } from "../errors";
import { addEslint } from "./eslint";
import { handlePackageJSON } from "./packagejson";
import { addPrettier } from "./prettier";
import { createSkeleton } from "./skeleton";
import { addTsConfig } from "./tsconfig";
import type { PackageManager, ProjectInfo } from "../types";
import type { ChildProcessWithoutNullStreams } from "child_process";

async function installDependency(packageManager: PackageManager, rootPath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    let childProcess: ChildProcessWithoutNullStreams | undefined;
    switch (packageManager) {
      case "npm":
        childProcess = spawn(packageManager, ["install"], {
          cwd: rootPath,
        });
        break;
      case "yarn":
        childProcess = spawn(packageManager, ["install"], {
          cwd: rootPath,
        });
        break;
      default:
        throw new UnsupportedError(`${packageManager} is not supported.`);
    }

    childProcess.on("spawn", () => {
      console.log(chalk.green("Installing dependency"));
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
      console.log(chalk.green("Installing dependency disconnected."));
      resolve();
    });
  });
}

export async function initialize({
  projectTitle,
  packageManager,
  projectType,
  useTsNode,
}: ProjectInfo): Promise<void> {
  if (packageManager === "pnpm") {
    throw new UnsupportedError(`${packageManager} is not supported.`);
  }

  const rootPath = await createSkeleton(projectTitle);
  console.log(chalk.green(`Creating project directory ${projectTitle} at ${rootPath}.`));
  await handlePackageJSON({ packageManager, projectType, rootPath, useTsNode });
  console.log(chalk.green(`Adding eslint configuration.`));
  await addEslint(rootPath, projectType);
  console.log(chalk.green(`Adding prettier configuration.`));
  await addPrettier(rootPath, projectType);
  if (projectType === "typescript") {
    console.log(chalk.green(`Adding tsconfig configuration.`));
    await addTsConfig(rootPath, projectType);
  }
  await installDependency(packageManager, rootPath);
}
