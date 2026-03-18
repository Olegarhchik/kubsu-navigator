import { DEVICE } from "./names"

export default {
    [DEVICE.PHONE]: {
        base: 16,
        header: 24,
        subHeader: 20,
        cardHeader: 18,
        button: {
            fontSize: 14,
            fontWeight: "500" as const
        },
        tiny: 12
    },
    [DEVICE.TABLET]: {
        base: 16,
        header: 24,
        subHeader: 20,
        cardHeader: 18,
        button: {
            fontSize: 14,
            fontWeight: "500" as const
        },
        tiny: 12
    },
    [DEVICE.LAPTOP]: {
        base: 16,
        header: 24,
        subHeader: 20,
        cardHeader: 18,
        button: {
            fontSize: 14,
            fontWeight: "500" as const
        },
        tiny: 12
    },
    [DEVICE.DESKTOP]: {
        base: 16,
        header: 24,
        subHeader: 20,
        cardHeader: 18,
        button: {
            fontSize: 14,
            fontWeight: "500" as const
        },
        tiny: 12
    },
}