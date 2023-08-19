#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import inquirer from "inquirer";
import { Language, PackageManager } from "./types";
import { initialize } from "./utils";
import type { ProjectInfo } from "./types";

program
  .name("project initializer")
  .description("CLI tool to initialize node js project.")
  .version("1.1.0");

program.command("init").action(async () => {
  const projectInfo = await inquirer.prompt<ProjectInfo>([
    {
      message: "Project title",
      type: "input",
      default: "my-app",
      name: "projectTitle",
    },
    {
      message: "Package Manager",
      type: "list",
      choices: Object.values(PackageManager),
      default: PackageManager.npm,
      name: "packageManager",
    },
    {
      message: "projectType",
      type: "list",
      choices: Object.values(Language),
      default: Language.javascript,
      name: "projectType",
    },
  ]);
  try {
    await initialize(projectInfo);
  } catch (error) {
    const { message } = error as NodeJS.ErrnoException;
    console.log(chalk.red(message));
  }
});

program.parse();
