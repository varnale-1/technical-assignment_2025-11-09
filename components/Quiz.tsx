import Button from "@/components/elements/Button";

export default function Quiz({ onNext }: { onNext: () => void }) {
    return (
        <div>
            <Button
                text="Continue"
                color="#333"
                icon={{ name: "arrow", size: 20, color: "#333" }}
                onClick={onNext}
            />
        </div>
    );
}