import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" options={{
        presentation: "transparentModal",
        animation: "fade",
        animationDuration: 300,
      }}  />
      <Stack.Screen name="route" options={{
        presentation: "transparentModal",
        animation: "fade",
        animationDuration: 300,
      }}  />
      <Stack.Screen name="timetable" options={{
        presentation: "transparentModal",
        animation: "fade",
        animationDuration: 300,
      }} />
      <Stack.Screen name="(additional)/tracked" options={{
        presentation: "transparentModal",
        animation: "fade",
        animationDuration: 300,
      }}  />
      <Stack.Screen name="(additional)/settings" options={{
        presentation: "transparentModal",
        animation: "fade",
        animationDuration: 300,
      }}  />
    </Stack>
  );
}