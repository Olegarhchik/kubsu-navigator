import { THEME, ThemeType } from '@/constants/names'
import { create } from 'zustand'

type State = {
    theme: ThemeType,
}

type Action = {
    setTheme: (theme: ThemeType) => void,
}

export const useTheme = create<State & Action>(set => (
    {
        theme: THEME.LIGHT,
        setTheme: theme => set(() => ({ theme })),
    }
))