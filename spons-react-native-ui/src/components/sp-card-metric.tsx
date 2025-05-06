import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'spons-react-native-ui';
import React from 'react';

interface SpCardMetricProps {
    title: string;
    text: number | string;
    variant?: 'default' | 'soft';
    appearance?: 'default' | 'inverted';
    color?: "default" | "primary" | "secondary" | "error" | "warning" | "card" | "chart1" | "chart2" | "chart3" | "chart4" ;
}

export const SpCardMetric = ({ title, text, color = 'default', variant = 'default', appearance = 'default' }: SpCardMetricProps) => {
    const theme = useTheme();

    const colors = {
        default: {
            background: theme.colors.background,
            text: theme.colors.onBackground,
            softBackground: theme.colors.background,
            softText: theme.colors.onBackground
        },
        primary: {
            background: theme.colors.primary,
            text: theme.colors.onPrimary,
            softBackground: theme.colors.primary + "30",
            softText: theme.colors.primary + "EE"
        },
        secondary: {
            background: theme.colors.secondary,
            text: theme.colors.onSecondary,
            softBackground: theme.colors.secondary + "30",
            softText: theme.colors.secondary + "EE"
        },
        error: {
            background: theme.colors.error,
            text: theme.colors.onError,
            softBackground: theme.colors.error + "30",
            softText: theme.colors.error + "EE"
        }, 
        warning: {
            background: theme.colors.warning,
            text: theme.colors.onWarning,
            softBackground: theme.colors.warning + "30",
            softText: theme.colors.warning + "EE"
        },
        
        
        card: {
            background: theme.colors.card,
            text: theme.colors.onCard,
            softBackground: theme.colors.card,
            softText: theme.colors.onCard
        }, 
        chart1: {
            background: theme.colors.chart1,
            text: theme.colors.onBackground,
            softBackground: theme.colors.chart1 + "30",
            softText: theme.colors.chart1 + "EE"
        },
        chart2: {
            background: theme.colors.chart2,
            text: theme.colors.background,
            softBackground: theme.colors.chart2 + "30",
            softText: theme.colors.chart2 + "EE"
        },
        chart3: {
            background: theme.colors.chart3,
            text: theme.colors.background,
            softBackground: theme.colors.chart3 + "30",
            softText: theme.colors.chart3 + "EE"
        },
        chart4: {
            background: theme.colors.chart4,
            text: theme.colors.onBackground,
            softBackground: theme.colors.chart4 + "30",
            softText: theme.colors.chart4 + "EE"
        }
    };

    const variantStyles = {
        default: {
            backgroundColor: colors[color].background,
            textColor: colors[color].text,
        },
        soft: {
            backgroundColor: colors[color].softBackground,
            textColor: colors[color].softText
        },
    };



    const renderContent = () => {
        const titleElement = (
            <Text numberOfLines={1} style={[
                styles.title,
                { color: variantStyles[variant].textColor }
            ]}>
                {title}
            </Text>
        );

        const textElement = (
            <Text numberOfLines={1} style={[
                styles.text,
                { color: variantStyles[variant].textColor }
            ]}>
                {text}
            </Text>
        );

        return appearance === 'inverted' ? (
            <>
                {textElement}
                {titleElement}
            </>
        ) : (
            <>
                {titleElement}
                {textElement}
            </>
        );
    };

    return (
        <View style={[
            styles.container,
            { backgroundColor: variantStyles[variant].backgroundColor }
        ]}>
            {renderContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 0,
    },
    title: {
        fontSize: 14,
        marginBottom: 4,
        textAlign: 'right',
    },
    text: {
        textAlign: 'right',
        fontSize: 24,
        fontWeight: '600',
    }
});


export const SpCardMetricGrid = ({ children }: { children: React.ReactNode }) => {

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8
        }}>
            {children}
        </View>
    )
}
