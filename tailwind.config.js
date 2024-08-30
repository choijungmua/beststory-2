/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src//**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        }
      },
      colors: {
        primary: '#495DAC', // 주 색상
        secondary: '#FFD447', // 보조 색상
        tertiary: '#D8DEF3', // 제 3 색상
        info: '#D8DEF3', // 정보 상태 색상
        error: '#FB5254', // 오류 상태SSS 색상

        bgColor: '#F3F3F3', // 백그라운드 색상
        dark: '#1f2937', // 어두운 색상
        success: '#38c172', // 성공 상태 색상
        warning: '#f59e0b', // 경고 상태 색상
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"], 
        Roboto: ["Roboto", "sans-serif"],
      },

    },
  },
  plugins: [],
}

