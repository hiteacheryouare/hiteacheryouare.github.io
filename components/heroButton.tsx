'use client';
import Link from 'next/link'
import { useState } from 'react';
interface ButtonProps {
    href: string;
    className: string;
    children: React.ReactNode;
}

export default function Button({ href, className, children }: ButtonProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href} className={`${className} ${hovered
            ? 'bg-blue-900 text-white'
            : 'bg-theme-primary text-gray-200'
            } font-bold py-2 px-4 rounded transition-colors duration-300`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {children}
        </Link>
    );
}