import { UnsupportedError } from "../errors";
import { addEslint } from "./eslint";
import { handlePackageJSON } from "./packagejson";
import { addPrettier } from "./prettier";
import { createSkeleton } from "./skeleton";
import { addTsConfig } from "./tsconfig";
import type { ProjectInfo } from "../types";

export async function initialize({
  projectTitle,
  packageManager,
  projectType,
}: ProjectInfo): Promise<void> {
  if (packageManager === "pnpm") {
    throw new UnsupportedError(`${packageManager} is not supported.`);
  }
  if (projectType === "javascript") {
    throw new UnsupportedError(`${projectType} is not supported.`);
  }

  const rootPath = await createSkeleton(projectTitle);
  await handlePackageJSON(packageManager, rootPath);
  await addEslint(rootPath);
  await addPrettier(rootPath);
  await addTsConfig(rootPath);
}
