import { AuthData } from '@/assets/authData';
import { LoginIcon, PasswordIcon } from '@/assets/icons';
import { Button, Input } from '@/components';
import { AUTH, colors, typography } from '@/constants';
import { delay, message, Storage } from '@/helpers';
import { useAuth, useDevice, useTheme } from '@/hooks';
import { useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const { setAuth } = useAuth()
  const { theme } = useTheme()
  const device = useDevice()
  const focusRef = useRef<TextInput>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [authData, setAuthData] = useState<AuthData>({ login: "", password: "" })

  const size = {
    width: 16,
    height: 16
  }

  async function checkAuthData() {
    if (authData.login === "" || authData.login === "") {
      message("Заполните все поля")
      return
    }

    setIsLoading(true)
    await delay(500)

    const validAuthData: AuthData = require("@/assets/authData").default

    const isValid = (
      validAuthData.login === authData.login &&
      validAuthData.password === authData.password
    )

    if (isValid) {
      setAuth(AUTH.USER)
      Storage.setItem("auth", authData.login)
      return
    }

    setIsLoading(false)
    message("Неверные данные")
  }

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: colors[theme].primaryBg
    },
    header: {
      ...typography[device].header,
      color: colors[theme].main,
    },
    button: {
      ...typography[device].button,
      color: colors[theme].button.active
    }
  })

  return (
    <SafeAreaView style={[dynamicStyles.container, staticStyles.container]}>
      <Text style={[dynamicStyles.header, staticStyles.header]}>Войдите в систему</Text>

      <View style={[staticStyles.content]}>
        <View style={[staticStyles.inputGroup]}>
          <Input
            props={{
              placeholder: "Введите логин",
              returnKeyType: "next",
              blurOnSubmit: false,
              onSubmitEditing: () => focusRef.current?.focus(),
              autoFocus: true,
              onChangeText: (text) => setAuthData(prevAuthData => ({ ...prevAuthData, login: text }))
            }}
            icon={(color) => <LoginIcon {...size} fill={color} />}
          />

          <Input
            props={{
              placeholder: "Введите пароль",
              returnKeyType: "done",
              secureTextEntry: true,
              onSubmitEditing: async () => await checkAuthData(),
              ref: focusRef,
              onChangeText: (text) => setAuthData(prevAuthData => ({ ...prevAuthData, password: text }))
            }}
            icon={(color) => <PasswordIcon {...size} fill={color} />}
          />
        </View>

        <View style={[staticStyles.buttonGroup]}>
          <Button type="primary" onPress={async () => await checkAuthData()}>
            {
              isLoading ?
                <ActivityIndicator style={{ width: 40 }} color={colors[theme].main} /> :
                <Text style={[dynamicStyles.button, staticStyles.button]}>Войти</Text>
            }
          </Button>

          <Button type="underline" onPress={() => {
            setAuth(AUTH.GUEST)
            Storage.setItem("auth", AUTH.GUEST)
          }}>
            <Text style={
              [
                dynamicStyles.button,
                staticStyles.button,
                {
                  fontSize: 12,
                  textDecorationLine: "underline"
                }
              ]
            }>Войти как гость</Text>
          </Button>
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
  inputGroup: {
    gap: 10
  },
  buttonGroup: {
    gap: 15,
    alignItems: "center"
  },
  button: {
    fontFamily: "Roboto"
  }
})