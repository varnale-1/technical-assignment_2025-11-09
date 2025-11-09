"use client";
import {useState, useEffect, JSX} from "react";

export default function Home(): JSX.Element | null {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const maxAllowedScreenWidth = 768;

    useEffect((): (() => void) => {
        function handleResize(): void {
            setIsMobile(window.innerWidth <= maxAllowedScreenWidth);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile === null) return null;

    if (!isMobile) {
        return (
            <div className="flex items-center justify-center min-h-screen text-center p-6 text-lg font-medium">
                This page supports mobile devices only.
            </div>
        );
    }

    return (
        <div className="container">
            Initial Page
        </div>
    );
}
