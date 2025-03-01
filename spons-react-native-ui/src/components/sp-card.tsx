import type { ViewStyle } from "react-native";
import type { StyleProp, PressableProps } from "react-native";
import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme-provider";

interface SpCardProps extends PressableProps {
    style?: StyleProp<ViewStyle>;
}

export function SpCard(props: SpCardProps) {
    const { children, style, onPress, ...rest } = props;

    const theme = useTheme();

    return (
        <Pressable
            style={({ pressed }) => [
                styles.card,
                {
                    backgroundColor: theme.colors.card,
                    borderWidth: 1,
                    borderColor: theme.colors.border,
                },
                style,
                { opacity: pressed ? 0.8 : 1 }
            ]}
            {...rest}
        >
            {children}
        </Pressable>
    );
};

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
    },
});
