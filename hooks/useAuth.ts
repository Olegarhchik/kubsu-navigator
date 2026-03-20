import { AuthType } from "@/constants/names"
import { Storage } from "@/helpers"
import { create } from "zustand"

type State = {
    auth: AuthType,
}

type Action = {
    setAuth: (auth: AuthType) => void
}

const useAuthStore = create<State & Action>(set => ({
    auth: Storage.getItem("auth") as AuthType,
    setAuth: auth => set(() => ({ auth }))
}))

export function useAuth(): State & Action {
    const auth = useAuthStore(state => state.auth)
    const setAuth = useAuthStore(state => state.setAuth)

    return { auth, setAuth }
}