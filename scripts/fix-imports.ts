const { fs, path } = require('./utils');

function fixImports(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      fixImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix Button and Card imports
      content = content.replace(
        /import Button from ['"]@\/components\/ui\/Button['"];?/g,
        `import { Button } from '@/components/ui/Button';`
      );
      content = content.replace(
        /import Card from ['"]@\/components\/ui\/Card['"];?/g,
        `import { Card } from '@/components/ui/Card';`
      );
      
      fs.writeFileSync(filePath, content);
    }
  });
}

fixImports(path.join(__dirname, '../src'));