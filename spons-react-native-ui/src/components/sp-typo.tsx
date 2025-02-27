import { Text, type TextProps } from "react-native";
import { useTheme } from '../theme-provider';

interface SpTypoProps extends TextProps {
    variant?: "h1" | "lead" | "body";
    color?: "default" | "muted";
}

export function SpTypo(props: SpTypoProps) {
    const { style, variant = "body", color = "default", ...rest } = props
    const theme = useTheme();

    const variantStyles = {
        h1: { fontSize: 32, fontWeight: "700" },
        lead: { fontSize: 18, fontWeight: "400" },
        body: { fontSize: 16, fontWeight: "400" },
    } as const;

    const colorMapping = {
        default: "foreground",
        muted: "mutedForeground"
    } as const;

    return <Text style={[
        {
            ...variantStyles[variant],
            color: theme.colors[colorMapping[color]]
        },
        style
    ]} {...rest} />
}