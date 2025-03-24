
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				bizsimpl: {
					50: '#f0f7ff',
					100: '#dceeff',
					200: '#c0e0ff',
					300: '#94ccff',
					400: '#64afff',
					500: '#3b8eff',
					600: '#2069ff',
					700: '#1851f5',
					800: '#1a41d1',
					900: '#1c3aa6',
					950: '#172554',
				},
				// New color theme
				theme: {
					primary: '#1A2C56',    // Navy blue
					secondary: '#0EA5E9',  // Cobalt blue
					tertiary: '#FFFFFF',   // White
					purple: '#7B0DC4',     // BizSimpl purple (from logo)
				},
				purple: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7709c7',  // BizSimpl brand purple
					800: '#6b21a8',
					900: '#581c87',
					950: '#3b0764',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				slideUp: {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					from: { transform: 'translateY(-20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				slideLeft: {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				slideRight: {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				scale: {
					from: { transform: 'scale(0.95)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'slide-down': 'slideDown 0.6s ease-out',
				'slide-left': 'slideLeft 0.6s ease-out',
				'slide-right': 'slideRight 0.6s ease-out',
				'scale': 'scale 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
			},
			boxShadow: {
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
				'soft-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.05)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.07)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(to right, #f9f9f9, #ffffff)',
				'gradient-blue': 'linear-gradient(90deg, #dceeff 0%, #f0f7ff 100%)',
				'gradient-blue-dark': 'linear-gradient(90deg, #3b8eff 0%, #1a41d1 100%)',
				'gradient-rust': 'linear-gradient(90deg, #B85042 0%, #d46e60 100%)',
				'gradient-navy': 'linear-gradient(90deg, #1A2C56 0%, #2d4272 100%)',
				'gradient-cobalt': 'linear-gradient(90deg, #0EA5E9 0%, #38bdf8 100%)',
				'gradient-purple': 'linear-gradient(90deg, #7709c7 0%, #9B3DE0 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
