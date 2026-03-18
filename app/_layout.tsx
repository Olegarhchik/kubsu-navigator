import { useAuth, useTheme } from '@/hooks';
import { Stack } from "expo-router";
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const auth = useAuth(state => state.auth)
  const { setTheme } = useTheme()
  const colorScheme = useColorScheme()

  useEffect(() => {
    if (colorScheme)
      setTheme(colorScheme)
  }, [colorScheme])

  return (
    <Stack screenOptions={{
      headerShown: false,
      statusBarStyle: "dark"
    }}>
      <Stack.Protected guard={auth !== null}>
        <Stack.Screen
          name="(tabs)"
        />
      </Stack.Protected>
      <Stack.Protected guard={auth === null}>
        <Stack.Screen
          name="welcome"
        />
        <Stack.Screen
          name="sign-in"
        />
      </Stack.Protected>
    </Stack>
  )
}
