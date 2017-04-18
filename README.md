# TSLint Config

## About

This repository includes a default tslint config based on tslint's recommended rules with some adjustments to closer match our eslint rules.

## Install

Install a specific version of the tslint config with NPM. You can see a full list of versions here.

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

```json
{
  "scripts": {
    "lint": "tslint src/ tests/"
  }
}
```

### Default Config

Create a tslint.json in the route of the project and extend the default config.

```json
{
  "extends": [
    "dabapps"
  ]
}
```
