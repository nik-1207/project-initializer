import { mkdir } from "fs/promises";
import { join } from "path";
import { ProjectInfo } from "../types";
import { spawn } from "child_process";
import chalk from "chalk";

async function createDir(path: string): Promise<void> {
  await mkdir(path);
}

function processHandler(childProcess: ReturnType<typeof spawn>, processName: string): void {
  childProcess.on("spawn", () => {
    console.log(chalk.green(`${processName} started.`));
  });
  childProcess.on("error", (error) => {
    console.log(chalk.red(error));
  });
  childProcess.on("close", (code, signal) => {
    if (code !== 0) {
      console.log(chalk.red(code, signal));
    }
  });
  childProcess.on("message", (data) => {
    console.log(chalk.green(data));
  });
  childProcess.on("exit", (code, signal) => {
    if (code !== 0) {
      console.log(chalk.red(code, signal));
    }
  });
  childProcess.on("disconnect", () => {
    console.log(chalk.green(`${processName} disconnected.`));
  });
}

export async function initialize({ projectTitle, packageManager }: ProjectInfo): Promise<void> {
  const path = join(process.cwd(), projectTitle);
  await createDir(path);

  const childProcess = spawn(packageManager, ["init", "-y"], {
    cwd: path,
  });

  processHandler(childProcess, "initialize 'package.json'");
}
