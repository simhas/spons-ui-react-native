import { StyleSheet, View } from 'react-native'
import { useTheme } from 'spons-react-native-ui';

export const SpDot = ({ color }: { color: string }) => {

    const theme = useTheme();

    return (
        <View style={[styles.dot, { borderColor: theme.colors.muted, backgroundColor: color }]} />
    )
}

const styles = StyleSheet.create({
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#000000',
    }
})