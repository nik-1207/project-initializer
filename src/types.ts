export const PackageManager = {
  npm: "npm",
  yarn: "yarn",
  pnpm: "pnpm",
};

export const Language = {
  typescript: "typescript",
  javascript: "javascript",
};

// eslint-disable-next-line  @typescript-eslint/no-redeclare
export type PackageManager = keyof typeof PackageManager;
// eslint-disable-next-line  @typescript-eslint/no-redeclare
export type Language = keyof typeof Language;

export interface ProjectInfo {
  projectTitle: string | "my-app";
  packageManager: PackageManager;
  projectType: Language;
}
