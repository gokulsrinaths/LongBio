import tailwindConfig from './tailwind.config.mjs';

export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: tailwindConfig,
    autoprefixer: {},
  },
}