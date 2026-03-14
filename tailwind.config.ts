import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
	content: [
		"./src/app/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/pages/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#f0f9ff",
					500: "#0ea5e9", // Base your theme here
					900: "#0c4a6e",
				},
			},
			backgroundImage: {
				"glass-gradient":
					"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
			},
			boxShadow: {
				premium:
					"0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.05)",
			},
		},
	},
	plugins: [scrollbarHide],
};

export default config;
