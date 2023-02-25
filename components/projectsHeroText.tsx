'use client';
import { useState } from 'react';
interface TextProps {
    className: string;
    children: React.ReactNode;
}

export default function ProjectsHeroText({  className, children }: TextProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`${className} ${hovered
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-theme-primary via-blue-600 to-theme-tertiary'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-theme-primary via-pink-600 to-purple-700'
            } font-bold py-2 px-4 rounded transition-all duration-300`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {children}
        </div>
    );
}