import chalk from "chalk";
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

  const rootPath = await createSkeleton(projectTitle);
  console.log(chalk.green(`Creating project directory ${projectTitle} at ${rootPath}.`));
  await handlePackageJSON(packageManager, rootPath, projectType);
  console.log(chalk.green(`Adding eslint configuration.`));
  await addEslint(rootPath, projectType);
  console.log(chalk.green(`Adding prettier configuration.`));
  await addPrettier(rootPath, projectType);
  if (projectType === "typescript") {
    console.log(chalk.green(`Adding tsconfig configuration.`));
    await addTsConfig(rootPath, projectType);
  }
}
