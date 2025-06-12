'use client';

import { motion } from 'framer-motion';
import Cine from '@/public/assets/pagefour/cine.png';
import Image from 'next/image';
import { imageLink } from '@/utils/imageLink';

export function HeaderCine() {
    const fotos: string[] = JSON.parse(process.env.NEXT_PUBLIC_CINE_PHOTOS ?? "[]");
    console.log(fotos)
    return (
        <header className="flex flex-1 relative overflow-hidden h-96">
            <motion.div
                className="absolute top-0 left-0 h-full flex"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                <div className="flex relative w-screen h-full">
                    <Image
                        src={Cine}
                        alt="Fita de cinema"
                        fill
                        className="object-cover"
                    />
                    {
                        fotos.map((img, i) => (
                            <div key={i} className="flex flex-1 inset-0 flex justify-center items-center gap-2">
                                <Image width={100} height={100} src={imageLink(img)} alt="" className='w-full' />
                            </div>
                        ))
                    }

                </div>

                <div className="flex relative w-screen h-full">
                    <Image
                        src={Cine}
                        alt="Fita de cinema"
                        fill
                        className="object-cover"
                    />
                    {
                        fotos.map((img, i) => (
                            <div key={i} className="flex flex-1 inset-0 flex justify-center items-center gap-2">
                                <Image width={100} height={100} src={imageLink(img)} alt="" className='w-full' />
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </header>
    );
}