export interface SpTheme {
    colors: {
        foreground: string;

        primary: string;
        primaryForeground: string;

        muted: string;
        mutedForeground: string;

        card: string
        
        border: string
    }
}

export const defaultTheme: SpTheme = {
    colors: {
        foreground: "#E5E5E7",

        primary: "#2563eb",
        primaryForeground: "#f9fafb",

        muted: "#262626",
        mutedForeground: "#A3A3A6",

        card: "#020817",

        border: "#1e293b"
    }
}