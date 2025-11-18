import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Please sign in.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})