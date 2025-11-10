import {JSX} from "react";
import Image from 'next/image'

interface LandingProps {
    onStart: (gender: number) => void;
}

interface OptionsProps {
    value: number;
    title: string;
    img: string;
}

const options: OptionsProps[] = [
    {value: 1, title: "Male", img: "/images/male.png"},
    {value: 2, title: "Female", img: "/images/female.png"},
];

const Landing = ({onStart}: LandingProps): JSX.Element => {
    return (
        <div className={'container h-full flex flex-col'}>
            <div className={'mt-[12px] flex flex-col flex-1'}>
                <h1>What is your gender?</h1>
                <p className={'text-center mt-[12px] text-[14px] leading-[18px]'}>We will use this to personalize your plan</p>
                <div className="flex justify-between items-center flex-1">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => onStart(option.value)}
                            className={'border-purple-dark rounded-[10px] border-[2px] h-[200px] w-[162px] ' +
                                'overflow-hidden flex flex-col'}
                        >
                            <div className={'h-full w-full relative'}>
                                <Image
                                    src={option.img}
                                    alt={option.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <span className={'flex bg-purple-dark text-md text-white w-full py-[19px] justify-center ' +
                                'items-center font-semibold leading-[22px]'}>
                                {option.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Landing;