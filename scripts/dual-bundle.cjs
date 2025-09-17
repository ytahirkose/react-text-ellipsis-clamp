const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const cjsFile = path.join(distDir, 'index.cjs');
const mjsFile = path.join(distDir, 'index.mjs');

// Read the generated JS file
const jsFile = path.join(distDir, 'index.js');
const jsContent = fs.readFileSync(jsFile, 'utf8');

// Create CJS version
const cjsContent = jsContent
  .replace(/export\s*{\s*([^}]+)\s*};?/g, 'module.exports = { $1 };')
  .replace(/export\s+default\s+([^;]+);?/g, 'module.exports = $1;')
  .replace(/export\s+const\s+(\w+)\s*=/g, 'const $1 =')
  .replace(/export\s+function\s+(\w+)/g, 'function $1')
  .replace(/export\s+class\s+(\w+)/g, 'class $1');

fs.writeFileSync(cjsFile, cjsContent);

// Create ESM version
const mjsContent = jsContent;
fs.writeFileSync(mjsFile, mjsContent);

// Remove the original JS file
fs.unlinkSync(jsFile);

console.log('✅ Dual bundle created successfully!');
console.log('📦 CJS:', cjsFile);
console.log('📦 ESM:', mjsFile);
