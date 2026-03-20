import { DEVICE } from "./names"

export const typography = {
    [DEVICE.PHONE]: {
        base: {
            fontSize: 16
        },
        header: {
            fontSize: 24,
            fontWeight: "700" as const
        },
        subHeader: 20,
        cardHeader: 18,
        button: {
            fontSize: 14,
            fontWeight: "500" as const
        },
        tiny: 12
    },
    [DEVICE.TABLET]: {
        base: {
            fontSize: 16
        },
        header: {
            fontSize: 24,
            fontWeight: "700" as const
        },
        subHeader: 20,
        cardHeader: 18,
        button: {
            fontSize: 14,
            fontWeight: "500" as const
        },
        tiny: 12
    }
}