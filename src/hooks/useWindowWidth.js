import { useState } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return width;
}

export default useWindowWidth;