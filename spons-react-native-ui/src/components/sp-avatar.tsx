import { Image } from 'expo-image';

interface SpAvatarProps {
    url?: string
    name?: string
    size?: number
}

export function SpAvatar(props: SpAvatarProps) {
    const { url = null, name = "", size = 48 } = props
    var uri = url ? url : `https://api.dicebear.com/9.x/initials/svg?seed=${name}&backgroundType=solid,gradientLinear&scale=80`;

    return (
        <Image
            style={{
                width: size,
                height: size,
                aspectRatio: 1 / 1,
                borderRadius: 999,
            }}
            source={{ uri: uri }}
            placeholder={{ blurhash: '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[' }}
            contentFit="cover"
            contentPosition={"center"}
            placeholderContentFit="cover"
            transition={500}
        />
    )
}