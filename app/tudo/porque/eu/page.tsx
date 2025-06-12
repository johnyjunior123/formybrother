'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import SuperPoderosas from '@/public/assets/animes/Imagem16.png'
import Rakan from '@/public/assets/animes/Imagem17.png'
import Stitch from '@/public/assets/animes/Imagem18.png'
import Stitch2 from '@/public/assets/animes/Imagem19.png'
import Goku from '@/public/assets/animes/Imagem20.png'
import AnimeGenerico from '@/public/assets/animes/Imagem45.png'
import LeftArrow from '@/public/assets/animes/Imagem21.png'
import LeftBottom from '@/public/assets/animes/Imagem22.png'
import RightBottom from '@/public/assets/animes/Imagem23.png'
import RightArrow from '@/public/assets/animes/Imagem24.png'
import { Gloria_Hallelujah } from 'next/font/google'

const gloria = Gloria_Hallelujah({
    subsets: ['latin'],
    weight: ['400']
})

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 1,
            duration: 3,
            ease: 'easeOut'
        }
    })
}

export default function PageTwo() {
    return (
        <main className={`${gloria.className} relative w-screen h-screen bg-white text-black overflow-auto md:overflow-hidden`}>

            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
            >
                <h1 className="leading-none">
                    <motion.span
                        className="block text-4xl md:text-[66px] font-bold"
                        variants={fadeUp}
                        custom={0}
                    >
                        MOTIVOS <br /> PELO QUAL EU
                    </motion.span>
                    <motion.span
                        className="block text-6xl md:text-[220px] font-bold text-red-600"
                        variants={fadeUp}
                        custom={1}
                    >
                        <a href='/tudo/porque/eu/te' className='cursor-pointer'>
                            TE AMO
                        </a>
                    </motion.span>
                </h1>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="flex absolute top-25 left-25 md:left-40 transform -translate-x-1/2 translate-y-1/2 w-36 md:w-64 items-center gap-2"
            >
                <Image src={SuperPoderosas} alt='' className="w-12 md:w-auto" />
                <h2 className="text-xs md:text-base">VOCÊ É UMA PESSOA AMOROSA</h2>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="absolute top-27 right-4 md:right-20 flex items-center w-24 md:w-32 text-center text-xs md:text-sm gap-2"
            >
                <h2>TEU SORRISO É LINDO</h2>
                <Image src={Goku} alt='' className="w-12 md:w-auto" />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={4}
                className="absolute bottom-24 left-2 md:left-4 flex flex-col items-center w-20 md:w-32 text-center text-xs md:text-sm"
            >
                <Image src={Rakan} alt='' className="w-16 md:w-auto" />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={5}
                className="absolute bottom-4 left-16 md:left-[250px] flex items-center w-32 text-center text-xs md:text-sm gap-2"
            >
                <Image src={Stitch} alt='' className="w-10 md:w-auto" />
                <h2>VOCÊ É PARCERIA FECHADA</h2>
                <Image src={Stitch2} alt='' className="w-10 md:w-auto" />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={6}
                className="absolute bottom-4 right-2 md:right-4 flex flex-col items-center w-28 md:w-36 text-center text-xs md:text-sm"
            >
                <Image src={AnimeGenerico} alt='' className="w-20 md:w-auto" />
            </motion.div>

        </main>

    )
}
