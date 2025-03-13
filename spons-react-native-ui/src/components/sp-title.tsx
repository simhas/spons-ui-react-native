import { View, type ViewProps } from 'react-native';
import { useTheme } from 'spons-react-native-ui';
import { SpTypo } from './sp-typo';

type TitleSize = 'small' | 'medium' | 'large';

interface SpTitleProps extends ViewProps {
    size?: TitleSize;
    children: React.ReactNode;
}

export function SpTitle({
    children,
    size = 'large',
    style,
    ...rest
}: SpTitleProps) {
    const theme = useTheme();

    const sizeStyles = {
        small: {
            fontSize: 20,
            lineHeight: 28,
            underlineWidth: 60
        },
        medium: {
            fontSize: 24,
            lineHeight: 32,
            underlineWidth: 75
        },
        large: {
            fontSize: 32,
            lineHeight: 40,
            underlineWidth: 90
        }
    } as const;

    if (!children) {
        return null;
    }

    return (
        <View style={style} {...rest}>
            <SpTypo
                style={{
                    fontSize: sizeStyles[size].fontSize,
                    lineHeight: sizeStyles[size].lineHeight,
                    fontWeight: "700"
                }}
            >
                {children}
            </SpTypo>
            <View
                style={{
                    marginTop: 4,
                    width: sizeStyles[size].underlineWidth,
                    backgroundColor: theme.colors.primary,
                    height: 1
                }}
            />
        </View>
    );
}

