'use client'
import { getRandom } from '@/utils/random'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DECORATIONS = ['❤️', '✨']

export function StarsAndHearts() {
    const [elements, setElements] = useState<
        { text: string; left: string; delay: number; duration: number }[]
    >([])

    useEffect(() => {
        const screenWidth = window.innerWidth
        const newElements: typeof elements = []

        for (let i = 0; i < 70; i++) {
            const left = `${getRandom(0, screenWidth)}px`
            const delay = getRandom(0, 5) // segundos
            const duration = getRandom(4, 10) // segundos

            newElements.push({
                text: DECORATIONS[getRandom(0, DECORATIONS.length - 1)],
                left,
                delay,
                duration,
            })
        }

        setElements(newElements)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            {elements.map((el, idx) => (
                <motion.div
                    key={idx}
                    initial={{ y: '100vh', opacity: 0 }}
                    animate={{ y: '-10vh', opacity: 1 }}
                    transition={{
                        delay: el.delay,
                        duration: el.duration,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                    }}
                    className="absolute text-2xl"
                    style={{
                        left: el.left,
                        top: 0,
                    }}
                >
                    {el.text}
                </motion.div>
            ))}
        </div>
    )
}
