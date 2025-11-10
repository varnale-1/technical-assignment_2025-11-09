export interface SummaryItem {
    index: string | number;
    icon: string;
    label: string;
    progress: number;
    title: string;
    color: string;
}

export const summaryItems: SummaryItem[] = [
    {
        index: "desire-to-change",
        icon: "desire-to-change",
        label: "very strong",
        progress: 92,
        title: "Desire to change",
        color: "#289F67",
    },
    {
        index: "cravings",
        icon: "cravings",
        label: "too high",
        progress: 84,
        title: "Cravings",
        color: "#E35244",
    },
    {
        index: "mental-blocks",
        icon: "mental-blocks",
        label: "too high",
        progress: 74,
        title: "Mental blocks",
        color: "#E35244",
    },
    {
        index: "stress",
        icon: "stress",
        label: "moderately high",
        progress: 52,
        title: "Stress",
        color: "#FFC633",
    },
];
