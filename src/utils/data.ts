const BaseURL = "https://raw.githubusercontent.com/nik-1207/project-initializer/master/template";
export const RemoteFiles = {
  "package.json": `${BaseURL}/package-json.json`,
  ".prettierignore": `${BaseURL}/.prettierignore`,
  ".prettierrc": `${BaseURL}/.prettierrc`,
  ".eslintignore": `${BaseURL}/.eslintignore`,
  "README.MD": `${BaseURL}/README.MD`,
  ".eslintrc": `${BaseURL}/.eslintrc`,
  ".gitignore": `${BaseURL}/.gitignore`,
  "tsconfig.base.json": `${BaseURL}/tsconfig.base.json`,
  "tsconfig.cjs.json": `${BaseURL}/tsconfig.cjs.json`,
  "tsconfig.esm.json": `${BaseURL}/tsconfig.esm.json`,
} as const;
