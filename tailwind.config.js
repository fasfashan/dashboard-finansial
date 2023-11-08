/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        smalll: "14px",
        medium:"16px",
        large: "18px",
        extraLarge: "30px"
      },
      colors:{
        neutral25: "#WFCFCFD",
        neutral50: "#F8FAFC",
        neutral100: "#EEF2F6",
        neutral200: "#E3E8EF",
        neutral300: "#CDD5DF",
        neutral400: "#9AA4B2",
        neutral500: "#697586",
        neutral600: "#4B5565",
        neutral700: "#364152",
        neutral800: "#202939",
        neutral900: "#121926",
        primary25: "#F5F8FF",
        primary50: "#EFF4FF",
        primary100: "#D1E0FF",
        primary200: "#B2CCFF",
        primary300: "#84ADFF",
        primary400: "#528BFF",
        primary500: "#2970FF",
        primary600: "#155EEF",
        primary700: "#004EEB",
        primary800: "#0040C1",
        primary900: "#00359E",
        success25: "#F6FEF9",
        success50: "#EDFCF2",
        success100: "#D3F8DF",
        success200: "#AAF0C4",
        success300: "#73E2A3",
        success400: "#3CCB7F",
        success500: "#16B364",
        success600: "#099250",
        success700: "#087443",
        success800: "#095C37",
        success900: "#084C2E",
      },
      backgroundColor:{
        linear: "linear-gradient(45deg, #00359E 0%, #155EEF 100%);"
      }
    },
  },
  plugins: [],
}