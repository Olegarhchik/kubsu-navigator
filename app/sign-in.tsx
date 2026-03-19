import { LoginIcon, PasswordIcon } from '@/assets/icons';
import Input from '@/components/Input';
import colors from '@/constants/colors';
import typography from '@/constants/typography';
import { useDevice, useTheme } from '@/hooks';
import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const { theme } = useTheme()
  const device = useDevice()
  const focusRef = useRef<TextInput>(null)

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: colors[theme].primaryBg
    },
    header: {
      ...typography[device].header,
      color: colors[theme].main,
    }
  })

  return (
    <SafeAreaView style={[dynamicStyles.container, staticStyles.container]}>
      <Text style={[dynamicStyles.header, staticStyles.header]}>Войдите в систему</Text>

      <View style={[staticStyles.content]}>
        <View style={[staticStyles.buttonGroup]}>
          <Input
            props={{
              placeholder: "Введите логин",
              returnKeyType: "next",
              autoFocus: true
            }}
            icon={(color) => <LoginIcon width={16} height={16} fill={color} />}
            handler={() => focusRef.current?.focus()}
          />
          <Input
            props={{
              placeholder: "Введите пароль",
              returnKeyType: "done",
              secureTextEntry: true,
              ref: focusRef
            }}
            icon={(color) => <PasswordIcon width={16} height={16} fill={color} />}
          />
        </View>


      </View>
    </SafeAreaView>
  )
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 150,
    paddingHorizontal: 25,
    gap: 50
  },
  header: {
    textAlign: "center",
    fontSize: 36,
    paddingHorizontal: 25
  },
  content: {
    flex: 1,
    justifyContent: "space-between"
  },
  buttonGroup: {
    gap: 10
  }
})