module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fly-zigzag': 'flyZigzag 6s linear infinite',
      },
      keyframes: {
        flyZigzag: {
          '0%':   { transform: 'translateX(-10%) translateY(0)' },
          '20%':  { transform: 'translateX(20%) translateY(-30px)' },
          '40%':  { transform: 'translateX(50%) translateY(30px)' },
          '60%':  { transform: 'translateX(80%) translateY(-30px)' },
          '80%':  { transform: 'translateX(110%) translateY(30px)' },
          '100%': { transform: 'translateX(140%) translateY(0)' },
        },
      },
    },
    
  },
  plugins: [],
};
