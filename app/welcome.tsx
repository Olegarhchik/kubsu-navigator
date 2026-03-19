import Button from '@/components/Button';
import colors from '@/constants/colors';
import typography from '@/constants/typography';
import { useDevice, useTheme } from '@/hooks';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const { theme } = useTheme();
  const device = useDevice();

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: colors[theme].primaryBg
    },
    header: {
      ...typography[device].header,
      color: colors[theme].main
    },
    text: {
      ...typography[device].base,
      color: colors[theme].main
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
    paddingHorizontal: 50
  },
  header: {
    textAlign: "center",
    fontSize: 36
  }
})