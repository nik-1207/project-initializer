import { writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import { getRemoteFileURLs } from "./data";
import type { Language } from "../types";

async function addEslintConfig(path: string, projectType: Language): Promise<void> {
  const eslintConfigPath = join(path, ".eslintrc");
  const remoteFiles = getRemoteFileURLs(projectType);
  const { data } = await axios.get(remoteFiles[".eslintrc"]);
  await writeFile(eslintConfigPath, data); // Not specifying Json formatting ad the text coming is preformatted.
}

export async function addEslint(path: string, projectType: Language): Promise<void> {
  await addEslintConfig(path, projectType);
}
