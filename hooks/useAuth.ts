import { AuthType } from "@/constants/names"
import { Storage } from "@/helpers"
import { create } from "zustand"

type State = {
    auth: AuthType,
}

type Action = {
    setAuth: (auth: AuthType) => void
}

export const useAuth = create<State & Action>(set => ({
    auth: Storage.getItem("auth") as AuthType,
    setAuth: auth => set(() => ({ auth }))
}))