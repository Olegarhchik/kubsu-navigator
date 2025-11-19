import colors from '@/constants/colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { PlatformPressable } from '@react-navigation/elements'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import SearchBar from './SearchBar'

export default function TabBar({state, descriptors, navigation}: BottomTabBarProps ) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const quotient = useSharedValue<number>(1);
  const [showMore, setShowMore] = useState<boolean>(false);

  const dynamicStyles = StyleSheet.create({
    label: {
      color: colors.text,
      textAlign: 'center',
      fontSize: 8,
    },
  });

  const animatedStyles = {
    button: useAnimatedStyle(() => ({
      transform: [{ scale: withSpring(quotient.value, { duration: 300 }) }]
    }))
  }

  const searchBar: React.JSX.Element[] = []

  const buttons = state.routes.map((route, index) => {
    if (route.name.includes("hidden")) return (
      <Pressable
        onPress={() => {
          quotient.value = quotient.value === 0 ? 1 : 0;
          setTimeout(() => {
            quotient.value = quotient.value === 0 ? 1 : 0;
            setShowMore(prevShowMore => !prevShowMore);
          }, 300)
        }}
        key={route.key}
      >
        <Animated.View style={animatedStyles.button}>
          <View style={styles.icon} />
          <Text style={{
              color: colors.text,
              textAlign: 'center',
              fontSize: 8,
            }}
          >{showMore ? "Назад" : "Дополнительно"}</Text>
        </Animated.View>
      </Pressable>
    );

    
    if (["route", "timetable"].includes(route.name) && showMore ||
    ["tracked", "settings"].includes(route.name) && !showMore)
    return null;
    
    const { options } = descriptors[route.key];
    const label = options.tabBarLabel !== undefined ? 
    options.tabBarLabel : options.title !== undefined ? 
    options.title : route.name;
    const isFocused = state.index === index;
    
    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });
      
      if (!isFocused && !event.defaultPrevented)
        navigation.navigate(route.name, route.params);
    }

    if (route.name == "search") {
      searchBar.push(<SearchBar
        navigation={{
          href: buildHref(route.name, route.params),
          accessibilityState: isFocused ? { selected: true } : {},
          accessibilityLabel: options.tabBarAccessibilityLabel,
          onPress: onPress,
          testID: options.tabBarButtonTestID,
        }}
        placeholder="Что ищете?"
      />)
      return null
    }
    
    return (
      <PlatformPressable
        href={buildHref(route.name, route.params)}
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        testID={options.tabBarButtonTestID}
        key={route.key}
      >
        <Animated.View style={animatedStyles.button}>
          <View style={styles.icon} />
          {typeof label === "string" &&
          <Text style={dynamicStyles.label}
          >{label}</Text>}
        </Animated.View>
      </PlatformPressable>
    );
  })
  
  return (
    <View style={styles.container}>
      {searchBar[0]}
      <View style={styles.content}>
        {buttons}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    width: 251,
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.tabBarBackground,
    borderColor: "#000",
    borderWidth: 0.5,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  icon: {
    height: 47,
    width: 65,
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 2,
  },
})