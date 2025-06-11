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

import Image from 'next/image'

export default function PageTwo() {
    return (
        <>
            <main className='flex flex-1 relative w-screen h-screen overflow-hidden bg-white text-black font-handwriting'>
                <div>
                    <div className='flex absolute top-1 left-40 transform -translate-x-1/2 translate-y-1/2 w-48 md:w-64'>
                        <Image src={SuperPoderosas} alt='' />
                        <h2>VOCÊ É UMA PESSOA AMOROSA</h2>
                        <Image src={LeftArrow} alt='' />
                    </div>
                    <div className='absolute top-20 right-25 flex items-center w-32 text-center text-xs md:text-sm'>
                        <h2>TEU SORRISO É LINDO</h2>
                        <Image src={Goku} alt='' />
                    </div>
                    <div className='absolute top-45 right-40 flex flex-col items-center w-32 text-center text-xs md:text-sm'>
                        <Image src={RightArrow} alt='' />
                    </div>
                </div>
                <div className='absolute bottom-32 left-4 flex flex-col items-center w-32 text-center text-xs md:text-sm'>
                    <Image src={Rakan} alt='' />
                </div>
                <div className="flex text-center absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full justify-center px-4">
                    <h1 className="leading-none">
                        <span className="block text-[66px] font-bold">
                            MOTIVOS <br /> PELO QUAL EU
                        </span>
                        <span className="block text-[185px] font-bold text-red-600">
                            TE AMO
                        </span>
                    </h1>
                </div>
                <div>
                    <div className='absolute bottom-25 left-120 flex items-center w-32 text-center text-xs md:text-sm'>
                        <Image src={LeftBottom} alt='' />
                    </div>
                    <div className='absolute bottom-5 left-85 flex items-center w-32 text-center text-xs md:text-sm'>
                        <Image src={Stitch} alt='' />
                        <h2>VOCÊ É PARCERIA FECHADA</h2>
                        <Image src={Stitch2} alt='' />
                    </div>
                    <div className='absolute bottom-25 right-45 flex flex-col items-center w-36 text-center text-xs md:text-sm'>
                        <Image src={RightBottom} alt='' />
                    </div>
                    <div className='absolute bottom-8 right-4 flex flex-col items-center w-36 text-center text-xs md:text-sm'>
                        <Image src={AnimeGenerico} alt='' />
                    </div>
                </div>
            </main>
        </>
    )
}