#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import { Language, PackageManager, ProjectInfo } from "./types";
import { initialize } from "./utils";
import chalk from "chalk";

program
  .name("project initializer")
  .description("CLI tool to initialize node js project.")
  .version("1.0.2-beta.2");

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
