/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                muted: "hsl(var(--muted))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                destructive: "hsl(var(--destructive))",
            },
        },
    },
    plugins: [],
}
