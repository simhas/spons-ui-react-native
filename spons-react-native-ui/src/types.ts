export interface SpTheme {
    colors: {
        background: string;
        onBackground: string;

        primary: string;
        onPrimary: string;

        secondary: string;
        onSecondary: string;

        tertiary: string;
        onTertiary: string;

        muted: string;
        onMuted: string;


        card: string
        
        border: string
    }
}

export const lightTheme: SpTheme = {
    colors: {
        background: "#FFFFFF",
        onBackground: "#0C1322",
        primary: "#2563EB",
        onPrimary: "#0C1322",
        secondary: "#F1F5FB",
        onSecondary: "#1C2536",
        tertiary: "#6F5575",
        onTertiary: "#FFFFFF",
        muted: "#6B7A99",
        onMuted: "#F1F5FB",

        //TODO check
        card: "#FFFFFF",
        border: "#E5EAF2"
    }
}

//https://material-foundation.github.io/material-theme-builder/
//Main: #00458B
// Background: black
//Primary: blue
//Secondary: white
//Tertiary: orange
//Muted: gray

export const defaultTheme: SpTheme = {
    colors: {
        background: "#0B0A0A",
        onBackground: "#F2F2F2",
        primary: "#A9C7FF",
        onPrimary: "#09305F",
        secondary: "#F4F4F5",
        onSecondary: "#283141",
        tertiary: "#ffb787",
        onTertiary: "#512400",
        muted: "#A3A3A6",
        onMuted:  "#262626",

        //TODO check
        card: "#020817",
        border: "#1e293b"
    }
}

// This is the basis for golf tome
/* .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: 142.1 70.6% 45.3%;
    --primary-foreground: 144.9 80.4% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 142.4 71.8% 29.2%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  } */