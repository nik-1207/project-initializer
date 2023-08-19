# CLI Project Initializer for Node.js Projects

The CLI Project Initializer is a Node.js command-line tool designed to streamline the process of creating new Node.js projects by automating the project setup. With this tool, you can quickly create new projects with just a few simple commands.

## Table of Contents
1. [Introduction](#introduction)
2. [Scope](#scope)
3. [Predefined Project Templates](#predefined-project-templates)
4. [Constraints](#constraints)
5. [Future Enhancements](#future-enhancements)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)
10. [Version Change Log](#version-change-log)

## Introduction

The CLI Project Initializer is a user-friendly Node.js command-line tool that simplifies the process of creating new Node.js projects. It prompts you for necessary project details and generates a basic project structure with the specified configurations.

## Scope

The CLI Project Initializer aims to:
- Provide a simple and intuitive interface for initializing new Node.js projects.

### User Interaction

The CLI tool interacts with the user through the command-line interface to gather the following information:
- Project Title: A string representing the name of the new project.
- Package Manager: A brief description of the project.
- Project Type: Type of project (js or ts).
### Project Generation

After receiving the user's inputs, the CLI tool:
- Creates a new project directory with the provided project title.

### Usability

The CLI tool provides clear instructions and prompts to guide users through the project initialization process. It handles invalid inputs gracefully and provides helpful error messages when needed.

### Performance

The project initialization process is designed to be efficient and completed in a reasonable time, even for larger templates.

## Constraints

- The CLI tool is developed using Node.js and requires Node.js and npm to be installed on the user's machine.

## Future Enhancements

- Implement version control integration to initialize projects directly from Git repositories.

## Installation

To use the CLI Project Initializer, you need to have Node.js and npm installed on your machine. You can install the tool globally using npm:

```shell
npm install -g @nik-1207/project-initializer
```

### Usage
To initialize a new Node.js project, run the following command:
```shell
node-project init
```
The CLI tool will prompt you for project details and create the project structure based on your inputs.

### Version Change Log
#### v1.1.0

- Updated ESLint configuration to be more robust, enhancing code quality and consistency.

### Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on [GitHub](https://github.com/nik-1207/project-initializer/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.