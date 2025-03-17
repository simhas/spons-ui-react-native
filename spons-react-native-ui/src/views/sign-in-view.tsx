import { View, ImageBackground, Pressable, StyleSheet, type ImageSourcePropType } from "react-native";
import { SpTypo } from '../components/sp-typo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTheme } from '../theme-provider';

interface SignInViewProps {
    onSignIn: () => void;
    backgroundImageSource?: ImageSourcePropType | undefined
    title?: string
    text?: string
}

export function SignInView({ onSignIn, backgroundImageSource, title, text }: SignInViewProps) {
    const theme = useTheme();

    return (
        <ImageBackground
            source={backgroundImageSource}
            style={{ flex: 1, height: '100%', width: '100%' }}
            resizeMode="cover"
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.6)',
                justifyContent: 'center',
            }}>
                <View style={[
                    {
                        padding: 32,
                        borderRadius: 16,
                        margin: 20,
                        backgroundColor: theme.colors.card,
                        borderColor: 'rgba(255,255,255,0.18)',
                        gap: 32
                    },
                    styles.glassmorphism,
                ]}>
                    <View style={styles.headerContainer}>
                        <SpTypo variant="h1">{title}</SpTypo>
                        <SpTypo variant="lead" color="muted">{text}</SpTypo>
                    </View>

                    <View>
                        <Pressable
                            disabled={!onSignIn}
                            style={({ pressed }) => [
                                {
                                    opacity: pressed ? 0.8 : 1,
                                },
                                styles.authButton
                            ]}
                            onPress={() => onSignIn()}
                        >
                            <FontAwesome6 name="signal" size={24} color="#000000" />
                            <SpTypo style={{ color: '#000000', fontWeight: "600" }}>Continue with SportAuth</SpTypo>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    glassmorphism: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
    },
    headerContainer: {
        gap: 24,
    },
    authButton: {
        padding: 12,
        borderRadius: 8,
        minWidth: 48,
        minHeight: 48,
        flexDirection: "row",
        position: "relative",
        gap: 8,
        backgroundColor: "#F77F00",
        width: '100%',
        shadowColor: '#F77F00',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
})