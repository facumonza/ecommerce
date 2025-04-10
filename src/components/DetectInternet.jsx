import React, { useState, useEffect } from "react";
function DetectInternet() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true);
        });
        window.addEventListener("offline", () => {
            setIsOnline(false);
        });
    }, []);
    return (
        <>
        {isOnline? "" : "🚫 SIN INTERNET! "}
        </>
    )
}

export default DetectInternet;