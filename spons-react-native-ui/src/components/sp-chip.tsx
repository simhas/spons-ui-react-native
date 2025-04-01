import { View, Text, type ViewProps, type TextStyle } from "react-native";
import { useTheme } from "../theme-provider";

interface SpChipProps extends ViewProps {
    textStyle?: TextStyle
    variant?: "default" | "soft"
}

export function SpChip(props: SpChipProps) {
    const { children, style, textStyle, variant = "default", ...rest } = props;

    const theme = useTheme()

    const variantStyles = {
        default: {
            backgroundColor: theme.colors.primary,
            textColor: theme.colors.onPrimary,
        },
        soft: {
            backgroundColor: theme.colors.primary + "20",
            textColor: theme.colors.primary
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