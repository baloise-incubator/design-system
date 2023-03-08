const fs = require('fs');
const path = require('path');

let version = process.argv[2];

if (version) {
  version = '@' + version;
} else {
  version = '';
}

const srcPath = path.join(__dirname, 'cdn-loader.js');
let scriptContent = fs.readFileSync(srcPath, 'utf-8');

scriptContent = scriptContent.replace(
  /__CDN_LOADER_URL__/g,
  'https://cdn.jsdelivr.net/npm/@baloise/design-system-components' + version
);

fs.writeFileSync(path.join(__dirname, '..', 'packages/components/loader', 'cdn.js'), scriptContent);
fs.writeFileSync(path.join(__dirname, '..', 'packages/components/loader', 'index.cjs.js'), scriptContent);
