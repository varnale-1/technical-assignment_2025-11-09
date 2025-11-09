export default function Landing({ onStart }: { onStart: () => void }) {
    return (
        <div>
            <button onClick={onStart}>Start Quiz</button>
        </div>
    );
}