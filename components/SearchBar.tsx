import colors from '@/constants/colors'
import React from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'

type Props = {
  onPress: () => void,
  placeholder: string,
}

export default function SearchBar({ onPress, placeholder }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onPress={onPress}
        />
        <View style={styles.icon} />
      </View>
    </Pressable>
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