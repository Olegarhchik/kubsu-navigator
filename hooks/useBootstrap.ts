import { AuthType, THEME, ThemeType } from "@/constants/names";
import { delay } from "@/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useAuth } from "./useAuth";
import { useTheme } from "./useTheme";

export function useBootstrap() {
    const setAuth = useAuth(state => state.setAuth);
    const setTheme = useTheme(state => state.setTheme);
    const colorScheme = useColorScheme();

    useEffect(() => {
        (async () => {
            try {
                await delay(500);

                const asAuth = await AsyncStorage.getItem("auth");
                setAuth(asAuth as AuthType)

                const asTheme = await AsyncStorage.getItem("theme");
                setTheme(asTheme === null ?
                    (colorScheme || THEME.LIGHT) :
                    asTheme as ThemeType);
            } catch (err) {
                console.error(err);
            }
        })()
    }, [setAuth, setTheme, colorScheme])
}