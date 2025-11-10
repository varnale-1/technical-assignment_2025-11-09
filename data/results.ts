export interface ResultItem {
    index: string | number;
    icon: string;
    title: string;
    text: string;
}

export const resultItems: ResultItem[] = [
    {
        index: "drinking-patterns",
        icon: "drinking-patterns",
        title: "Drinking patterns",
        text: "Imbalanced",
    },
    {
        index: "goal",
        icon: "goal",
        title: "Goal",
        text: "Regain control and live alcohol-free",
    },
];
