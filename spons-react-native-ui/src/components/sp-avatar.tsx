import { Image } from 'expo-image';
import { View, Text } from 'react-native';

interface SpAvatarProps {
    url?: string | null
    name?: string
    size?: number
    backgroundColor?: string | null
}

export function SpAvatar(props: SpAvatarProps) {

    const { url = null, name = "", size = 48, backgroundColor = null } = props

    function getColorFromText(text: string) {
        const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const hue = hash % 360;
        return `hsl(${hue}, 100%, 35%)`;
    }

    function getFontSizeFromSize(size: number) {
        if (size >= 80) {
            return 34
        }
        if (size <= 28) {
            return 12
        }
        return 18
    }

    if (url == null) {
        return (
            <View
                style={{
                    width: size,
                    height: size,
                    borderRadius: 999,
                    backgroundColor: backgroundColor ?? getColorFromText(name),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: "#FFFFFF", fontSize: getFontSizeFromSize(size), fontWeight: '600' }}>
                    {name.substring(0, 2).toUpperCase()}
                </Text>
            </View>
        )
    }

    return (
        <Image
            style={{
                width: size,
                height: size,
                aspectRatio: 1 / 1,
                borderRadius: 999,
            }}
            source={{ uri: url }}
            placeholder={{ blurhash: '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[' }}
            contentFit="cover"
            contentPosition={"center"}
            placeholderContentFit="cover"
            transition={500}
        />
    )
}