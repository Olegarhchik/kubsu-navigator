import { ToastAndroid } from "react-native"

export const message = (text: string) => ToastAndroid.show(text, ToastAndroid.SHORT)