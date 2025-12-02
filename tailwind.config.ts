import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                pink: {
                    DEFAULT: "#FF4FA3",
                    light: "#F57CA8",
                    pale: "#FF8ECF",
                },
            },
            fontFamily: {
                sans: ["var(--font-shantell-sans)", "sans-serif"],
                display: ["var(--font-anton)", "sans-serif"],
                script: ["var(--font-caveat)", "cursive"], // Fallback for Playlist Script
                shadows: ["var(--font-shadows)", "cursive"],
            },
            backgroundImage: {
                'tape-clear': "url('/assets/tape-clear.png')", // Placeholder
                'tape-washi': "url('/assets/tape-washi.png')", // Placeholder
                'tape-masking': "url('/assets/tape-masking.png')", // Placeholder
            },
            rotation: {
                '1': '1deg',
                '-1': '-1deg',
                '2': '2deg',
                '-2': '-2deg',
                '3': '3deg',
                '-3': '-3deg',
                '6': '6deg',
                '-6': '-6deg',
            }
        },
    },
    plugins: [],
};
export default config;
