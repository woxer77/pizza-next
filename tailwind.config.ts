import type { Config } from 'tailwindcss';

import { transparent, inherit, white, black } from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xl: {'max': '1280px'},
      lg: {'max': '1024px'},
      md: {'max': '768px'},
      sm: {'max': '480px'}
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    colors: {
      transparent,
      inherit,
      white,
      black,
      gray: {
        100: '#f9f9f9',
        200: '#EDEDED',
        400: '#b1b1b1',
        500: '#7b7b7b'
      },
      orange: {
        500: '#fe5f00',
        600: '#e34e00'
      },
      pink: {
        400: '#fffaf4',
        500: '#fff7ee'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.flex-space-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      });
    })
  ]
};
export default config;
