export interface SpTheme {
    colors: {
        foreground: string;

        primary: string;
        primaryForeground: string;
        primaryOnBackground: string;

        muted: string;
        mutedForeground: string;
        mutedOnBackground: string;

        card: string
        
        border: string
    }
}

export const defaultTheme: SpTheme = {
    colors: {
        foreground: "#E5E5E7",

        primary: "#2563eb",
        primaryForeground: "#f9fafb",
        primaryOnBackground: "#60a5fa",

        muted: "#262626",
        mutedForeground: "#A3A3A6",
        mutedOnBackground: "#525252",

        card: "#020817",

        border: "#1e293b"
    }
}