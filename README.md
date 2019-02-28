# TSLint Config

## About

This repository includes a default tslint config based on tslint's recommended rules with some adjustments to closer match our eslint rules.

## Install

Install a specific version of the tslint config with NPM. You can see a full list of versions [here](https://github.com/dabapps/tslint-config-dabapps/releases).

```shell
npm i dabapps/tslint-config-dabapps#v0.0.0 --save-dev
```

This will update your package.json automatically.

```json
"devDependencies": {
  "tslint-config-dabapps": "dabapps/tslint-config-dabapps#v0.0.0",
}
```

## Configuration

### NPM Scripts

Add the following scripts to your package.json

Note: You must not have a `files` key defined in your `tsconfig.json` or your globs will be ignored.

```json
{
  "scripts": {
    "lint": "tslint --project tsconfig.json --type-check 'src/**/*.{ts,tsx}' 'tests/**/*.{ts,tsx}'"
  }
}
```

### Default Config

Create a tslint.json in the route of the project and extend the default config.

```json
{
  "extends": [
    "tslint-config-dabapps"
  ]
}
```

## Code of conduct

For guidelines regarding the code of conduct when contributing to this repository please review [https://www.dabapps.com/open-source/code-of-conduct/](https://www.dabapps.com/open-source/code-of-conduct/)
