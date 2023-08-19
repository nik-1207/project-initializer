import { writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import { getRemoteFileURLs } from "./data";
import type { Language } from "../types";

async function addBaseTsconfig(path: string, projectType: Language): Promise<void> {
  const tsconfigBasePath = join(path, "tsconfig.base.json");
  const remoteFiles = getRemoteFileURLs(projectType);
  const { data } = await axios.get(remoteFiles["tsconfig.base.json"]);
  await writeFile(tsconfigBasePath, JSON.stringify(data, undefined, 2));
}
async function addCJSTsconfig(path: string, projectType: Language): Promise<void> {
  const cjsTsconfigPath = join(path, "tsconfig.cjs.json");
  const remoteFiles = getRemoteFileURLs(projectType);
  const { data } = await axios.get(remoteFiles["tsconfig.cjs.json"]);
  await writeFile(cjsTsconfigPath, JSON.stringify(data, undefined, 2));
}

async function addESMTsconfig(path: string, projectType: Language): Promise<void> {
  const esmTsconfigPath = join(path, "tsconfig.esm.json");
  const remoteFiles = getRemoteFileURLs(projectType);
  const { data } = await axios.get(remoteFiles["tsconfig.esm.json"]);
  await writeFile(esmTsconfigPath, JSON.stringify(data, undefined, 2));
}

export async function addTsConfig(path: string, projectType: Language): Promise<void> {
  await addBaseTsconfig(path, projectType);
  await addCJSTsconfig(path, projectType);
  await addESMTsconfig(path, projectType);
}
