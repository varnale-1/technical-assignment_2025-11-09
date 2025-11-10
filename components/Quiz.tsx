"use client";

import Button from "@/components/elements/Button";
import {JSX} from "react";
import {StepItem} from "@/data/steps";

interface QuizProps {
    stepInfo: StepItem | undefined;
    selectedValue: number | null;
    onNext: (value: number) => void;
}

const Quiz = ({stepInfo, selectedValue, onNext}: QuizProps): JSX.Element => {
    return (
        <div className={'container mt-[12px] h-full flex flex-col flex-1'}>
            <h1>{stepInfo?.title}</h1>
            <div className={'flex flex-col space-y-[8px] h-full justify-end flex-1'}>
                {
                    stepInfo?.options?.map(option => (
                        <Button
                            key={option.value}
                            text={option.text}
                            color={option.color}
                            selected={selectedValue === option.value}
                            icon={{name: option.icon, size: option.icon_size ?? 24, color: "inherit"}}
                            onClick={() => onNext(option.value)}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Quiz;