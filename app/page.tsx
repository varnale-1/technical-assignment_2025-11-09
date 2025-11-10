"use client";
import {useState, useEffect, JSX} from "react";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import Checkout from "@/components/Checkout";
import Header from "@/components/partials/Header";
import {StepItem, stepsInfo} from "@/data/steps";

export default function Home(): JSX.Element | null {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [gender, setGender] = useState<number | null>(null);

    const maxAllowedScreenWidth = 768;
    const finalStep: number = stepsInfo.length - 2;
    const currentStep: StepItem | undefined = stepsInfo.find((s) => s.index === stepIndex);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    const handleAnswer = (value: number) => {
        setAnswers((prev) => ({ ...prev, [stepIndex]: value }));
        setStepIndex(stepIndex + 1);
    };

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

    const handleStart = (gender: number) => {
        setStepIndex(stepIndex + 1);
        setGender(gender);
    }

    return (
        <div className={'wrapper'}>
            <Header
                currentStep={stepIndex}
                maxSteps={finalStep}
                onBack={() => setStepIndex(Math.max(0, stepIndex - 1))}
            />

            {stepIndex === 0 && (
                <Landing onStart={handleStart}/>
            )}

            {stepIndex > 0 && stepIndex <= finalStep && (
                <Quiz
                    stepInfo={currentStep}
                    selectedValue={answers[stepIndex] ?? null}
                    onNext={handleAnswer}
                />
            )}

            {stepIndex > finalStep && (
                <Checkout gender={gender}/>
            )}
        </div>
    );
}