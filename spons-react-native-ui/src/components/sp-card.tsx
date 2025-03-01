import type { ViewStyle } from "react-native";
import type { StyleProp } from "react-native";
import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme-provider";

interface SpCardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export function SpCard({ children, style, onPress }: SpCardProps) {

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
            onPress={onPress}
        >
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        padding: 16,
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
