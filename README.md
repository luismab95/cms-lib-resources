# CMS-LIB-RESOURCES

<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<p align="center">
  Library for shared resources in CMS project.
</p>

<p align="center">
  <a href="https://github.com/luismab95/cms-lib-resources">
    <img src="https://img.shields.io/badge/NestJS-12-E0234E.svg" alt="NestJS 12" />
  </a>
  <a href="https://pnpm.io/">
    <img src="https://img.shields.io/badge/package%20manager-pnpm-F69220.svg" alt="pnpm" />
  </a>
  <a href="https://github.com/luismab95/cms-ms-auth/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
  </a>
</p>

## Overview

`cms-lib-resources` is a reusable library designed to centralize shared resources for CMS microservices.

It is built with NestJS 12 and TypeScript and is intended to be shared across projects.


## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Building](#building)
- [Packaging](#packaging)
- [Installing in Other Microservices](#installing-in-other-microservices)
- [Resources](#resources)
- [License](#license)


## Prerequisites

- Node.js 24 or a compatible supported version.
- pnpm.
- NestJS 12.
- TypeScript 6.

Enable pnpm through Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Verify the installed versions:

```bash
node --version
pnpm --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/luismab95/cms-lib-database.git
cd cms-lib-database
```

Install the dependencies:

```bash
pnpm install
```

## Environment Variables

Configure the environment variables required by the application before running it.

Create a `.env` file in the project root if your configuration uses environment files (review .env.example).

Example:

```env
NODE_ENV=development
PORT=3000
```

## Running the App

### Development

```bash
pnpm start
```

### Watch Mode

Automatically restart the application when files change:

```bash
pnpm start:dev
```

### Debug Mode

```bash
pnpm start:debug
```

### Production

```bash
pnpm start:prod
```

Build the application before running it in production:

```bash
pnpm build
pnpm start:prod
```

## Testing

### Unit Tests

```bash
pnpm test
```

### Watch Mode

```bash
pnpm test:watch
```

### End-to-End Tests

```bash
pnpm test:e2e
```

### Test Coverage

```bash
pnpm test:cov
```

## Building

Compile the application:

```bash
pnpm build
```

The compiled output is generated in the `dist` directory by the standard NestJS build configuration.

## Packaging

To distribute the library as a local package, configure its `package.json` with the correct public entry points and include the compiled files in the package.

Generate the package archive:

```bash
pnpm run pack
```

This creates a `.tgz` archive containing the files included in the package configuration.

For repeatable builds, commit `pnpm-lock.yaml` to the repository and use:

```bash
pnpm install --frozen-lockfile
```

## Installing in Other Microservices

Copy the generated archive to the root directory of the consuming microservice and install it using pnpm:

```bash
pnpm add ./cms-lib-resourcesd-0.0.1.tgz
```

Import the public exports from the package:

```typescript
import { ... } from 'cms-lib-resources';
```

The exported names depend on the modules and services exposed by the library.

When publishing a new version, update the library version, rebuild the package, and reinstall the new archive in the consuming microservices.

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Official Website](https://nestjs.com)
- [pnpm Documentation](https://pnpm.io)
- [Node.js Documentation](https://nodejs.org/docs)
- [CMS-MS-AUTH Repository](https://github.com/luismab95/cms-lib-database)

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.
