import { View, type ViewProps } from "react-native";
import { SpAvatar, SpTypo } from "spons-react-native-ui";

export function SpList(props: ViewProps) {
    return <View {...props} />
}

interface SpListItemProps extends ViewProps {
    url?: string
    title?: string
    subtitle?: string
}

export function SpListItem(props: SpListItemProps) {
    const { url, title, subtitle, style, ...rest } = props;

    return (
        <View {...rest} style={[{ flexDirection: "row", alignItems: "center", gap: 16 }, style ]}>
            <View style={{ width: 40, height: 40 }}>
                <SpAvatar url={url} name={title} size={40} />
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