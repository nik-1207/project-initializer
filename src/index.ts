import { program } from "commander";
import inquirer from "inquirer";
import { Language, PackageManager, ProjectInfo } from "./types";

program
  .name("project initializer")
  .description("CLI tool to initialize node js project.")
  .version("0.0.0");

program.command("init").action(async () => {
  const answer = await inquirer.prompt<ProjectInfo>([
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
  console.log(answer)
});

program.parse();
