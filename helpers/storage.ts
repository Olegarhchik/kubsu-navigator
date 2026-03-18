import { createMMKV } from "react-native-mmkv"

interface IStorage {
    setItem: (key: string, value: string) => void
    getItem: (key: string) => string | null
    removeItem: (key: string) => void
}

const mmkv = createMMKV()

export const Storage: IStorage = {
    setItem: (key, value) => mmkv.set(key, value),
    getItem: (key) => mmkv.getString(key) ?? null,
    removeItem: (key) => mmkv.remove(key)
}