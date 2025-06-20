'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import background from '@/public/assets/pagetwo/background-love.jpg'
import EuTeAmo from '@/public/assets/pagetwo/euteamo.jpg'
import Image from 'next/image'
import CalendarMini from '@/components/mini-calendar'
import localFont from 'next/font/local'
import { imageLink } from '@/utils/imageLink'

const Times = localFont({
    src: '../../public/fonts/times.ttf',
})

export default function PageTwo() {
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
            backgroundPosition: ['0% 0%', '50% 50%', '0% 0%'],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        })
    }, [controls])

    return (
        <motion.main
            animate={controls}
            className={`
            ${Times.className} 
            flex flex-col 
            min-h-screen 
            md:h-screen 
            w-screen 
            bg-cover 
            bg-no-repeat 
            bg-black 
            overflow-auto 
            md:overflow-hidden
            `}
            style={{
                backgroundImage: `url(${background.src})`,
                backgroundSize: '150%',
            }}
        >
            <section className="flex flex-wrap justify-center items-center gap-40 px-4 py-6 flex-1">
                <div className='flex flex-col'>
                    <Image src={imageLink(process.env.NEXT_PUBLIC_LEFT1)} width={200} height={200} alt="" className='max-w-[220px] w-full h-auto' />
                    <Image src={imageLink(process.env.NEXT_PUBLIC_LEFT2)} width={200} height={200} alt="" className='max-w-[220px] w-full h-auto' />
                </div>
                <Image src={imageLink(process.env.NEXT_PUBLIC_MID)} width={300} height={300} alt="" className='max-w-[340px] w-full h-auto' />
                <div className='flex flex-col'>
                    <CalendarMini />
                </div>
            </section>

            <section className="flex flex-col md:flex-row justify-around items-center gap-8 w-full p-6">
                <div
                    style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        boxShadow: '0 0 75px rgb(255, 255, 255)',
                        padding: '1rem',
                        borderRadius: '12px',
                    }}
                >
                    <p className="text-black w-[400px] text-base md:text-lg font-medium italic leading-relaxed text-center">
                        {process.env.NEXT_PUBLIC_FRASE_PAGE_TWO}
                    </p>
                </div>

                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 0 75px rgb(255, 255, 255)',
                    padding: '1rem',
                    borderRadius: '12px',
                }}>
                    <Image
                        src={EuTeAmo}
                        alt="Eu te amo"
                        className="w-full h-auto max-w-[340px]"
                    />
                </div>
            </section>
        </motion.main>
    )
}
