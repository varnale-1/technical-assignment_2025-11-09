import clsx from "clsx";

interface ProgressProps {
    step: number;
    maxStep: number;
    color?: string;
    className?: string;
}

const Progress = ({step, maxStep, color, className}: ProgressProps) => {
    const progress = Math.min(step / maxStep, 1) * 100;

    return (
        <div className={clsx('container h-[3px]', className)}>
            <div className={'w-full h-full bg-[#E4E4E4] rounded-full overflow-hidden'}>
                <div
                    className={'h-full bg-purple rounded-full transition-all duration-300'}
                    style={{ width: `${progress}%`, backgroundColor: color }}
                />
            </div>
        </div>
    );
};

export default Progress;
