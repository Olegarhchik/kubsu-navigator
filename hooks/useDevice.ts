import { DEVICE } from "@/constants/names";
import { useWindowDimensions } from "react-native";

export function useDevice() {
    const { width } = useWindowDimensions();

    if (width <= 480)
        return DEVICE.PHONE;
    else
        return DEVICE.TABLET;
}