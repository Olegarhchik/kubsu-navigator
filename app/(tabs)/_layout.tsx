import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" />
      <Stack.Screen name="route" />
      <Stack.Screen name="timetable" />
      <Stack.Screen name="(additional)/tracked" />
      <Stack.Screen name="(additional)/settings" />
    </Stack>
  );
}