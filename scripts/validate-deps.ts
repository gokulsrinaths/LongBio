const { fs, path } = require('./utils');

function validateDependencies() {
  const packageJsonPath = path.join(__dirname, '../package.json');
  const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js');

  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  // Required dependencies
  const requiredDeps = [
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    'class-variance-authority',
    'framer-motion',
    'next',
    'react',
    'react-dom',
    'tailwindcss'
  ];

  // Check each required dependency
  const missingDeps = requiredDeps.filter(dep => !allDeps[dep]);

  if (missingDeps.length > 0) {
    console.error('❌ Missing required dependencies:', missingDeps.join(', '));
    process.exit(1);
  }

  // Validate Tailwind plugins
  try {
    const tailwindConfig = require(tailwindConfigPath);
    const plugins = tailwindConfig.plugins || [];
    
    const requiredPlugins = [
      '@tailwindcss/typography',
      '@tailwindcss/forms',
      '@tailwindcss/aspect-ratio'
    ];

    // Check if each plugin is installed
    requiredPlugins.forEach(pluginName => {
      try {
        require.resolve(pluginName);
      } catch (e) {
        console.error(`❌ Tailwind plugin not found: ${pluginName}`);
        process.exit(1);
      }
    });

    console.log('✅ All required dependencies and plugins are present');
  } catch (error) {
    console.error('❌ Error validating tailwind.config.js:', error.message);
    process.exit(1);
  }
}

validateDependencies();