# Cycling Optimizer

## Developer Setup

### Prerequisites

* NodeJS v16+ (LTS)

#### node-version-manager

With `nvm` setup of multiple versions is easy. If you do not have the version specified by `.nvmrc` installed, you will receive a warning to install it.

NVM is available via homebrew on OSX (`brew install nvm`) or otherwise from [their repo](https://github.com/nvm-sh/nvm).

```shell
❯ nvm use
Found '/opt/oura/interview-code-review/nodejs/.nvmrc' with version <v16.14.0>
N/A: version "v16.14.0 -> N/A" is not yet installed.

You need to run "nvm install v16.14.0" to install it before using it.
❯ nvm install v16.14.0
Downloading and installing node v16.14.0...
Checksums match! Using existing downloaded archive...
❯ nvm use
Found '.nvmrc' with version <v16.14.0>
Now using node v16.14.0 (npm v8.3.1)
```

After you've installed the version, you will only need to `nvm use` whenever you reload this environment

```shell
❯ nvm use
Found '/opt/oura/interview-code-review/nodejs/.nvmrc' with version <v16.14.0>
Now using node v16.14.0 (npm v8.5.0)
```

## Getting Started

1. Install packages
```shell
❯ npm i
added 619 packages, and audited 620 packages in 5s
found 0 vulnerabilities
```
2. Build code
```shell
❯ npm run build
> cycling_optimizer@0.1.0 build
> rollup -c

src/index.ts → dist/index.cjs.js...
created dist/index.cjs.js in 681ms
```
3. Run server
```shell
❯ npm run serve
> cycling_optimizer@0.1.0 serve
> node dist/index.cjs.js

2022-02-15T20:15:34.047Z - [INFO] Express initialized on port=5555
```

## Live-reload development

Multiple parallel jobs (lint, build, serve) are all accessible directly with hot-reloading by running
```shell
❯ npm run dev
```

## Tests

Tests are set up using [Jest](https://jestjs.io/).

```shell
❯ npm run test
```

Tests are also available to run in watch mode (not included in base `dev` job as it messes with the terminal):
```shell
❯ npm run test:dev
```
