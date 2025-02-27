import { Text, type TextProps } from "react-native";
import { useTheme } from '../theme-provider';

interface SpTypoProps extends TextProps {
    variant?: "h1" | "body";
}

export function SpTypo(props: SpTypoProps) {
    const { style, variant = "body", ...rest } = props
    const theme = useTheme();

    const variantStyles = {
        h1: { fontSize: 32, fontWeight: "600" },
        body: { fontSize: 16, fontWeight: "400" },
    } as const;

    return <Text style={[
        {
            ...variantStyles[variant],
            color: theme.colors.text
        },
        style
    ]} {...rest} />
}