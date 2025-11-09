"use client";
import {useState, useEffect, JSX} from "react";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import Checkout from "@/components/Checkout";

export default function Home(): JSX.Element | null {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const maxAllowedScreenWidth = 768;
    const [step, setStep] = useState<"landing" | "quiz" | "checkout">("landing");

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

    if (step === "landing") return <Landing onStart={() => setStep("quiz")}/>;
    if (step === "quiz") return <Quiz onNext={() => setStep("checkout")}/>;

    return <Checkout/>;
}