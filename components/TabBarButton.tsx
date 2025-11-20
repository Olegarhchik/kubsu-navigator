import { Href, Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
  onPress?: () => void,
  label: string,
  href?: Href,
}

export default function TabBarButton({ label, href, onPress }: Props) {
  if (onPress === undefined && href != undefined)
    return (
      <Link href={href} asChild>
        <Pressable>
          <View style={styles.icon}></View>
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      </Link>
    )
  
  return (
    <Pressable onPress={onPress}>
      <View style={styles.icon}></View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 47,
    width: 65,
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 2,
  },

  label: {
    fontSize: 7,
    textAlign: "center",
  }
})