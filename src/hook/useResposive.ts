import useViewportState from "beautiful-react-hooks/useViewportState";
import { useEffect, useState } from "react";

export default function useResponsive() {
    const [status, setStatus] = useState(null as unknown);
    const { width } = useViewportState();

    useEffect(() => {
        if (width <= 576) {
            setStatus("small")
        } else if (width <= 768) {
            setStatus("medium")
        } else {
            setStatus("large")
        }
    }, [width])

    return { status, isSmall: status == "small", isMedium: status == "medium", isLarge: status == "large" }
}