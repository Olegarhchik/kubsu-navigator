import map from "@/assets/map";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";
import TabBarButton from "@/components/TabBarButton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

export default function IndexScreen() {
  const [showMore, setShowMore] = useState<boolean>(false)
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <View style={{ position: "absolute" }}>
        <SvgXml
          height={2000}
          width={2000}
          xml={map.data}
        />
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <SearchBar onPress={() => router.push("/search")} placeholder="Что ищете?" />
          <TabBar>
            {showMore ? 
              <>
                <TabBarButton onPress={() => setShowMore(prevShowMore => !prevShowMore)} label="Назад" />
                <TabBarButton label="Отслеживаемое" href="/tracked" />
                <TabBarButton label="Настройки" href="/settings" />
              </> :
              <>
                <TabBarButton onPress={() => setShowMore(prevShowMore => !prevShowMore)} label="Дополнительно" />
                <TabBarButton label="Маршрут" href="/route" />
                <TabBarButton label="Расписание" href="/timetable" />
              </>
            }
          </TabBar>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  }
})