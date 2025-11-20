import colors from '@/constants/colors'
import { useRouter } from 'expo-router'
import React, { PropsWithChildren } from 'react'
import { Dimensions, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import Animated, { SlideInDown, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type Props = PropsWithChildren<{
  title?: string,
  subtitle?: string,
  importStyle?: {},
}>


export default function Modal({ title, subtitle, importStyle, children }: Props) {
  const router = useRouter();
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const height = Dimensions.get("screen").height - 116 - (StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0);

  const animatedStyles = {
    container: useAnimatedStyle(() => ({ 
      opacity: withSpring(opacity.value, { duration: 300 })
    })),
    content: useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(translateY.value, { duration: 300 })}]
    })),
  };

  return (
    <Animated.View style={[styles.container, animatedStyles.container]}>
      <Pressable onPress={() => {
        translateY.value = 1000;
        opacity.value = 0;
        setTimeout(() => router.back(), 300);
      }} style={ StyleSheet.absoluteFill } />

      <Animated.View
        style={[styles.content, animatedStyles.content, { height: height }]}
        entering={SlideInDown.duration(300)}
      >
        <View style={styles.draggableArea}>
          <View style={styles.draggableElement} />
        </View>

        <View style={{ flex: 1 }}>
          {title && (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>

              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
          )}

          <View style={[styles.mainContent, importStyle]}>
            {children}
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000040"
  },

  content: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.modalBackground,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 10,
  },

  draggableArea: {
    width: "100%",
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },

  draggableElement: {
    width: 50,
    height: 3,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 3,
  },

  header: {},

  title: {},

  subtitle: {},

  mainContent: {
    paddingTop: 15,
    paddingHorizontal: 25,
    paddingBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
})