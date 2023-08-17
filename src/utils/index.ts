import { ProjectInfo } from "../types";
import { UnsupportedError } from "../errors";
import { createSkeleton } from "./skeleton";
import { handlePackageJSON } from "./packagejson";
import { addEslint } from "./eslint";
import { addPrettier } from "./prettier";
import { addTsConfig } from "./tsconfig";

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
