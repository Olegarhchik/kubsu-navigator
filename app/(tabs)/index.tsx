import { Storage } from "@/helpers";
import { useAuth } from "@/hooks";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IndexScreen() {
  const { setAuth } = useAuth()

  function exit() {
    Storage.removeItem("auth")
    setAuth(null)
  }

  return (
    <View style={[staticStyles.container]}>
      <Text>Hello, {Storage.getItem("auth")}</Text>

      <TouchableOpacity onPress={exit}>
        <Text>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}

const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})