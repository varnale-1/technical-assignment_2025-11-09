import Button from "@/components/elements/Button";
import {JSX} from "react";
import {StepItem} from "@/data/steps";

interface QuizProps {
    stepInfo: StepItem|undefined;
    onNext: () => void;
}

export default function Quiz({ stepInfo, onNext }: QuizProps): JSX.Element {
    return (
        <div className={'container'}>
            <h1>{stepInfo?.title}</h1>
            <Button
                text="Continue"
                color="#333"
                icon={{name: "arrow", size: 20, color: "#333"}}
                onClick={onNext}
            />
        </div>
    );
}