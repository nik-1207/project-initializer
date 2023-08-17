import { writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import { RemoteFiles } from "./data";

async function addPrettierConfig(path: string): Promise<void> {
  const prettierConfigPath = join(path, ".prettierrc");
  const { data } = await axios.get(RemoteFiles[".prettierrc"]);
  await writeFile(prettierConfigPath, JSON.stringify(data, undefined, 2));
}

// async function addPrettierIgnore(path: string): Promise<void> {
//   const prettierIgnorePath = join(path, ".prettierignore");
//   const { data } = await axios.get(RemoteFiles[".prettierignore"]);
//   await writeFile(prettierIgnorePath, data);
// }

export async function addPrettier(path: string): Promise<void> {
  await addPrettierConfig(path);
  // await addPrettierIgnore(path);
}
