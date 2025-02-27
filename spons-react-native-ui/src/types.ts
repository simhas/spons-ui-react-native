export interface SpTheme {
    colors: {
        foreground: string;
        mutedForeground: string;
    }
}

export const defaultTheme: SpTheme = {
    colors: {
        foreground: "#E5E5E7",
        mutedForeground: "#9CA3AF",
    }
}