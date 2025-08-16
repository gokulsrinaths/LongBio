import fs from 'fs';
import path from 'path';

const libraryDir = path.join(__dirname, '../src/components/library');
const files: string[] = fs.readdirSync(libraryDir);

files.forEach((file: string): void => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(libraryDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix Button import
    content = content.replace(
      /import Button from '@\/components\/ui\/Button'/g,
      "import { Button } from '@/components/ui/Button'"
    );
    
    // Fix Card import
    content = content.replace(
      /import Card from '@\/components\/ui\/Card'/g,
      "import { Card } from '@/components/ui/Card'"
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated imports in ${file}`);
  }
});