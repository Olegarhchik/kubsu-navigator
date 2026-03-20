import { Button } from '@/components';
import { colors, typography } from '@/constants';
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
    button: {
      ...typography[device].button,
      color: colors[theme].button.active
    }
  })

  return (
    <SafeAreaView style={[dynamicStyles.container, staticStyles.container]}>
      <Text style={[dynamicStyles.header, staticStyles.header]}>Добро пожаловать!</Text>

      <Button type="primary" href="/sign-in">
        <Text style={[dynamicStyles.button, staticStyles.button]}>Начать</Text>
      </Button>
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
  },
  button: {
    fontFamily: "Roboto"
  }
})