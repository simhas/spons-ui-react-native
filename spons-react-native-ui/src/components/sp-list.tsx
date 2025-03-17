import { View, type ViewProps } from "react-native";
import { SpAvatar, SpTypo } from "spons-react-native-ui";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export function SpList(props: ViewProps) {
    return <View {...props} />
}

interface SpListItemProps extends ViewProps {
    url?: string
    title?: string
    subtitle?: string
    icon?: keyof typeof FontAwesome6.glyphMap;
}

export function SpListItem(props: SpListItemProps) {
    const { url, title, subtitle, icon, style, ...rest } = props;

    return (
        <View {...rest} style={[{ flexDirection: "row", alignItems: "center", gap: 16 }, style]}>
            <View style={{ width: 40, height: 40 }}>
                {icon ? (
                    <FontAwesome6 name={icon} size={24} color="black" />
                ) : (
                    <SpAvatar url={url} name={title} size={40} />
                )}
            </View>
            <View style={{ flex: 1 }}>
                <SpTypo style={{ fontSize: 14, fontWeight: "500" }} variant="body">{title}</SpTypo>
                {subtitle && (
                    <SpTypo color="muted" numberOfLines={2} style={{ fontSize: 12, fontWeight: "400" }} variant="body">{subtitle}</SpTypo>
                )}
            </View>
        </View>
    )
}