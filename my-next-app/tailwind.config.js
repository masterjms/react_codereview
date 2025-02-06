/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Next.js App Router 경로
    "./components/**/*.{js,ts,jsx,tsx}",  // 컴포넌트 폴더 포함
    "./pages/**/*.{js,ts,jsx,tsx}"  // (Optional) Next.js Pages Router 지원
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

