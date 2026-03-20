import { colors } from '@/constants'
import { useTheme } from '@/hooks'
import { Href, useRouter } from 'expo-router'
import { PropsWithChildren } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

type ButtonType = {
    type: "primary" | "secondary" | "underline",
    href?: Href,
    onPress?: () => void
}

export function Button({ type, href, onPress, children }: PropsWithChildren<ButtonType>) {
    const { theme } = useTheme()
    const router = useRouter()

    const dynamicStyles = StyleSheet.create({
        primary: {
            ...staticStyles.button,
            backgroundColor: colors[theme].button.bg
        },
        secondary: {
            ...staticStyles.button,
            borderWidth: 2,
            borderColor: colors[theme].button.bg
        },
        underline: {}
    })

    return (
        <TouchableOpacity
            onPress={onPress ?? (() => router.push(href!))}
            style={dynamicStyles[type]}
        >
            {children}
        </TouchableOpacity>
    )
}

const staticStyles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: "center"
    }
})