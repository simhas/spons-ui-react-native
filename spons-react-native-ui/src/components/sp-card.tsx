import type { GestureResponderEvent, ViewStyle } from "react-native";
import type { StyleProp, ViewProps } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../theme-provider";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SpTypo } from "./sp-typo";

interface SpCardProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    variant?: "default" | "outline" | "none";
    color?: "default" | "secondary";
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
    active?: boolean;
}

export function SpCard(props: SpCardProps) {
    const { active, children, style, onPress, variant = "default", color = "default", ...rest } = props;

    const theme = useTheme();

    const colors = {
        default: {
            border: theme.colors.border,
            background: theme.colors.card,
        },
        secondary: {
            border: theme.colors.secondary,
            background: theme.colors.secondary,
        },
        none: {
            border: "transparent",
            background: "transparent",
        }
    }

    const variantStyles = {
        default: {
            backgroundColor: colors[color].background,
            borderWidth: 0,
            borderColor: colors[color].border
        },
        outline: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors[color].border,
        },
        none: {
            backgroundColor: "transparent",
            borderWidth: 0,
            borderColor: "transparent",
            boxShadow: "none",
        },
    } as const;

    if (!onPress) {
        return (
            <View
                style={[
                    styles.card,
                    variantStyles[variant],
                    active && {
                        borderColor: theme.colors.primary,
                        borderLeftWidth: 4
                    },
                    style
                ]}
                {...rest}
            >
                {children}
            </View>
        )
    }

    return (
        <Pressable
            style={({ pressed }) => [
                styles.card,
                variantStyles[variant],
                active && {
                    borderColor: theme.colors.primary,
                    borderLeftWidth: 4
                },
                style,
                { opacity: pressed ? 0.8 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] }
            ]}
            onPress={onPress}
            {...rest}
        >
            {children}
        </Pressable>
    );
};

export function SpCardHeader(props: ViewProps) {
    const { children, style, ...rest } = props;

    return (
        <View style={[
            {
                padding: 16
            },
            style
        ]} {...rest}>{children}</View>
    )
}

export function SpCardBox(props: ViewProps & { hideChevron?: boolean }) {
    const { children, style, hideChevron = false, ...rest } = props;

    return (
        <View style={[
            {
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            style
        ]} {...rest}>
            {children}
            {!hideChevron && <SpCardChevron />}
        </View>
    )
}

export function SpCardChevron() {
    const theme = useTheme();

    return (
        <View style={{ justifyContent: 'space-around', alignItems: 'flex-end' }}>
            <FontAwesome6 name="chevron-right" size={14} color={theme.colors.muted} />
        </View>
    )
}

export function SpCardContent(props: ViewProps) {
    const { children, style, ...rest } = props;

    return (
        <View style={[
            {
                paddingHorizontal: 16,
                paddingBottom: 16
            },
            style
        ]} {...rest}>{children}</View>
    )
}

export function SpCardBadge({
    text, icon, color = "primary"
}: {
    text?: string,
    icon?: keyof typeof FontAwesome6.glyphMap,
    color?: "primary" | "secondary" | "tertiary" | "error" | "warning"
}) {
    const theme = useTheme();

    const colors = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        tertiary: theme.colors.tertiary,
        error: theme.colors.error,
        warning: theme.colors.warning
    }

    return (
        <View style={[styles.createdBadge, { backgroundColor: colors[color] + '15' }]}>
            {icon && (
                <View style={[styles.badgeIcon, { backgroundColor: colors[color] + '30' }]}>
                    <FontAwesome6 name={icon} size={10} color={colors[color]} />
                </View>
            )}
            {text && (
                <SpTypo variant='small' style={[styles.badgeText, { color: colors[color] }]}>
                    {text}
                </SpTypo>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 0
    },
    createdBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        zIndex: 1,
    },
    badgeIcon: {
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontWeight: '600',
        fontSize: 12,
    }
});
