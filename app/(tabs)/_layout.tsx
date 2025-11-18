import TabBar from "@/components/TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./(additional)/SettingsScreen";
import TrackedScreen from "./(additional)/TrackedScreen";
import HomeScreen from "./HomeScreen";
import RouteScreen from "./RouteScreen";
import TimetableScreen from "./TimetableScreen";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen
        name="route"
        component={RouteScreen}
        options={{ tabBarLabel: "Маршрут" }}
      />
      <Tab.Screen
        name="timetable"
        component={TimetableScreen}
        options={{ tabBarLabel: "Расписание" }}
      />
      <Tab.Screen
        name="tracked"
        component={TrackedScreen}
        options={{ tabBarLabel: "Отслеживаемое" }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Настройки" }}
      />
    </Tab.Navigator>
  );
}
