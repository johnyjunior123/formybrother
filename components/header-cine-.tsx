'use client';

import { motion } from 'framer-motion';
import Cine from '@/public/assets/pagefour/cine.png';
import Amor from '@/public/assets/pagefour/Imagem10.png';
import Coracao from '@/public/assets/pagefour/Imagem5.png';
import Coracoes from '@/public/assets/pagefour/Imagem6.png';
import Folha from '@/public/assets/pagefour/Imagem7.png';
import Gato from '@/public/assets/pagefour/Imagem8.png';
import Estrela from '@/public/assets/pagefour/Imagem9.png';
import Image from 'next/image';

export function HeaderCine() {
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
                        [Amor, Coracao, Coracoes, Folha, Gato, Estrela].map((img, i) => (
                            <div key={i} className="flex flex-1 inset-0 flex justify-center items-center gap-2">
                                <Image src={img} alt="" className='w-full' />
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
                        [Amor, Coracao, Coracoes, Folha, Gato, Estrela].map((img, i) => (
                            <div key={i} className="flex flex-1 inset-0 flex justify-center items-center gap-2">
                                <Image src={img} alt="" className='w-full' />
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </header>
    );
}