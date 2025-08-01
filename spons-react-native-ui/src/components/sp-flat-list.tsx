import { FlatList, type FlatListProps } from "react-native";

export const SpFlatList = <T,>(props: FlatListProps<T>) => {
    return <FlatList contentContainerStyle={{ padding: 16, gap: 8 }}
        {...props} />
}