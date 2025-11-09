export interface StepOption {
    icon: string;
    text: string;
    value: number;
    color?: string;
}

export interface StepItem {
    index: number;
    title?: string;
    subtitle?: string;
    options?: StepOption[];
}

export const stepsInfo: StepItem[] = [
    {index: 0},
    {
        index: 1,
        title: "What is your main reason for wanting to quit drinking?",
        options: [
            {icon: "health", text: "Health", value: 10},
            {icon: "relationships", text: "Relationships", value: 20},
            {icon: "control", text: "Control", value: 30},
            {icon: "money", text: "Money", value: 40},
            {icon: "performance", text: "Performance", value: 50},
            {icon: "role-model", text: "Role model", value: 60},
        ]
    },
    {
        index: 2,
        title: "What do you think is the main reason you drink?",
        options: [
            {icon: "stress-anxiety", text: "Stress or anxiety", value: 10},
            {icon: "socializing", text: "Socializing", value: 20},
            {icon: "relaxation", text: "Relaxation", value: 30},
            {icon: "emotional-escape", text: "Emotional escape", value: 40},
            {icon: "habit", text: "Habit", value: 50},
            {icon: "confidence-boost", text: "Confidence boost", value: 60},
        ]
    },
    {
        index: 3,
        title: 'Do you ever drink to feel "normal" or fit in with others?',
        options: [
            {icon: 'check', text: 'Yes', value: 10, color: '#289F67'},
            {icon: 'question', text: 'I’m not sure', value: 20, color: '#FFC633'},
            {icon: 'forbid', text: 'No', value: 30, color: '#E35244'},
        ]
    },
    {
        index: 4,
        title: 'Do you sometimes feel like you\'re missing out if you don\'t participate in group activities or social events?',
        options: [
            {icon: 'check', text: 'Yes', value: 10, color: '#289F67'},
            {icon: 'question', text: 'I’m not sure', value: 20, color: '#FFC633'},
            {icon: 'forbid', text: 'No', value: 30, color: '#E35244'},
        ]
    },
    {
        index: 5,
        title: 'Do you often find yourself wanting to escape from your daily responsibilities or pressures?',
        options: [
            {icon: 'check', text: 'Yes', value: 10, color: '#289F67'},
            {icon: 'question', text: 'I’m not sure', value: 20, color: '#FFC633'},
            {icon: 'forbid', text: 'No', value: 30, color: '#E35244'},
        ]
    },
    {
        index: 6,
        title: 'Do you often seek ways to relax or unwind after a long, stressful day?',
        options: [
            {icon: 'check', text: 'Yes', value: 10, color: '#289F67'},
            {icon: 'question', text: 'I’m not sure', value: 20, color: '#FFC633'},
            {icon: 'forbid', text: 'No', value: 30, color: '#E35244'},
        ]
    },
    {index: 7},
];
