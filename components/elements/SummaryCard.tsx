"use client";

import {JSX} from "react";
import Icon from "@/components/elements/Icon";
import Progress from "@/components/elements/Progress";

interface SummaryCardProps {
    icon: string;
    label: string;
    progress: number;
    title: string;
    color: string;
}

const SummaryCard = ({icon, label, progress, title, color}: SummaryCardProps): JSX.Element => {
    return (
        <div className={'flex gap-[8px] items-start rounded-[8px] border border-purple-light px-[11px] py-[15px]'}>
            <div className={'rounded-[4px] border bg-[#F4F4FF] border-purple-light p-[4px] flex items-center'}>
                <Icon name={icon} color={'#5349DB'} size={28}/>
            </div>
            <div className={'flex w-full gap-[12px]'}>
                <div className={'w-1/2 flex flex-col justify-between items-start gap-[4px]'}>
                    <p className={'text-[10px] uppercase font-bold text-white px-[4px] py-[2px] rounded-[4px] leading-[12px]'}
                       style={{backgroundColor: color}}
                    >
                        {label}
                    </p>
                    <p className={'font-bold leading-[20px]'}>{title}</p>
                </div>
                <div className={'w-1/2 flex items-center'}>
                    <Progress step={progress} maxStep={100} className={'h-[6px] !px-[12px]'} color={color} />
                    <span className={'font-bold text-[14px]'}>{progress}%</span>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;
