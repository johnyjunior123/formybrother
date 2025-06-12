'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import BackgroundBubble from '@/public/assets/pagefour-2/Imagem41.png';
import LeftDeclaration from '@/public/assets/pagefour-2/Imagem42.png';
import RightDeclaration from '@/public/assets/pagefour-2/Imagem43.png';
import Fotos from '@/public/assets/pagefour-2/Imagem44.png';
import localFont from 'next/font/local'

const Zarid = localFont({
    src: '../../../../../public/fonts/zarid.ttf',
})

export default function PageThree() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header
                className="h-[10vh] w-full"
                style={{
                    backgroundImage: `url(${BackgroundBubble.src})`,
                }}
            ></header>

            <main className={`${Zarid.className} text-black flex-1 w-full relative flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-6 md:gap-0`}>
                <section className="flex flex-col items-center md:items-start justify-center gap-2 w-full md:w-1/4 text-sm md:text-base">
                    <h2 className="w-full text-center md:text-left font-bold text-[24px]">
                        Que o amor continue presente na nossa história
                    </h2>
                    <Image src={LeftDeclaration} alt="Esquerda" className="w-full h-auto" />
                    <h2 className="w-full text-center md:text-left font-semibold text-[24px]">Sou louco por você</h2>
                </section>

                <div className="w-full md:w-[50vw] max-w-sm cursor-pointer overflow-hidden rounded-xl relative md:fixed md:top-[10vh] md:left-1/2 md:-translate-x-1/2 md:h-[80vh] flex justify-center items-center"
                    onClick={() => setIsOpen(true)}
                >
                    <a href="/tudo/porque/eu/te/amo" className="w-full h-full block">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-full h-full"
                        >
                            <Image
                                src={Fotos}
                                alt="Fotos"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </motion.div>
                    </a>
                </div>

                <section className="flex flex-col justify-center items-center md:items-end gap-2 w-full md:w-1/4 text-sm md:text-base">
                    <Image src={RightDeclaration} alt="Direita" className="w-full h-auto" />
                    <h2 className="text-center md:text-right w-full pl-1 pr-1 font-bold text-[24px] bg-black text-white">
                        VOCÊ
                    </h2>
                    <h2 className="w-full text-center md:text-right font-semibold text-[24px]">
                        é o meu melhor <br /><strong className='font-extrabold text-[24px]'>presente</strong>
                    </h2>
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
