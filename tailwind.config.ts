import type { Config } from 'tailwindcss';

import { transparent, inherit, white, black } from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
  	screens: {
  		xl: {
  			max: '1280px'
  		},
  		lg: {
  			max: '1024px'
  		},
  		md: {
  			max: '768px'
  		},
  		sm: {
  			max: '480px'
  		}
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
  		gray: {
  			'100': '#f9f9f9',
  			'200': '#EDEDED',
  			'400': '#b1b1b1',
  			'500': '#7b7b7b'
  		},
  		orange: {
  			'500': '#fe5f00',
  			'600': '#e34e00'
  		},
  		pink: {
  			'400': '#fffaf4',
  			'500': '#fff7ee'
  		}
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
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
    }),
    require('tailwindcss-animate')
  ]
};
export default config;
