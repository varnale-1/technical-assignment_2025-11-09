"use client";

import React, {JSX} from "react";
import Icon from "./Icon";
import clsx from "clsx";

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
    selected?: boolean;
}

const Button = ({
                          text,
                          color,
                          value,
                          icon,
                          onClick,
                          selected
}: ButtonProps): JSX.Element => {
    return (
        <button
            value={value}
            onClick={onClick}
            style={{
                backgroundColor: selected && color ? color : undefined,
                borderColor: color ?? undefined,
                color: selected ? "#fff" : undefined,
            }}
            className={clsx(
                'inline-flex items-center gap-[12px] px-[11px] py-[15px] rounded-[8px] border',
                selected ? 'text-white bg-purple' : 'bg-white border-[#F1F1F1]',
                color ? 'px-[20px]' : 'px-[12px]'
            )}
        >
            {icon && (
                <Icon
                    name={icon.name}
                    size={icon.size ?? 22}
                    color={selected ? 'white' : color ?? 'inherit'}
                />
            )}
            <span className={'font-semibold leading-[20px]'}>{text}</span>
        </button>
    );
}

export default Button;
