import type { Language } from "../types";

const BaseURL = "https://raw.githubusercontent.com/nik-1207/project-initializer/master/template";

enum RemoteFiles {
  "package.json" = "package.json",
  ".prettierignore" = ".prettierignore",
  ".prettierrc" = ".prettierrc",
  ".eslintignore" = ".eslintignore",
  "README.MD" = "README.MD",
  ".eslintrc" = ".eslintrc",
  ".gitignore" = ".gitignore",
  "tsconfig.base.json" = "tsconfig.base.json",
  "tsconfig.cjs.json" = "tsconfig.cjs.json",
  "tsconfig.esm.json" = "tsconfig.esm.json",
}

export function getRemoteFileURLs(projectType: Language): Record<RemoteFiles, string> {
  const remoteFiles = {
    "package.json": `${BaseURL}/${projectType}/package-json.json`,
    ".prettierignore": `${BaseURL}/${projectType}/.prettierignore`,
    ".prettierrc": `${BaseURL}/${projectType}/.prettierrc`,
    ".eslintignore": `${BaseURL}/${projectType}/.eslintignore`,
    "README.MD": `${BaseURL}/${projectType}/README.MD`,
    ".eslintrc": `${BaseURL}/${projectType}/.eslintrc`,
    ".gitignore": `${BaseURL}/${projectType}/.gitignore`,
    "tsconfig.base.json": `${BaseURL}/${projectType}/tsconfig.base.json`,
    "tsconfig.cjs.json": `${BaseURL}/${projectType}/tsconfig.cjs.json`,
    "tsconfig.esm.json": `${BaseURL}/${projectType}/tsconfig.esm.json`,
  };
  return remoteFiles;
}
