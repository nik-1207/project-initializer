import { mkdir } from "fs/promises";
import { join } from "path";
import { ProjectInfo } from "../types";
import { spawn } from "child_process";

export async function createDir(path: string): Promise<void> {
  await mkdir(path);
}

export async function initialize({ projectTitle, packageManager }: ProjectInfo): Promise<void> {
  const path = join(process.cwd(), projectTitle);
  await createDir(path);
  console.log(packageManager);
  spawn(packageManager, ["init"]);
}
