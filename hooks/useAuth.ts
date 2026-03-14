import { AuthType } from "@/constants/names"
import { create } from "zustand"

type State = {
    auth: AuthType,
}

type Action = {
    setAuth: (auth: AuthType) => void
}

export const useAuth = create<State & Action>(set => (
    {
        auth: undefined,
        setAuth: auth => set(() => ({ auth }))
    }
))