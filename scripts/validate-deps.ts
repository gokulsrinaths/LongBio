import fs from 'fs';
import path from 'path';

async function validateDependencies(): Promise<boolean> {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const tailwindConfig = await import('../tailwind.config.js').then(m => m.default);
    
    // Required dependencies
    const requiredDeps = {
      // Core dependencies
      'next': '^14.0.0',
      'react': '^18.2.0',
      'react-dom': '^18.2.0',
      'typescript': '^5.0.0',
      
      // Tailwind plugins
      '@tailwindcss/typography': '^0.5.0',
      '@tailwindcss/forms': '^0.5.0',
      '@tailwindcss/aspect-ratio': '^0.4.0',
      
      // UI dependencies
      'framer-motion': '^12.0.0',
      'class-variance-authority': '^0.7.0',
    };

    const missingDeps: string[] = [];
    const outdatedDeps: string[] = [];

    Object.entries(requiredDeps).forEach(([dep, version]) => {
      const currentVersion = packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep];
      if (!currentVersion) {
        missingDeps.push(dep);
      } else {
        // Simple version check (can be made more sophisticated)
        const required = version.replace('^', '');
        const current = currentVersion.replace('^', '');
        if (current < required) {
          outdatedDeps.push(`${dep} (current: ${current}, required: ${required})`);
        }
      }
    });

    // Validate Tailwind plugins
    const requiredPlugins = [
      '@tailwindcss/typography',
      '@tailwindcss/forms',
      '@tailwindcss/aspect-ratio'
    ];

    // Check if plugins are installed in node_modules
    const pluginResults = await Promise.all(requiredPlugins.map(async (plugin) => {
      try {
        await import(plugin);
        return false;
      } catch (error) {
        return plugin;
      }
    }));
    const missingPlugins = pluginResults.filter((result): result is string => result !== false);

    if (missingDeps.length > 0) {
      console.error('❌ Missing dependencies:', missingDeps.join(', '));
      process.exit(1);
    }

    if (outdatedDeps.length > 0) {
      console.warn('⚠️ Outdated dependencies:', outdatedDeps.join(', '));
    }

    if (missingPlugins.length > 0) {
      console.error('❌ Missing Tailwind plugins:', missingPlugins.join(', '));
      process.exit(1);
    }

    console.log('✅ All required dependencies and plugins are present');
    return true;
  } catch (error) {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  }
}

validateDependencies().catch(error => {
  console.error('❌ Validation failed:', error);
  process.exit(1);
});
