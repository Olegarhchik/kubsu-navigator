import Loader from '@/components/Loader';
import { useAuth } from '@/hooks/useAuth';
import { useBootstrap } from '@/hooks/useBootstrap';
import { Stack } from "expo-router";

export default function RootLayout() {
  const auth = useAuth(state => state.auth);
  const isLoading = auth === undefined;

  useBootstrap();

  if (isLoading)
    return <Loader />

  return (
    <Stack screenOptions={{ headerShown: false }}>
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
