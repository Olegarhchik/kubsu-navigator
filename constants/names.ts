export const THEME = {
    LIGHT: "light",
    DARK: "dark"
} as const;

export type ThemeType = typeof THEME[keyof typeof THEME];

export const DEVICE = {
    PHONE: "phone",
    TABLET: "tablet"
} as const;

export type DeviceType = typeof DEVICE[keyof typeof DEVICE];

export const AUTH = {
    GUEST: "guest",
    USER: "user"
} as const;

export type AuthType = typeof AUTH[keyof typeof AUTH] | null;