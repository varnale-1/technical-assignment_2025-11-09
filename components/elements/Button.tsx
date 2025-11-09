"use client";

import React, {JSX} from "react";
import Icon from "./Icon";

interface IconProps {
    name: string;
    color?: string;
    size?: number;
}

interface ButtonProps {
    text: string;
    color?: string;
    value?: string | number;
    icon?: IconProps;
    onClick?: () => void;
}

export default function Button({ text, color = "#000", value, icon, onClick }: ButtonProps): JSX.Element {
    return (
        <button
            style={{ color }}
            value={value}
            onClick={onClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-current"
        >
            {icon && (
                <Icon
                    name={icon.name}
                    color={icon.color ?? color}
                    size={icon.size ?? 20}
                />
            )}

            {text}
        </button>
    );
}
