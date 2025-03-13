import { Pressable, type ViewProps } from 'react-native';
import { SpTypo, useTheme } from 'spons-react-native-ui';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';

interface SpMenuItemProps extends ViewProps {
    title: string;
    icon: keyof typeof FontAwesome6.glyphMap;
    onPress: () => void;
}

export function SpMenuItem(props: SpMenuItemProps) {
    const theme = useTheme();
    const { title, icon, style,onPress, ...rest } = props;
    return (
        <Pressable
            {...rest}
            onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: pressed ? theme.colors.muted : undefined,
                    flex: 1,
                    flexDirection: "row",
                    minHeight: 48,
                    alignItems: "center",
                    padding: 16,
                    gap: 16
                }, style]}>
            <FontAwesome6 style={{ width: 26, height: 20 }} name={icon} size={20} color={theme.colors.mutedForeground} />
            <SpTypo style={{ flex: 1, color: theme.colors.foreground, fontSize: 16 }}>{title}</SpTypo>
            <FontAwesome6 name={"chevron-right"} size={14} color={theme.colors.mutedForeground} />
        </Pressable>
    )
}