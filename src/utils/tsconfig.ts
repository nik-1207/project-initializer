import { writeFile } from "fs/promises";
import { join } from "path";
import axios from "axios";
import { RemoteFiles } from "./data";

async function addBaseTsconfig(path: string): Promise<void> {
  const tsconfigBasePath = join(path, "tsconfig.base.json");
  const { data } = await axios.get(RemoteFiles["tsconfig.base.json"]);
  await writeFile(tsconfigBasePath, JSON.stringify(data, undefined, 2));
}
async function addCJSTsconfig(path: string): Promise<void> {
  const cjsTsconfigPath = join(path, "tsconfig.cjs.json");
  const { data } = await axios.get(RemoteFiles["tsconfig.cjs.json"]);
  await writeFile(cjsTsconfigPath, JSON.stringify(data, undefined, 2));
}

async function addESMTsconfig(path: string): Promise<void> {
  const esmTsconfigPath = join(path, "tsconfig.esm.json");
  const { data } = await axios.get(RemoteFiles["tsconfig.esm.json"]);
  await writeFile(esmTsconfigPath, JSON.stringify(data, undefined, 2));
}

export async function addTsConfig(path: string): Promise<void> {
  await addBaseTsconfig(path);
  await addCJSTsconfig(path);
  await addESMTsconfig(path);
}
