'use client';

import { HeaderCine } from '@/components/header-cine-';
import CoracaoLeft from '@/public/assets/pagefour/coracao-grande-left.png'
import CoracaoLeftSmall from '@/public/assets/pagefour/coracao-pequeno-left.png'
import CoracaoRight from '@/public/assets/pagefour/coracao-grande-right.png'
import CoracaoRightSmall from '@/public/assets/pagefour/coracao-pequeno-rigth.png'
import Coracao from '@/public/assets/pagefour/coracao-center.png'
import CineLeft from '@/public/assets/pagefour/leftCine.png'
import CineRight from '@/public/assets/pagefour/rightCine.png'
import localFont from 'next/font/local'

const Above = localFont({
  src: '../../../../../../public/fonts/above.otf',
})

import Image from 'next/image';

export default function PageFive() {
    return (
        <>
            <HeaderCine />

            <main className="flex flex-1 font-above-the-beyond mt-5 justify-center"
                style={{
                    backgroundImage: `
                    url(${CineLeft.src}),
                    url(${Coracao.src}),
                    url(${CineRight.src})
                    `,
                    backgroundPosition: `
                    left bottom,
                    center bottom,
                    right bottom
                    `,
                    backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                    backgroundSize: '40% auto, 8% auto, 40% auto',
                    fontFamily: 'above-the-beyond'
                }}
            >
            <div className={`${Above.className} flex flex-1 justify-between h-full pl-4 pr-4`}>
                <div>
                    <Image src={CoracaoLeftSmall} alt="" />
                    <Image src={CoracaoLeft} alt="" />
                </div>
                <div className='text-center flex flex-col justify-center items-center text-black gap-14'>
                    <h1 className='text-[45px] font-bold'>Feliz dia dos Namorados
                    </h1>
                    <h2 className='text-[25px]'>Te amar virou meu hábito favorito… e nem preciso lembrar, meu coração já sabe de cor
                    </h2>
                </div>
                <div>
                    <Image src={CoracaoRight} alt="" />
                    <Image src={CoracaoRightSmall} alt="" />
                </div>
            </div>
        </main >
        </>
    );
}
