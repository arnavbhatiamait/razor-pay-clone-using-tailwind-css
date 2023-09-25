/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish:{"Mulish":"sans-serif"}
      },
      colors:{
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        lightBlue500:"#0b72e7",
        greenLight:"#61cea6",
        grayText:"#818597",
        lightGray:"#e2e2e2",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        gray2:"#525a76",
        cyan1:"#00ffff",
        green1:"#00ff00ff",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubblegum: "#ff77e9",
        bermuda: "#78dcca",
      }
    },
  },
  plugins: [],
}