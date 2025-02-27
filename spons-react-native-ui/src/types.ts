export interface SpTheme {
    colors: {
        foreground: string;
        mutedForeground: string;

        card: string
    }
}

export const defaultTheme: SpTheme = {
    colors: {
        foreground: "#E5E5E7",
        mutedForeground: "#9CA3AF",

        card: "#0D1511",
    }
}