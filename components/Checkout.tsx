import {JSX} from "react";
import Icon from "@/components/elements/Icon";
import Image from "next/image";
import {resultItems} from "@/data/results";
import {summaryItems} from "@/data/summary";
import SummaryCard from "@/components/elements/SummaryCard";

interface CheckoutProps {
    gender?: number | null;
}

const Checkout = ({gender}: CheckoutProps): JSX.Element => {
    return (
        <div className={'container mt-[40px] flex gap-[40px] flex-col'}>
            <div className={'flex gap-[24px] flex-col'}>
                <h1 className={'!text-left !font-bold'}>Your personalized Alcohol-Free Plan is ready!</h1>
                <div className={'flex'}>
                    {
                        resultItems?.map(result => (
                            <div key={result.index}
                                 className={'flex gap-[8px] items-start w-1/2 border-purple-light border-r ' +
                                     'last:border-r-0 pl-[20px] first:pl-0'}
                            >
                                <div
                                    className={'rounded-[4px] border bg-[#F4F4FF] border-purple-light p-[4px] flex items-center'}>
                                    <Icon name={result.icon} color={'#5349DB'} size={24}/>
                                </div>
                                <div>
                                    <p className={'text-[10px]'}>{result.title}</p>
                                    <p className={'font-bold text-sm'}>{result.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    gender && (
                        <div className={'relative flex w-full h-[240px] rounded-[8px] overflow-hidden'}>
                            <div className={'w-1/2 relative'}>
                                <Image
                                    src={gender === 1 ? '/images/results/male/before.png' : '/images/results/female/before.png'}
                                    alt={'Before image'}
                                    fill
                                    objectFit={'cover'}
                                />
                                <div className={'result-tag opacity-60 left-[10px]'}>Before</div>
                            </div>
                            <div className={'w-1/2 relative'}>
                                <Image
                                    src={gender === 1 ? '/images/results/male/after.png' : '/images/results/female/after.png'}
                                    alt={'After image'}
                                    fill
                                    objectFit={'cover'}
                                />
                                <div className={'result-tag right-[10px]'}>After</div>
                            </div>
                            <Icon name={'chevron-right-triple'} color={'#FFFFFF'}
                                  size={55}
                                  className={'absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'}
                            />
                        </div>
                    )
                }
            </div>

            <div className="flex gap-[24px] flex-col">
                <h2 className="!text-left !font-bold">
                    Your personalized Alcohol-Free Plan is ready!
                </h2>
                <div className="flex flex-col gap-[8px]">
                    {summaryItems.map((summary) => (
                        <SummaryCard
                            key={summary.index}
                            icon={summary.icon}
                            label={summary.label}
                            progress={summary.progress}
                            title={summary.title}
                            color={summary.color}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Checkout;