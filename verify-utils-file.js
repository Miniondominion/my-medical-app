const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lib', 'utils.ts');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('File contents:');
  console.log(content);
} catch (error) {
  console.error('Error reading file:', error);
}