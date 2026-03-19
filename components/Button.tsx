import colors from '@/constants/colors'
import typography from '@/constants/typography'
import { useDevice, useTheme } from '@/hooks'
import { Href, useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type ButtonType = {
    href: Href,
    text: string
}

export default function Button({ href, text }: ButtonType) {
    const { theme } = useTheme()
    const device = useDevice()
    const router = useRouter()

    const dynamicStyles = StyleSheet.create({
        button: {
            backgroundColor: colors[theme].button.bg
        },
        text: {
            ...typography[device].button,
            color: colors[theme].button.active
        }
    })

    return (
        <TouchableOpacity
            onPress={() => {
                router.push(href)
            }}
            style={[dynamicStyles.button, staticStyles.button]}
        >
            <Text style={[dynamicStyles.text, staticStyles.text]}>{text}</Text>
        </TouchableOpacity>
    )
}

const staticStyles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    text: {
        fontFamily: "Roboto"
    }
})