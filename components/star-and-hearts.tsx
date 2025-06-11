'use client'
import { getRandom } from '@/utils/random';
import { useEffect, useState } from 'react';

const DECORATIONS = ['❤️', '✨'];

export function StarsAndHearts() {
    const [elements, setElements] = useState<
        { text: string; top: string; left: string; delay: string }[]
    >([]);

    useEffect(() => {
        const newElements: typeof elements = [];

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        for (let i = 0; i < 70; i++) {
            const top = `${getRandom(5, screenHeight - 5)}px`;
            const left = `${getRandom(5, screenWidth - 5)}px`;
            const delay = `${getRandom(0, 1000)}ms`;

            newElements.push({
                text: DECORATIONS[getRandom(0, DECORATIONS.length - 1)],
                top,
                left,
                delay,
            });
        }

        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {elements.map((el, idx) => (
                <div
                    key={idx}
                    className={`absolute text-2xl animate-pulse`}
                    style={{
                        top: el.top,
                        left: el.left,
                        animationDelay: el.delay,
                    }}
                >
                    {el.text}
                </div>
            ))}
        </div>
    );
};
