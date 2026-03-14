import { DEVICE } from "@/constants/names";
import { useWindowDimensions } from "react-native";

export function useDevice() {
    const { width } = useWindowDimensions();

    if (width <= 480)
        return DEVICE.PHONE;
    else if (481 < width && width <= 768)
        return DEVICE.TABLET;
    else if (769 < width && width <= 1024)
        return DEVICE.LAPTOP;
    else
        return DEVICE.DESKTOP;
}