"use client";

import {JSX, useEffect, useState} from "react";
import clsx from "clsx";

interface IconProps {
    name: string;
    color?: string;
    size?: number;
    className?: string;
}

const Icon = ({
                  name,
                  color = "currentColor",
                  size = 24,
                  className = "",
              }: IconProps): JSX.Element | null => {
    const [svgContent, setSvgContent] = useState<string>("");

    useEffect(() => {
        fetch(`/icons/${name}.svg`)
            .then((res) => res.text())
            .then((text) => setSvgContent(text))
            .catch(() => setSvgContent(""));
    }, [name]);

    if (!svgContent) return null;

    return (
        <span
            className={clsx(
                'flex justify-center items-center',
                className
            )}
            style={{
                width: "auto",
                height: size,
                color: color,
                aspectRatio: '1'
            }}
            dangerouslySetInnerHTML={{__html: svgContent}}
        />
    );
}

export default Icon;