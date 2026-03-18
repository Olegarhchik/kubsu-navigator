import Button from '@/components/Button';
import themeColors from '@/constants/themeColors';
import typography from '@/constants/typography';
import { useDevice, useTheme } from '@/hooks';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
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
    <SafeAreaView style={[dynamicStyles.container, staticStyles.container]}>
      <Text style={[dynamicStyles.header, staticStyles.header]}>Добро пожаловать!</Text>

      <Button href="/sign-in" text="Начать" />
    </SafeAreaView>
  )
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 150,
    paddingHorizontal: 50,
  },
  header: {
    fontSize: 36,
    fontWeight: 700,
    textAlign: "center",
  }
})