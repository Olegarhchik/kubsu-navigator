import map from "@/assets/map";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";
import TabBarButton from "@/components/TabBarButton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

export default function IndexScreen() {
  const { width, height } = Dimensions.get("screen");

  const [showMore, setShowMore] = useState<boolean>(false)
  const router = useRouter();
  const offset = useSharedValue<{x: number, y: number }>({ x: -1000, y: -1000})

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y }
    ]
  }))

  const pan = Gesture.Pan()
    .onChange((event) => {
      let { x, y } = offset.value
      let [newX, newY] = [x + event.changeX, y + event.changeY]

      if (-2000 < newX && newX < 0)
        x += event.changeX;

      if (-2000 < newY && newY < 0)
        y += event.changeY
      
      offset.value = { x, y }
    })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[{
            position: "absolute",
            paddingVertical: height / 2,
            paddingHorizontal: width / 2,
            backgroundColor: "#fff",
          }, animatedStyle]}>
          <SvgXml
            height={2000}
            width={2000}
            xml={map.data}
          />
        </Animated.View>
      </GestureDetector>
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