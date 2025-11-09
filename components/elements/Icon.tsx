"use client";

import {JSX, useEffect, useState} from "react";

interface IconProps {
    name: string;
    color?: string;
    size?: number;
    className?: string;
}

export default function Icon({
                                 name,
                                 color = "currentColor",
                                 size = 24,
                                 className = "",
                             }: IconProps): JSX.Element | null {
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
            className={className}
            style={{
                display: "inline-block",
                width: size,
                height: size,
                color: color,
            }}
            dangerouslySetInnerHTML={{__html: svgContent}}
        />
    );
}