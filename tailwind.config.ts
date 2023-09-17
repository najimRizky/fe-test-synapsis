import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "body-bg": "#f5f5f5",
        "body-text": colors.slate[600],
      },
      textColor: {
        "body-bg": "#f5f5f5",
        "body-text": colors.slate[600],
      },
      keyframes: {
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        "fade-out": {
          "frome": { opacity: "1" },
          "to": { opacity: "0" },
        },
        "slide-in": {
          "from": { transform: "translateX(100%)" },
          "to": { transform: "translateX(0)" },
        },
        "slide-out": {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(100%)" },
        },
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1180px',
        '2xl': '1400px',
      }
    },
  },
  plugins: [],
}
export default config
