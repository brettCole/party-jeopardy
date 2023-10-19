/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'jeopardyYellow': '#FFCC00'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gyparody: ['var(--font-gyparody)']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "synthwave",
      "aqua"
    ],
    darkTheme: "synthwave"
  },
}
