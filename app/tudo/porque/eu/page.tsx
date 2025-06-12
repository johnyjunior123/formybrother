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
            delay: i * 3,
            duration: 5,
            ease: 'easeOut'
        }
    })
}

export default function PageTwo() {
    return (
        <main className={`${gloria.className} flex flex-1 relative w-screen h-screen overflow-hidden bg-white text-black`}>
            <motion.div
                className="flex text-center absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full justify-center px-4"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
            >
                <h1 className="leading-none">
                    <motion.span
                        className="block text-[66px] font-bold"
                        variants={fadeUp}
                        custom={0}
                    >
                        MOTIVOS <br /> PELO QUAL EU
                    </motion.span>
                    <motion.span
                        className="block text-[220px] font-bold text-red-600"
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
                className='flex absolute top-1 left-40 transform -translate-x-1/2 translate-y-1/2 w-48 md:w-64'
            >
                <Image src={SuperPoderosas} alt='' />
                <h2>VOCÊ É UMA PESSOA AMOROSA</h2>
                <Image src={LeftArrow} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className='absolute top-20 right-25 flex items-center w-32 text-center text-xs md:text-sm'
            >
                <h2>TEU SORRISO É LINDO</h2>
                <Image src={Goku} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={4}
                className='absolute top-45 right-40 flex flex-col items-center w-32 text-center text-xs md:text-sm'
            >
                <Image src={RightArrow} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={5}
                className='absolute bottom-32 left-4 flex flex-col items-center w-32 text-center text-xs md:text-sm'
            >
                <Image src={Rakan} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={6}
                className='absolute bottom-25 left-130 flex items-center w-32 text-center text-xs md:text-sm'
            >
                <Image src={LeftBottom} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={7}
                className='absolute bottom-5 left-85 flex items-center w-32 text-center text-xs md:text-sm'
            >
                <Image src={Stitch} alt='' />
                <h2>VOCÊ É PARCERIA FECHADA</h2>
                <Image src={Stitch2} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={8}
                className='absolute bottom-25 right-45 flex flex-col items-center w-36 text-center text-xs md:text-sm'
            >
                <Image src={RightBottom} alt='' />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={9}
                className='absolute bottom-8 right-4 flex flex-col items-center w-36 text-center text-xs md:text-sm'
            >
                <Image src={AnimeGenerico} alt='' />
            </motion.div>
        </main>
    )
}
