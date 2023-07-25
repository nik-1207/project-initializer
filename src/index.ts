import { program } from "commander";
import inquirer from "inquirer";
import { Language, PackageManager, ProjectInfo } from "./types";
import { initialize } from "./utils";

program
  .name("project initializer")
  .description("CLI tool to initialize node js project.")
  .version("0.0.0");

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
      message: "typescript",
      type: "list",
      choices: Object.values(Language),
      default: Language.javascript,
      name: "projectType",
    },
  ]);
  await initialize(projectInfo);
});

program.parse();
