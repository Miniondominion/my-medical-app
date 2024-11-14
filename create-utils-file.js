const fs = require('fs');
const path = require('path');

// Create the directory structure
const dir = path.join(process.cwd(), 'src', 'lib');
fs.mkdirSync(dir, { recursive: true });

// Create the utils.ts file
const filePath = path.join(dir, 'utils.ts');
const content = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

fs.writeFileSync(filePath, content);

console.log(`File created successfully at ${filePath}`);