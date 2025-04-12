import { View, Text, type ViewProps, type TextStyle } from "react-native";
import { useTheme } from "../theme-provider";

interface SpChipProps extends ViewProps {
    textStyle?: TextStyle
    variant?: "default" | "soft"
    color?: "primary" | "secondary"
}

export function SpChip(props: SpChipProps) {
    const { children, style, textStyle, variant = "default", color = "primary", ...rest } = props;

    const theme = useTheme()

    const colors = {
        primary: {
            background: theme.colors.primary,
            text: theme.colors.onPrimary,
        },
        secondary: {
            background: theme.colors.secondary,
            text: theme.colors.onSecondary,
        }
    };

    const variantStyles = {
        default: {
            backgroundColor: colors[color].background,
            textColor: colors[color].text,
        },
        soft: {
            backgroundColor: colors[color].text + "20",
            textColor: colors[color].text
        },
    };

    return (
        <View style={[
            {
                backgroundColor: variantStyles[variant].backgroundColor,
                justifyContent: "center",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 16,
            },
            style
        ]}
            {...rest}>
            {typeof children === 'string' ? (
                <Text style={[
                    {
                        color: variantStyles[variant].textColor,
                        fontSize: 14,
                        fontWeight: '600'
                    },
                    textStyle
                ]}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </View>
    )
}