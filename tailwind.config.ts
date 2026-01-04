import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      animation: {
        scroll: "scroll 30s linear infinite", // 30s speed hai (adjust kar sakte hain)
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
export default config