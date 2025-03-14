import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../theme-provider';

interface SpEmptyProps {
    title?: string;
    message?: string;
    icon?: keyof typeof FontAwesome6.glyphMap;
}

export const SpBoxEmpty = ({
    title = 'Nothing Here',
    message = undefined,
    icon = undefined
}: SpEmptyProps) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const theme = useTheme();

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[
            styles.container,
            { opacity: fadeAnim }
        ]}>
            {icon && (
                <FontAwesome6 name={icon} size={64} color={theme.colors.tertiary} />
            )}
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: theme.colors.onBackground }]}>{title}</Text>
                {message && (
                    <Text style={[styles.message, { color: theme.colors.muted }]}>{message}</Text>
                )}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textContainer: {
        marginLeft: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 16,
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    message: {
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 24,
    }
});