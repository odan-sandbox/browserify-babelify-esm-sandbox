# browserify-babelify-esm-sandbox

```bash
$ yarn build:ng
yarn run v1.22.10
warning package.json: No license field
$ yarn build src/ng.js
warning package.json: No license field
$ browserify -o bundle.js -t [ babelify --presets [ @babel/preset-env ] --plugins [ ] --sourceType module ] src/ng.js

/Users/odan/source/github.com/odan-sandbox/browserify-babelify-esm-sandbox/node_modules/ky/distribution/index.js:2
import { Ky } from './core/Ky.js';
^
ParseError: 'import' and 'export' may appear only with 'sourceType: module'
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
