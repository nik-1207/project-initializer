import { writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import { getRemoteFileURLs } from "./data";
import type { Language } from "../types";

async function addPrettierConfig(path: string, projectType: Language): Promise<void> {
  const prettierConfigPath = join(path, ".prettierrc");
  const remoteFiles = getRemoteFileURLs(projectType);
  const { data } = await axios.get(remoteFiles[".prettierrc"]);
  await writeFile(prettierConfigPath, JSON.stringify(data, undefined, 2));
}

export async function addPrettier(path: string, projectType: Language): Promise<void> {
  await addPrettierConfig(path, projectType);
}
