interface ProgressProps {
    step: number;
    maxStep: number;
}

const Progress = ({step, maxStep}: ProgressProps) => {
    const progress = Math.min(step / maxStep, 1) * 100;

    return (
        <div className={'container'}>
            <div className={'w-full h-[3px] bg-[#E4E4E4] rounded-full overflow-hidden mt-[13px]'}>
                <div
                    className={'h-full bg-purple rounded-full transition-all duration-300'}
                    style={{width: `${progress}%`}}
                />
            </div>
        </div>
    );
};

export default Progress;
