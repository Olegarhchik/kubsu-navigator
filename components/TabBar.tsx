import colors from '@/constants/colors'
import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

type Props = PropsWithChildren<{}>

export default function TabBar({ children }: Props) {
  return (
    <View style={styles.content}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
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
})