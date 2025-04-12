import { Text, type TextProps } from "react-native";
import { useTheme } from '../theme-provider';

interface SpTypoProps extends TextProps {
    variant?: "h1" | "h2" | "h3" | "lead" | "body" | "small" | "cardTitle";
    color?: "default" | "muted";
}

export function SpTypo(props: SpTypoProps) {
    const { style, variant = "body", color = "default", ...rest } = props
    const theme = useTheme();

    const variantStyles = {
        h1: { fontSize: 32, fontWeight: "700" },
        h2: { fontSize: 24, fontWeight: "700" },
        h3: { fontSize: 20, fontWeight: "600" },
        lead: { fontSize: 18, fontWeight: "400" },
        body: { fontSize: 16, fontWeight: "400" },
        small: { fontSize: 14, fontWeight: "400" },
        cardTitle: { fontSize: 16, fontWeight: "600" },
    } as const;

    const colorMapping = {
        default: "onBackground",
        muted: "muted"
    } as const;

    return <Text style={[
        {
            ...variantStyles[variant],
            color: theme.colors[colorMapping[color]]
        },
        style
    ]} {...rest} />
}