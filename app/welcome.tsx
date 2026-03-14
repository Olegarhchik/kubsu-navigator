import themeColors from '@/constants/themeColors';
import typography from '@/constants/typography';
import { useDevice } from "@/hooks/useDevice";
import { useTheme } from '@/hooks/useTheme';
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  const theme = useTheme(state => state.theme);
  const device = useDevice();

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: themeColors[theme].primaryBg
    },
    text: {
      color: themeColors[theme].color,
      fontSize: typography[device].base
    }
  })

  return (
    <View style={[dynamicStyles.container, staticStyles.container]}>
      <Text style={dynamicStyles.text}>WelcomeScreen</Text>
    </View>
  )
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})