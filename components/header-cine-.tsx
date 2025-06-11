'use client';

import { motion } from 'framer-motion';
import Cine from '@/public/assets/pagefour/cine.png';
import Amor from '@/public/assets/pagefour/amor.png';
import Coracao from '@/public/assets/pagefour/coracao.png';
import Coracoes from '@/public/assets/pagefour/coracoes.png';
import Folha from '@/public/assets/pagefour/folha.png';
import Gato from '@/public/assets/pagefour/gato.png';
import Estrela from '@/public/assets/pagefour/estrela.png';
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
                <div className="flex">
                    <div className="relative w-screen h-full">
                        <Image
                            src={Cine}
                            alt="Fita de cinema"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-24">
                            <Image src={Amor} alt="" width={160} height={160} />
                            <Image src={Coracao} alt="" width={160} height={160} />
                            <Image src={Coracoes} alt="" width={160} height={160} />
                            <Image src={Folha} alt="" width={160} height={160} />
                            <Image src={Gato} alt="" width={160} height={160} />
                            <Image src={Estrela} alt="" width={160} height={160} />
                        </div>
                    </div>

                    <div className="relative w-screen h-full">
                        <Image
                            src={Cine}
                            alt="Fita de cinema"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4">
                            <Image src={Amor} alt="" width={160} height={160} />
                            <Image src={Coracao} alt="" width={160} height={160} />
                            <Image src={Coracoes} alt="" width={160} height={160} />
                            <Image src={Folha} alt="" width={160} height={160} />
                            <Image src={Gato} alt="" width={160} height={160} />
                            <Image src={Estrela} alt="" width={160} height={160} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}
