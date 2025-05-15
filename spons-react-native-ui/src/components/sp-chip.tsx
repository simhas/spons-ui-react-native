import { View, Text, type ViewProps, type TextStyle } from "react-native";
import { useTheme } from "../theme-provider";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface SpChipProps extends ViewProps {
    textStyle?: TextStyle
    variant?: "default" | "soft"
    color?: "primary" | "secondary" | "tertiary" | "error" | "warning"
    icon?: keyof typeof FontAwesome6.glyphMap
}

export function SpChip(props: SpChipProps) {
    const { children, style, textStyle, variant = "default", color = "primary", icon, ...rest } = props;

    const theme = useTheme()

    const colors = {
        primary: {
            background: theme.colors.primary,
            text: theme.colors.onPrimary,
        },
        secondary: {
            background: theme.colors.secondary,
            text: theme.colors.onSecondary,
        },
        tertiary: {
            background: theme.colors.tertiary,
            text: theme.colors.onTertiary,
        },
        error: {
            background: theme.colors.error,
            text: theme.colors.onError,
        },
        warning: {
            background: theme.colors.warning,
            text: theme.colors.onWarning,
        }
    };

    const variantStyles = {
        default: {
            backgroundColor: colors[color].background,
            textColor: colors[color].text,
        },
        soft: {
            backgroundColor: colors[color].background + "20",
            textColor: colors[color].background
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
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4
            },
            style
        ]}
            {...rest}>
            {icon && (
                <FontAwesome6 name={icon} size={12} color={variantStyles[variant].textColor} />
            )}
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