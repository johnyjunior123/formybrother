'use client'
import FotoPrincipal from '@/public/assets/pagetwo/fotoprincipal.png'
import Foto1 from '@/public/assets/pagetwo/foto1.png'
import Foto2 from '@/public/assets/pagetwo/foto2.png'
import background from '@/public/assets/pagetwo/background-love.jpg'
import EuTeAmo from '@/public/assets/pagetwo/euteamo.jpg'
import Image from 'next/image'
import CalendarMini from '@/components/mini-calendar'

export default function LastPage() {
    return (
        <main
            className="flex flex-col h-screen w-screen bg-black bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `
                url(${background.src})`
            }}

        >
            <section className="flex flex-wrap justify-center items-center gap-40 px-4 py-6 flex-1">
                <div className='flex flex-col'>
                    <Image src={Foto1} alt="" className='max-w-[220px] w-full h-auto'></Image>
                    <Image src={Foto2} alt="" className='max-w-[220px] w-full h-auto'></Image>
                </div>
                <Image src={FotoPrincipal} alt="" className='max-w-[340px] w-full h-auto'></Image>
                <div>
                    <CalendarMini />
                </div>
            </section>

            <section className="flex flex-col md:flex-row justify-around items-center gap-8 w-full p-6">
                <div
                    style={{
                        backgroundColor: 'rgb(255, 255, 255)', // branco quase transparente
                        boxShadow: '0 0 75px rgb(255, 255, 255)', // sombra branca suave
                        padding: '1rem',
                        borderRadius: '12px',
                    }}
                >
                    <p className="text-black text-base md:text-lg font-medium italic leading-relaxed text-center">
                        Os melhores dias da minha vida foram, são, e vão ser ao<br />
                        seu lado, <strong className="font-semibold">você é especial demais pra mim</strong>, acordar e saber<br />
                        que te tenho é tão tranquilizante que me faz flutuar
                    </p>
                </div>


                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // branco quase transparente
                    boxShadow: '0 0 75px rgb(255, 255, 255)', // sombra branca suave
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
        </main >
    )
}