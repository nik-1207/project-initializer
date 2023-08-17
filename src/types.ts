export const PackageManager = {
  npm: "npm",
  yarn: "yarn",
  pnpm: "pnpm",
};

export const Language = {
  typescript: "typescript",
  javascript: "javascript",
};

export type PackageManager = keyof typeof PackageManager;
export type language = keyof typeof Language;

export interface ProjectInfo {
  projectTitle: string | "my-app";
  packageManager: PackageManager;
  projectType: language;
}
