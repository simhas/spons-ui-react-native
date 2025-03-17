import { Pressable, type ViewProps } from 'react-native';
import { SpTypo, useTheme } from 'spons-react-native-ui';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface SpMenuItemProps extends ViewProps {
    title: string;
    icon: keyof typeof FontAwesome6.glyphMap;
    onPress: () => void;
}

export function SpMenuItem(props: SpMenuItemProps) {
    const theme = useTheme();
    const { title, icon, style, onPress, ...rest } = props;
    return (
        <Pressable
            {...rest}
            onPress={onPress}
            style={({ pressed }) => [
                {
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    opacity: pressed ? 0.7 : 1,
                    elevation: 0, //pressed ? 1 : 2,
                    shadowOpacity: pressed ? 0.1 : 0.2,
                    backgroundColor: pressed ? `${theme.colors.muted}20` : undefined,
                    flex: 1,
                    flexDirection: "row",
                    minHeight: 48,
                    alignItems: "center",
                    paddingHorizontal: 16,
                    gap: 16
                }, style]}>
            <FontAwesome6 style={{ width: 26, height: 20 }} name={icon} size={20} color={theme.colors.muted} />
            <SpTypo style={{ flex: 1 }}>{title}</SpTypo>
            <FontAwesome6 name={"chevron-right"} size={14} color={theme.colors.muted} />
        </Pressable>
    )
}