const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../package.json');
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js');

const requiredDependencies = [
  '@headlessui/react',
  '@heroicons/react',
  'class-variance-authority',
  'clsx',
  'framer-motion',
  'next',
  'react',
  'react-dom',
  'tailwindcss'
];

const requiredDevDependencies = [
  '@tailwindcss/aspect-ratio',
  '@tailwindcss/forms',
  '@tailwindcss/typography',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'typescript'
];

function validatePackageJson() {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
  const devDependencies = Object.keys(packageJson.devDependencies || {});

  const missingDeps = requiredDependencies.filter(dep => !dependencies.includes(dep));
  const missingDevDeps = requiredDevDependencies.filter(dep => !devDependencies.includes(dep));

  if (missingDeps.length > 0 || missingDevDeps.length > 0) {
    console.error('❌ Missing required dependencies:');
    if (missingDeps.length > 0) {
      console.error('Dependencies:', missingDeps.join(', '));
    }
    if (missingDevDeps.length > 0) {
      console.error('DevDependencies:', missingDevDeps.join(', '));
    }
    process.exit(1);
  }
}

function validateTailwindConfig() {
  const tailwindConfig = require(tailwindConfigPath);
  const pluginsContent = fs.readFileSync(tailwindConfigPath, 'utf8');
  
  const requiredPlugins = ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/aspect-ratio'];
  const missingPlugins = requiredPlugins.filter(plugin => !pluginsContent.includes(plugin));

  if (missingPlugins.length > 0) {
    console.error('❌ Missing required Tailwind plugins:', missingPlugins.join(', '));
    process.exit(1);
  }
}

try {
  validatePackageJson();
  validateTailwindConfig();
  console.log('✅ All required dependencies and plugins are present');
} catch (error) {
  console.error('❌ Validation failed:', error);
  process.exit(1);
}