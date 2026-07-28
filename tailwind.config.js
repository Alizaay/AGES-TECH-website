/** @type {import('tailwindcss').Config} */

import theme from "./src/design-system/tailwind.js";
import forms from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme,

  plugins: [forms, typographyPlugin, aspectRatio],
};