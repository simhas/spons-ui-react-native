import type { GestureResponderEvent, ViewStyle } from "react-native";
import type { StyleProp, ViewProps } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../theme-provider";

interface SpCardProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    variant?: "default" | "outline";
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}

export function SpCard(props: SpCardProps) {
    const { children, style, onPress, variant = "default", ...rest } = props;

    const theme = useTheme();

    const variantStyles = {
        default: {
            backgroundColor: theme.colors.card,
            borderWidth: 2,
            borderColor: theme.colors.border,
        },
        outline: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#1e293b",
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
        borderRadius: 12,
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
