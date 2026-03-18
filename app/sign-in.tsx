import themeColors from '@/constants/themeColors';
import typography from '@/constants/typography';
import { useDevice, useTheme } from '@/hooks';
import { StyleSheet, Text, View } from 'react-native';

export default function SignInScreen() {
  const { theme } = useTheme();
  const device = useDevice();

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: themeColors[theme].primaryBg
    },
    header: {
      color: themeColors[theme].color,
    },
    text: {
      color: themeColors[theme].color,
      fontSize: typography[device].base
    }
  })

  return (
    <View style={[dynamicStyles.container, staticStyles.container]}>
      <Text>Please not sign in.</Text>
    </View>
  )
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})