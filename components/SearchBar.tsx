import colors from '@/constants/colors'
import { PlatformPressable } from '@react-navigation/elements'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

type Props = {
  navigation: {
    href: string | undefined,
    accessibilityState: { selected: boolean } | {},
    accessibilityLabel: string | undefined,
    onPress: () => void,
    testID: string | undefined,
  },
  placeholder: string,
}

export default function SearchBar({ navigation, placeholder }: Props) {
  return (
    <PlatformPressable
      style={styles.container}
      {...navigation}
    >
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onPress={navigation.onPress}
        />
        <View style={styles.icon} />
      </View>
    </PlatformPressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: 300,
    backgroundColor: colors.searchBarBackground,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 0.5,
    elevation: 5,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
  },

  content: {
    flexDirection: "row",
    gap: 7,
  },

  input: {
    height: "100%",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 10,
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  icon: {
    height: "100%",
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 10,
  }
})