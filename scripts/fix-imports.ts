import * as fs from 'fs';
import * as path from 'path';

const libraryDir = path.join(__dirname, '../src/components/library');
const uiDir = path.join(__dirname, '../src/components/ui');

function updateImports(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content
    .replace(/import Button from '@\/components\/ui\/Button'/g, "import { Button } from '@/components/ui/Button'")
    .replace(/import Card from '@\/components\/ui\/Card'/g, "import { Card } from '@/components/ui/Card'");

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated imports in ${filePath}`);
  }
}

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      updateImports(filePath);
    }
  });
}

processDirectory(libraryDir);
processDirectory(uiDir);