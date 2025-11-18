import colors from '@/constants/colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { PlatformPressable } from '@react-navigation/elements'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TabBar({state, descriptors, navigation}: BottomTabBarProps ) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          if (route.name === "home") return null;

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

          return (
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              testID={options.tabBarButtonTestID}
              key={route.key}
            >
              <View style={styles.icon} />
              {typeof label === "string" &&
                <Text style={{
                    color: colors.text,
                    textAlign: 'center',
                    fontSize: 8,
                  }}
                >{label}</Text>
              }
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    bottom: "5%",
  }, 
  content: {
    width: "62.5%",
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.tabBarBackground,
    borderColor: "#000",
    borderWidth: 0.5,
    shadowColor: 'black',
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 0,
  },
  icon: {
    height: 47,
    width: 65,
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 2,
  }
})