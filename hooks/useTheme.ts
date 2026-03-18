import { THEME, ThemeType } from '@/constants/names'
import { useColorScheme } from 'react-native'
import { create } from 'zustand'

type State = {
    theme: ThemeType | undefined,
}

type Action = {
    setTheme: (theme: ThemeType) => void,
}

const useThemeStore = create<State & Action>(set => ({
    theme: undefined,
    setTheme: (theme: ThemeType) => set(() => ({ theme }))
}))

export function useTheme(): { theme: Exclude<State['theme'], undefined> } & Action {
    const theme = useThemeStore(state => state.theme)
    const setTheme = useThemeStore(state => state.setTheme)
    const colorScheme = useColorScheme()

    if (theme === undefined)
        setTheme(colorScheme ?? THEME.DARK)

    return { theme: theme!, setTheme }
}