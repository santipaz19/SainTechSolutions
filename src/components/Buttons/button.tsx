'use client'

import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    text: string;
    bgColor?: string; // color de fondo opcional
    textColor?: string; // color de texto opcional
    onClick?: () => void;
    className?: string; // para clases adicionales
}

export default function Button({
    text,
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    onClick,
    className = '',
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={classNames(
                'px-5 py-2 rounded-lg transition-all hover:scale-104 duration-200 cursor-pointer',
                bgColor,
                textColor,
                className
            )}
        >
            {text}
        </button>
    );
}
