'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import BackgroundBubble from '@/public/assets/pagefour-2/Imagem41.png';
import LeftDeclaration from '@/public/assets/pagefour-2/Imagem42.png';
import RightDeclaration from '@/public/assets/pagefour-2/Imagem43.png';
import Fotos from '@/public/assets/pagefour-2/Imagem44.png';

export default function PageFour() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header
                className="h-[10vh] w-full"
                style={{
                    backgroundImage: `url(${BackgroundBubble.src})`,
                }}
            ></header>

            <main className="text-black flex-1 w-full  relative flex items-center justify-between px-4 md:px-12">
                <section className="flex flex-col items-start justify-center gap-2 w-1/4 text-sm md:text-base">
                    <h2 className="w-full text-center font-bold">Que o amor continue presente na nossa história</h2>
                    <Image src={LeftDeclaration} alt="Esquerda" className="w-full h-auto" />
                    <h2 className="w-full text-center font-semibold">Sou louco por você</h2>
                </section>

                <div className="relative z-10 w-[40vw] max-w-sm mx-auto">
                    <motion.div
                        className="cursor-pointer shadow-xl rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsOpen(true)}
                    >
                        <Image src={Fotos} alt="Fotos" className="w-full h-auto object-contain" />
                    </motion.div>
                </div>

                <section className="flex flex-col justify-center items-center items-end gap-2 w-1/4 text-sm md:text-base">
                    <Image src={RightDeclaration} alt="Direita" className="w-full h-auto" />
                    <h2 className="w-full text-center font-bold">VOCÊ</h2>
                    <h2 className="w-full text-center font-semibold">é o meu melhor presente</h2>
                </section>
            </main>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-[90vw] max-w-2xl p-4"
                        >
                            <Image src={Fotos} alt="Ampliado" className="rounded-lg w-full h-auto" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <footer
                className="h-[10vh] w-full bg-center"
                style={{
                    backgroundImage: `url(${BackgroundBubble.src})`,
                }}
            ></footer>
        </>
    );
}
