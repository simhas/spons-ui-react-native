import { ActivityIndicator, Pressable, View, Text, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "../theme-provider";

interface SpButtonProps extends PressableProps {
    isLoading?: boolean
    variant?: "default" | "outlined"
    color?: "primary" | "secondary" | "muted"
    children?: React.ReactNode | string
    style?: StyleProp<ViewStyle>
}

export function SpButton(props: SpButtonProps) {
    const { children, onPress, disabled, isLoading, style, variant = "default", color = "primary" } = props
    const theme = useTheme()
    
    const colors = {
        primary: {
            foreground: theme.colors.onPrimary,
            background: theme.colors.primary
        },
        secondary: {
            foreground: theme.colors.onSecondary,
            background: theme.colors.secondary
        },
        muted: {
            foreground: theme.colors.onMuted,
            background: theme.colors.muted
        }
    }

    const buttonThemes = {
        default: {
            containerColor: colors[color].background,
            borderColor: colors[color].background,
            textColor: colors[color].foreground,
            borderWidth: 0
        },
        outlined: {
            containerColor: "transparent",
            borderColor: colors[color].background,
            textColor: colors[color].background,
            borderWidth: 1
        }
    }

    const { containerColor, borderColor, textColor, borderWidth } = buttonThemes[variant]

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : ((isLoading || disabled) ? 0.5 : 1),
                    minHeight: 36,
                    minWidth: 48,
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                    backgroundColor: containerColor,
                    position: "relative",
                    justifyContent: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    gap: 8,
                    borderRadius: 2
                },
                style
            ]}
            hitSlop={5}
            onPress={onPress}
            disabled={isLoading || disabled}
        >
            {typeof children === 'string' ? (
                <Text style={{
                    color: textColor,
                    fontSize: 14,
                    fontWeight: "500"
                }}>
                    {children}
                </Text>
            ) : (
                children
            )}
            {isLoading && (
                <View style={{
                    position: "absolute",
                    inset: 0,
                    justifyContent: "center"
                }}>
                    <ActivityIndicator
                        size="small"
                        color={textColor} />
                </View>
            )}

        </Pressable>
    )
}
