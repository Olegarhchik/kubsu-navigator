import { THEME } from "./names"

export default {
    [THEME.LIGHT]: {
        primaryBg: "#F8F8F8",
        secondaryBg: "#E6E6E6",
        color: "#00325B",
        green: "#35DA35",
        red: "#FF4343",
        highlight: "rgba(0, 50, 91, 0.8)",
        glow: "rgba(0, 50, 91, 0.05)",
        button: {
            bg: "#E6E6E6",
            activeColor: "#00325B",
            inactiveColor: "rgba(0, 50, 91, 0.25)",
        },
        textInput: {
            bg: "#E6E6E6",
            placeholderColor: "rgba(0, 50, 91, 0.5)",
            textColor: "#00325B",
        }
    },
    [THEME.DARK]: {
        primaryBg: "#21212F",
        secondaryBg: "#2F2F42",
        color: "#FFFFDA",
        green: "#43FF43",
        red: "#FF3A3A",
        highlight: "rgba(255, 255, 218, 0.8)",
        glow: "rgba(255, 255, 218, 0.05)",
        button: {
            bg: "#2F2F42",
            activeColor: "#FFFFDA",
            inactiveColor: "rgba(255, 255, 218, 0.25)",
        },
        textInput: {
            bg: "#2F2F42",
            placeholderColor: "rgba(255, 255, 218, 0.5)",
            color: "#FFFFDA",
        }
    }
}