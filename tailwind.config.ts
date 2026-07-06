import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		colors: {
			primary: {
          DEFAULT: '#0057D9',
          foreground: '#FFFFFF',
          50: '#E6EFFF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0057D9',
          600: '#004BB3',
          700: '#003E8C',
          800: '#003166',
          900: '#002440',
        },
			secondary: {
          DEFAULT: '#0F172A',
          foreground: '#FFFFFF',
        },
			accent: {
          DEFAULT: '#0EA5E9',
          foreground: '#FFFFFF',
        },
			success: '#16A34A',
			background: '#FFFFFF',
        foreground: '#0F172A',
			gray: {
				'50': '#F8FAFC',
				'100': '#F1F5F9',
				'200': '#E2E8F0',
				'300': '#CBD5E1',
				'400': '#94A3B8',
				'500': '#64748B',
				'600': '#475569',
				'700': '#334155',
				'800': '#1E293B',
				'900': '#0F172A'
			},
			border: '#E2E8F0',
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        input: '#E2E8F0',
        ring: '#0057D9',
		},
		fontFamily: {
			poppins: [
				'var(--font-poppins)'
			],
			inter: [
				'var(--font-inter)'
			]
		},
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			},
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
		}
	}
  },
  plugins: [],
};
export default config;
