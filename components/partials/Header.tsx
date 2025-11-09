import React, {JSX} from "react";
import Image from 'next/image'
import Icon from "@/components/elements/Icon";

interface HeaderProps {
    currentStep?: number;
    maxSteps?: number;
    onBack?: () => void;
}

export default function Header({
                                   currentStep,
                                   maxSteps,
                                   onBack
                               }: HeaderProps): JSX.Element {
    return (
        <div>
            <div className={'flex justify-center pt-[24px]'}>
                <button onClick={onBack}>
                    <Icon
                        name={'arrow'}
                        color={'#303030'}
                        size={24}
                    />
                </button>
                <div className={'w-full flex justify-center'}>
                    <Image src="/images/logo.svg" alt="Logo" width={62} height={36}/>
                </div>
                <div className={'whitespace-nowrap'}>
                    <span className={'font-bold'}>{currentStep}</span>/{maxSteps}
                </div>
            </div>
        </div>
    )

}