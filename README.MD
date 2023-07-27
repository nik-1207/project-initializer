# CLI Project Initializer for Node.js Projects

The CLI Project Initializer is a Node.js command-line tool designed to streamline the process of creating new Node.js projects by automating the project setup. With this tool, you can quickly create new projects with just a few simple commands.

## Table of Contents
1. [Introduction](#introduction)
2. [Scope](#scope)
3. [Functional Requirements](#functional-requirements)
4. [Non-Functional Requirements](#non-functional-requirements)
5. [Predefined Project Templates](#predefined-project-templates)
6. [Constraints](#constraints)
7. [Future Enhancements](#future-enhancements)
8. [Installation](#installation)
9. [Usage](#usage)
10. [Contributing](#contributing)
11. [License](#license)

## Introduction

The CLI Project Initializer is a user-friendly Node.js command-line tool that simplifies the process of creating new Node.js projects. It prompts you for necessary project details and generates a basic project structure with the specified configurations.

## Scope

The CLI Project Initializer aims to:
- Provide a simple and intuitive interface for initializing new Node.js projects.
- Allow users to customize project details such as project name, description, author name, and project template.
- Generate a project structure based on the selected template and install necessary dependencies.

## Functional Requirements

### User Interaction

The CLI tool interacts with the user through the command-line interface to gather the following information:
- Project Name: A string representing the name of the new project.
- Project Description: A brief description of the project.
- Author Name: The name of the project author or creator.
- Project Template: The choice of project template from predefined templates.

### Project Generation

After receiving the user's inputs, the CLI tool:
- Creates a new project directory with the provided project name.
- Copies the selected project template files and folders into the new project directory.
- Replaces placeholders in the template files (e.g., __PROJECT_NAME__, __DESCRIPTION__, __AUTHOR_NAME__) with the user-provided values.

### Dependency Installation

The CLI tool automatically installs project-specific dependencies based on the selected template, if any.

## Non-Functional Requirements

### Usability

The CLI tool provides clear instructions and prompts to guide users through the project initialization process. It handles invalid inputs gracefully and provides helpful error messages when needed.

### Performance

The project initialization process is designed to be efficient and completed in a reasonable time, even for larger templates.

### Security

The CLI tool validates and sanitizes user inputs to prevent any potential security vulnerabilities.

## Predefined Project Templates

The CLI tool supports the following predefined project templates:

1. **Basic Node.js Project Template:**
   - Minimal project structure with a simple `index.js` file.
   - No external dependencies.

2. **Express.js Project Template:**
   - Project structure for an Express.js web application.
   - Express.js and other related dependencies.

3. **TypeScript Project Template:**
   - Project structure for a Node.js project with TypeScript support.
   - TypeScript and other related dependencies.

## Constraints

- The CLI tool is developed using Node.js and requires Node.js and npm to be installed on the user's machine.

## Future Enhancements

- Add support for more project templates and configurations.
- Implement version control integration to initialize projects directly from Git repositories.

## Installation

To use the CLI Project Initializer, you need to have Node.js and npm installed on your machine. You can install the tool globally using npm:

```
npm install -g @nik-1207/project-initializer
```

## Usage

To initialize a new Node.js project, run the following command:
```
project-init
```

The CLI tool will prompt you for project details and create the project structure based on your inputs.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on [GitHub](https://github.com/nik-1207/project-initializer/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
