"use client";
import {useState, useEffect, JSX} from "react";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import Checkout from "@/components/Checkout";
import Header from "@/components/partials/Header";

export default function Home(): JSX.Element | null {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const maxAllowedScreenWidth = 768;
    const [step, setStep] = useState<number>(0);
    const finalStep = 6;

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
        <div className={'container'}>
            <Header currentStep={step} maxSteps={finalStep} onBack={() => setStep(step - 1)} />

            {step === 0 && (
                <Landing onStart={() => setStep(step + 1)} />
            )}

            {step < finalStep && (
                <Quiz onNext={() => setStep(step + 1)} />
            )}

            {step === finalStep && (
                <Checkout />
            )}
        </div>
    );
}