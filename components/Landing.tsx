import {JSX} from "react";

export default function Landing({ onStart }: { onStart: () => void }): JSX.Element {
    return (
        <div className={'container'}>
            <button onClick={onStart}>Start Quiz</button>
        </div>
    );
}