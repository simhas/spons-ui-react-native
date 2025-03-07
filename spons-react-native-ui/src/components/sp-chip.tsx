import { View, Text, type ViewProps, type TextStyle } from "react-native";
import { useTheme } from "../theme-provider";

interface SpChipProps extends ViewProps {
    textStyle?: TextStyle
}

export function SpChip(props: SpChipProps) {
    const { children, style, textStyle, ...rest } = props;

    const theme = useTheme()

    return (
        <View style={[
            {
                backgroundColor: theme.colors.primary,
                borderRadius: 4,
                justifyContent: "center"
            },
            style
        ]}
            {...rest}>
            {typeof children === 'string' ? (
                <Text style={[
                    {
                        color: theme.colors.primaryForeground,
                        fontSize: 12,
                        marginVertical: 6,
                        marginHorizontal: 8
                    },
                    textStyle
                ]}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </View>
    )
}