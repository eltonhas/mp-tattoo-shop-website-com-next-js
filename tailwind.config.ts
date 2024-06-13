import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        londrina: 'var(--font-londrinaSolid)',
        island: 'var(--font-islandMoments)',
      },
      colors: {
        headings: '#FFFFFF',
        typography: '#CCCCCC',
        muted: '#636363',
        'brand-color': '#FFD911',
        'background-color': '#191919',
        'footer-background': '#161616',
        'footer-text': '#767676',
        'bg-text': '#212121',
      },
    },
  },
  plugins: [],
}
export default config
