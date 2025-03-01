import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme-provider';

export function LoadingView() {

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});