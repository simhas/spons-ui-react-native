import type { GestureResponderEvent, ViewStyle } from "react-native";
import type { StyleProp, ViewProps } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../theme-provider";

interface SpCardProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    variant?: "default" | "outline";
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
        }
    }

    const variantStyles = {
        default: {
            backgroundColor: colors[color].background,
            borderWidth: 1,
            borderColor: colors[color].border
        },
        outline: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors[color].border,
        },
    } as const;
    
    if (!onPress) {
        return (
            <View
                style={[
                    styles.card,
                    variantStyles[variant],
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
                    borderLeftColor: theme.colors.primary,
                    borderLeftWidth: 4,
                    marginLeft: -4,
                },
                style,
                { opacity: pressed ? 0.8 : 1 }
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
        elevation: 3,
        gap: 8
    },
});
