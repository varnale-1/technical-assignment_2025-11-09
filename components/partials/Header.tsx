import React, {JSX, useEffect, useState} from "react";
import Image from 'next/image'
import Icon from "@/components/elements/Icon";
import clsx from "clsx";

interface HeaderProps {
    currentStep: number;
    maxSteps: number;
    onBack?: () => void;
}

const Header = ({
                    currentStep,
                    maxSteps,
                    onBack
                }: HeaderProps): JSX.Element => {
    const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
    const showTimer = currentStep > maxSteps;

    const showBackButton: boolean = currentStep > 0 && currentStep <= maxSteps;
    const showStepCounter: boolean = currentStep > 0 && currentStep <= maxSteps;

    useEffect(() => {
        if (!showTimer) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [showTimer]);

    const format = (seconds: number) =>
        `${Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

    return (
        <div className={clsx(
            'w-full py-[20px]',
            currentStep > maxSteps && 'bg-yellow'
        )}>
            <div className={clsx(
                'w-full flex container gap-2',
                currentStep > maxSteps ? 'justify-between flex-wrap' : 'justify-center'
            )}>
                {
                    showBackButton && (
                        <button onClick={onBack} className={'w-[48px] min-w-[48px]'}>
                            <Icon name="arrow" color="#303030" size={24}/>
                        </button>
                    )
                }
                <div className={clsx(
                    'flex justify-center',
                    currentStep > maxSteps ? 'w-auto' : 'w-full'
                )}>
                    <Image src="/images/logo.svg" alt="Logo" width={62} height={36}/>
                </div>
                {
                    showStepCounter &&
                    (
                        <div className={'whitespace-nowrap font-poppins w-[48px] min-w-[48px]'}>
                            <span className={'font-bold'}>{currentStep}</span>/{maxSteps}
                        </div>
                    )
                }
                {
                    showTimer && (
                        <div className={'flex font-bold space-x-[10px] items-center'}>
                            <span className={'text-md leading-[22px]'}>Reserved price for:</span>
                            <span className={'text-purple text-lg w-[61px]'}>{format(timeLeft)}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;