import colors from '@/constants/colors'
import typography from '@/constants/typography'
import { useDevice, useTheme } from '@/hooks'
import { ReturnKeyTypeOptions, StyleSheet, TextInput, View } from 'react-native'

type InputType = {
    props: {
        placeholder: string,
        returnKeyType: ReturnKeyTypeOptions,
        autoFocus?: boolean,
        secureTextEntry?: boolean,
        ref?: React.Ref<TextInput>
    },
    icon: (color: string) => React.ReactElement,
    handler?: () => void
}

export default function Input({ props, icon, handler }: InputType) {
    const { theme } = useTheme()
    const device = useDevice()

    const dynamicStyles = StyleSheet.create({
        container: {
            backgroundColor: colors[theme].primaryBg
        },
        inputContainer: {
            backgroundColor: colors[theme].secondaryBg
        },
        input: {
            ...typography[device].base,
            color: colors[theme].main,
        }
    })

    return (
        <View style={[dynamicStyles.container, staticStyles.container]}>
            <View style={[dynamicStyles.inputContainer, staticStyles.inputContainer]}>
                {icon(colors[theme].main)}
                <TextInput
                    style={[dynamicStyles.input, staticStyles.input]}
                    placeholderTextColor={colors[theme].textInput.placeholder}
                    autoComplete="off"
                    onSubmitEditing={handler && (() => handler())}
                    {...props}
                />
            </View>
        </View>
    )
}

const staticStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderRadius: 50
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 50,
        gap: 8
    },
    input: {
        paddingVertical: 10,
        flex: 1
    }
})