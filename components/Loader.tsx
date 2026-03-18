import themeColors from '@/constants/themeColors';
import { useTheme } from '@/hooks/useThemeStore';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loader() {
    const theme = useTheme(state => state.theme)

    return (
        <View style={[styles.container, { backgroundColor: themeColors[theme].primaryBg }]}>
            <ActivityIndicator size="large" color={themeColors[theme].color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: 'center'
    }
})