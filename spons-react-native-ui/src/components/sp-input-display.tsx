import { View, type ViewProps } from "react-native"
import { SpCardHeader } from "./sp-card"
import { SpCard } from "./sp-card"
import { SpTypo } from "./sp-typo"

interface SpInputDisplay {
    label: string,
    value: string | number
}

interface SpInputDisplayProps extends ViewProps, SpInputDisplay {
}

interface SpInputDisplayGroupProps {
    title: string,
    items: SpInputDisplay[]
}

export const SpInputDisplay = (props: SpInputDisplayProps) => {
    const { label, value, ...rest } = props
    return (
        <View {...rest}>
            <SpTypo color="muted">{label}</SpTypo>
            <SpTypo variant="body">{value}</SpTypo>
        </View>
    )
}

export const SpInputDisplayGroup = (props: SpInputDisplayGroupProps) => {
    const { title, items } = props
    return (
        <SpCard>
            <SpCardHeader style={{ gap: 16 }}>
                <SpTypo variant="h3">{title}</SpTypo>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    rowGap: 8,
                }}>
                    {items.map((item, index) => (
                        <View key={index} style={[{
                            flex: 1,
                            minWidth: '50%'
                        },
                        index % 2 === 0 ? { paddingRight: 4 } : { paddingLeft: 4 }]
                        }>
                            <SpTypo color="muted">{item.label}</SpTypo>
                            <SpTypo variant="body">{item.value}</SpTypo>
                        </View>
                    ))}
                </View>
            </SpCardHeader>
        </SpCard>
    )
}