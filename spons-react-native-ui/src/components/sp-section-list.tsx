import {  SectionList, type SectionListProps } from "react-native";

export const SpSectionList = <T,>(props: SectionListProps<T>) => {
    return <SectionList contentContainerStyle={{ padding: 16, gap: 8 }}
        {...props} />
}