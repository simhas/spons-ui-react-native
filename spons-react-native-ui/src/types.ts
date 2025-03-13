export interface SpTheme {
    colors: {
        foreground: string;

        primary: string;
        onPrimary: string;
        primaryForeground: string;

        muted: string;
        mutedForeground: string;

        card: string
        
        border: string
    }
}

//https://material-foundation.github.io/material-theme-builder/
//Main: #00458B
export const defaultTheme: SpTheme = {
    colors: {
        foreground: "#e2e2e9",

        primary: "#a9c7ff",
        onPrimary: "#09305f",
        primaryForeground: "#f9fafb",

        muted: "#262626",
        mutedForeground: "#A3A3A6",

        card: "#020817",

        border: "#1e293b"
    }
}