import { colors, typography } from '@/constants'
import { useDevice, useTheme } from '@/hooks'
import { ReturnKeyTypeOptions, StyleSheet, TextInput, View } from 'react-native'

type InputType = {
    props: {
        placeholder: string,
        returnKeyType: ReturnKeyTypeOptions,
        autoFocus?: boolean,
        secureTextEntry?: boolean,
        blurOnSubmit?: boolean,
        ref?: React.Ref<TextInput>
        onSubmitEditing?: () => void
        onChangeText?: (text: string) => void
    },
    icon: (color: string) => React.ReactElement,
}

export function Input({ props, icon }: InputType) {
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
        flex: 1,
        fontFamily: "Roboto"
    }
})