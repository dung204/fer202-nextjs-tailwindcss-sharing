import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        sm: 'clamp(0.8rem, 0.08vi + 0.78rem, 0.84rem)',
        base: 'clamp(1rem, 0.23vi + 0.94rem, 1.13rem)',
        lg: 'clamp(1.25rem, 0.45vi + 1.14rem, 1.5rem)',
        xl: 'clamp(1.56rem, 0.79vi + 1.36rem, 2rem)',
        '2xl': 'clamp(1.95rem, 1.29vi + 1.63rem, 2.66rem)',
        '3xl': 'clamp(2.44rem, 2.02vi + 1.94rem, 3.55rem)',
        '4xl': 'clamp(3.05rem, 3.06vi + 2.29rem, 4.73rem)',
        '5xl': 'clamp(3.81rem, 4.54vi + 2.68rem, 6.31rem)',
        '6xl': 'clamp(4.77rem, 6.63vi + 3.11rem, 8.41rem)',
      },
    },
  },
};
export default config;
