
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
				whatsapp: {
					DEFAULT: 'hsl(var(--whatsapp))',
					foreground: 'hsl(var(--whatsapp-foreground))'
				},
				'premium-gold': {
					DEFAULT: 'hsl(var(--premium-gold))',
					foreground: 'hsl(var(--premium-gold-foreground))'
				},
				'premium-blue': {
					DEFAULT: 'hsl(var(--premium-blue))',
					foreground: 'hsl(var(--premium-blue-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)'
			},
			boxShadow: {
				'xs': 'var(--shadow-xs)',
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
				'2xl': 'var(--shadow-2xl)',
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)',
				'float': 'var(--shadow-float)',
				'neon': 'var(--shadow-neon)'
			},
			backdropBlur: {
				'xs': 'var(--blur-sm)',
				'sm': 'var(--blur-md)',
				'md': 'var(--blur-lg)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'spring': 'var(--transition-spring)'
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'0%': {
						boxShadow: '0 0 32px hsl(var(--premium-gold) / 0.3)'
					},
					'100%': {
						boxShadow: '0 0 48px hsl(var(--premium-gold) / 0.6), 0 0 64px hsl(var(--premium-gold) / 0.3)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'pulse-glow': {
					'0%': {
						boxShadow: '0 0 20px hsl(var(--premium-gold) / 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--premium-gold) / 0.8), 0 0 60px hsl(var(--premium-gold) / 0.4)'
					},
					'100%': {
						boxShadow: '0 0 20px hsl(var(--premium-gold) / 0.5)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'lightning': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '1'
					}
				},
				'neon-pulse': {
					'0%': {
						boxShadow: '0 0 20px hsl(var(--premium-gold) / 0.5), 0 0 40px hsl(var(--premium-gold) / 0.3), 0 0 60px hsl(var(--premium-gold) / 0.1)'
					},
					'100%': {
						boxShadow: '0 0 30px hsl(var(--premium-gold) / 0.8), 0 0 60px hsl(var(--premium-gold) / 0.6), 0 0 90px hsl(var(--premium-gold) / 0.4)'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-100vh)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'rgbGlow': {
					'0%': { background: 'rgba(255, 0, 0, 0.4)' },
					'25%': { background: 'rgba(0, 255, 0, 0.4)' },
					'50%': { background: 'rgba(0, 0, 255, 0.4)' },
					'75%': { background: 'rgba(255, 255, 0, 0.4)' },
					'100%': { background: 'rgba(255, 0, 0, 0.4)' },
				},
				'glow-rgb': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.2)' },
				},
				'textGlow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'glow-box': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.2)' },
				},
				'matrix-rain': {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				}
			},

			animation: {
				'glow-box': 'glow 5s ease-in-out infinite',
				'text-glow': 'textGlow 4s ease-in-out infinite',
				'glow-rgb': 'glow 6s ease-in-out infinite',
				'rgb-glow': 'rgbGlow 5s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'slide-up': 'slide-up 0.6s ease-out',
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'lightning': 'lightning 3s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
				'slide-down': 'slide-down 4s linear infinite',
				'matrix-rain': 'matrix-rain 6s linear infinite'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-hero': 'var(--gradient-hero)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
