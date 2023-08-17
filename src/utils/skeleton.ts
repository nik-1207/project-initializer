import { mkdir } from "fs/promises";
import { join } from "path";

async function createDir(path: string): Promise<void> {
  await mkdir(path);
}

export async function createSkeleton(projectTitle: string): Promise<string> {
  const rootPath = join(process.cwd(), projectTitle);
  const srcPath = join(rootPath, "src");
  await createDir(rootPath);
  await createDir(srcPath);
  return rootPath;
}
