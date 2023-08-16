# Node.js TypeScript Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A template repository for creating Node.js projects using TypeScript.

## Features

- Node.js application written in TypeScript
- Configured ESLint with TypeScript support
- Code formatting using Prettier
- CommonJS and ECMAScript modules (CJS and ESM) outputs
- Convenient build scripts for CommonJS and ECMAScript builds
- `ts-node` for running TypeScript code directly
- Example entry point in `src/index.ts`
- Preconfigured `.gitignore` and `.npmignore` files

## Prerequisites

- Node.js (v14 or higher) - [Download Node.js](https://nodejs.org/)
- Yarn (optional, but recommended) - [Install Yarn](https://yarnpkg.com/getting-started/install)

## Getting Started

1. Clone this repository or use it as a template to create a new project.

```bash
git clone https://github.com/nik-1207/node-js.git
# or use "Use this template" on GitHub to create a new repository
```

### Install dependencies
`yarn install`

## Available Scripts
- `yarn build`: Build both CommonJS and ECMAScript modules.
- `yarn format`: Run ESLint, sort-package-json, and Prettier to format the code.
- `yarn pretty`: Run Prettier to format the source files in the `src` directory.
- `yarn start`: Run the application using `ts-node`.

## Visual Studio Code Environment

If you use Visual Studio Code as your code editor, you can use the settings and extensions provided in [this gist](https://gist.githubusercontent.com/nik-1207/e0f3d4bdf5fc762c30892172eca8f694/raw/879a499f015075944d6cbd969161a34bd66d4f3c/dev) to set up your development environment.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
