/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      slate: "#45556c",
      lightSlate: "#62748e",
      darkSlate: "#1e2939",
      deepDarkSlate: "#1d293d",
      white: "#f1e1d9",
      // cyan: "#15d1e9",
      slate500: "#62748e",
      cyan: "#a3b3ff",
      // indigo300: "#a3b3ff",
      slate600: "#45556c",
      // orange: "#fb9718",
      orange: "#e17100",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#62748e",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
