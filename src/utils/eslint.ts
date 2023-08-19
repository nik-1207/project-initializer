import { writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import { RemoteFiles } from "./data";

async function addEslintConfig(path: string): Promise<void> {
  const eslintConfigPath = join(path, ".eslintrc");
  const { data } = await axios.get(RemoteFiles[".eslintrc"]);
  await writeFile(eslintConfigPath, data); // Not specifying Json formatting ad the text coming is preformatted.
}

// async function addEslintIgnore(path: string): Promise<void> {
//   const eslintIgnorePath = join(path, ".eslintignore");
//   const { data } = await axios.get(RemoteFiles[".eslintignore"]);
//   await writeFile(eslintIgnorePath, data);
// }

export async function addEslint(path: string): Promise<void> {
  await addEslintConfig(path);
  // await addEslintIgnore(path);
}
