export interface SpTheme {
    colors: {
        primary: string;
        onPrimary: string;

        secondary: string;
        onSecondary: string;

        foreground: string;



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
        primary: "#A9C7FF",
        onPrimary: "#09305F",

        secondary: "#BEC7DC",
        onSecondary: "#283141",

        foreground: "#e2e2e9",

        muted: "#262626",
        mutedForeground: "#A3A3A6",

        card: "#020817",

        border: "#1e293b"
    }
}