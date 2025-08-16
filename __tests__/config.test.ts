import { readFileSync } from 'fs';
import { join } from 'path';

describe('Project Configuration', () => {
  describe('package.json', () => {
    const packageJson = JSON.parse(
      readFileSync(join(process.cwd(), 'package.json'), 'utf8')
    );

    it('has all required scripts', () => {
      const requiredScripts = [
        'dev',
        'build',
        'start',
        'lint',
        'validate-deps',
        'type-check'
      ];

      requiredScripts.forEach(script => {
        expect(packageJson.scripts).toHaveProperty(script);
      });
    });

    it('has all required dependencies', () => {
      const requiredDeps = [
        'next',
        'react',
        'react-dom',
        'framer-motion',
        'class-variance-authority'
      ];

      requiredDeps.forEach(dep => {
        expect(
          packageJson.dependencies[dep] || packageJson.devDependencies[dep]
        ).toBeDefined();
      });
    });

    it('has all required Tailwind plugins', () => {
      const requiredPlugins = [
        '@tailwindcss/typography',
        '@tailwindcss/forms',
        '@tailwindcss/aspect-ratio'
      ];

      requiredPlugins.forEach(plugin => {
        expect(packageJson.devDependencies[plugin]).toBeDefined();
      });
    });
  });

  describe('tailwind.config.mjs', () => {
    let tailwindConfig: any;

    beforeAll(async () => {
      tailwindConfig = await import('../tailwind.config.mjs').then(m => m.default);
    });

    it('has required plugins configured', async () => {
      expect(tailwindConfig.plugins).toHaveLength(3);
    });

    it('has required theme extensions', async () => {
      expect(tailwindConfig.theme.extend).toHaveProperty('colors');
      expect(tailwindConfig.theme.extend).toHaveProperty('fontFamily');
      expect(tailwindConfig.theme.extend).toHaveProperty('fontSize');
    });
  });

  describe('next.config.mjs', () => {
    let nextConfig: any;

    beforeAll(async () => {
      nextConfig = await import('../next.config.mjs').then(m => m.default);
    });

    it('has image optimization configured', async () => {
      expect(nextConfig.images).toBeDefined();
      expect(nextConfig.images.remotePatterns).toBeDefined();
      expect(nextConfig.images.remotePatterns[0].protocol).toBe('https');
    });
  });
});

describe('TypeScript Configuration', () => {
  const tsConfig = JSON.parse(
    readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf8')
  );

  it('has strict mode enabled', () => {
    expect(tsConfig.compilerOptions.strict).toBe(true);
  });

  it('has proper module resolution', () => {
    expect(['node', 'bundler']).toContain(tsConfig.compilerOptions.moduleResolution);
  });
});

describe('ESLint Configuration', () => {
  const eslintConfig = JSON.parse(
    readFileSync(join(process.cwd(), '.eslintrc.json'), 'utf8')
  );

  it('extends recommended configs', () => {
    expect(eslintConfig.extends).toContain('next/core-web-vitals');
    expect(eslintConfig.extends).toContain('plugin:@typescript-eslint/recommended');
  });

  it('has TypeScript parser configured', () => {
    expect(eslintConfig.parser).toBe('@typescript-eslint/parser');
  });
});
