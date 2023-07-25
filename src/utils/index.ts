import { mkdir } from "fs/promises";
import { join } from "path";
import { ProjectInfo } from "../types";

export async function createDir(path: string): Promise<void> {
  await mkdir(path);
}

export async function initialize({ projectTitle }: ProjectInfo): Promise<void> {
  const path = join(process.cwd(), projectTitle);
  createDir(path);
}
