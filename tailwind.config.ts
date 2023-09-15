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
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
export default config
