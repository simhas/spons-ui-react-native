import { ActivityIndicator, Pressable, View, Text, type PressableProps, type StyleProp, type ViewStyle, type TextStyle } from "react-native";
import { useTheme } from "../theme-provider";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface SpButtonProps extends PressableProps {
    isLoading?: boolean
    variant?: "default" | "outlined" | "rounded" | "text"
    color?: "primary" | "secondary" | "muted"
    children?: React.ReactNode | string
    style?: StyleProp<ViewStyle>
    icon?: keyof typeof FontAwesome6.glyphMap
}

export function SpButton(props: SpButtonProps) {
    const { icon, children, onPress, disabled, isLoading, style, variant = "default", color = "primary", ...rest } = props
    const theme = useTheme()

    const colors = {
        primary: {
            foreground: theme.colors.onPrimary,
            background: theme.colors.primary,
        },
        secondary: {
            foreground: theme.colors.onSecondary,
            background: theme.colors.secondary,
        },
        muted: {
            foreground: theme.colors.onMuted,
            background: theme.colors.muted,
        }
    }

    const defaultButtonTheme = {
        backgroundColor: colors[color].background,
        backgroundPressed: `${colors[color].background}20`,
        borderColor: colors[color].background,
        textColor: colors[color].foreground,
        borderWidth: 1,
        borderRadius: 2,
        elevation: 1,
        elevationPressed: 2,
    }

    const buttonThemes = {
        default: {
            ...defaultButtonTheme
        },
        outlined: {
            ...defaultButtonTheme,
            backgroundColor: "transparent",
            backgroundPressed: "transparent",
            borderColor: colors[color].background,
            textColor: colors[color].background,
        },
        rounded: {
            ...defaultButtonTheme,
            borderRadius: 24
        },
        text: {
            ...defaultButtonTheme,
            backgroundColor: "transparent",
            backgroundPressed: "transparent",
            borderColor: "transparent",
            textColor: colors[color].background,
            elevation: 0,
            elevationPressed: 0,
        }
    }

    const {
        backgroundPressed,
        backgroundColor,
        borderColor,
        textColor,
        borderWidth,
        borderRadius,
        elevation,
        elevationPressed
    } = buttonThemes[variant]

    const textStyle: TextStyle = {
        color: textColor,
        fontSize: 14,
        fontWeight: "500"
    }

    const content =
        typeof children === 'string' ? (
            <Text style={textStyle}>{children}</Text>
        ) : (
            children
        );

    return (
        <Pressable
            {...rest}
            style={({ pressed }) => [
                {
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    opacity: pressed ? 0.7 : ((isLoading || disabled) ? 0.5 : 1),
                    elevation: pressed ? elevationPressed : elevation,
                    shadowOpacity: pressed ? 0.1 : 0.2,
                    backgroundColor: pressed ? backgroundPressed : backgroundColor,
                    minHeight: 36,
                    minWidth: 48,
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                    position: "relative",
                    justifyContent: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    gap: 8,
                    borderRadius: borderRadius
                },
                style
            ]}
            hitSlop={5}
            onPress={onPress}
            disabled={isLoading || disabled}
        >
            {icon && <FontAwesome6 name={icon} size={24} color={textColor} />}
            {content}
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

interface SpButtonTextProps extends Omit<SpButtonProps, "children"> {
    title?: string
}

export function SpButtonText(props: SpButtonTextProps) {
    const { title, ...rest } = props
    return <SpButton {...rest}>
        {title}
    </SpButton>
}

interface SpButtonIconProps extends Omit<SpButtonProps, "children"> {
    icon: keyof typeof FontAwesome6.glyphMap;
}

export function SpButtonIcon(props: SpButtonIconProps) {
    const { variant = "text", color = "secondary", ...rest } = props
    return <SpButton variant={variant} color={color} {...rest} />
}