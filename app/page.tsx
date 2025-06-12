import { Login } from "@/components/login";
import Cadeado from '@/public/assets/cadeado-coracao-png.png'
import Coracoes from '@/public/assets/coracao-caindo.png'
import Pombinhos from '@/public/assets/dois-pombinhos.png'
import Image from "next/image";
import localFont from 'next/font/local'

const CupCakes = localFont({
  src: '../public/fonts/CupCakes.otf',
})


export default function Home() {

  return (
    <>
      <header className={`${CupCakes.className} flex flex-4 justify-center items-center text-black text-4xl font-bold tracking-widest mt-6`}>
        <h1>DIÁRIO DO MAX</h1>
      </header>
      <main className={`${CupCakes.className} flex flex-2 flex-col lg:flex-row items-center justify-between w-full mt-10 gap-10"`}>
        <section id="login" className="w-full lg:w-1/3 flex justify-center">
          <Login />
        </section>
        <section className="w-full lg:w-2/3 flex flex-col items-end justify-center">
          <div>
            <Image src={Coracoes} alt="Corações caindo" className="absolute top-0 left-10 w-20 h-20" />
            <Image src={Coracoes} alt="Corações caindo" className="absolute top-0 left-40 w-20 h-20" />

            <Image src={Coracoes} alt="Corações caindo" className="absolute top-0 right-10 w-20 h-20" />
            <Image src={Coracoes} alt="Corações caindo" className="absolute top-0 right-40 w-20 h-20" />
          </div>
          <Image src={Cadeado} alt="Cadeado em forma de coração" className="max-w-[30%] h-auto" />
        </section>
      </main>
      <footer className={`${CupCakes.className} flex flex-2 items-end justify-between w-full mt-10 border-b-6 border-black `}>
        <h2 className=" text-black text-[5vw] font-bold">67%</h2>
        <Image src={Pombinhos} alt="Casal se olhando" className="max-w-[40%] h-auto
          mx-auto mt-6
          lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:mx-0 lg:mt-0" />
        <h2 className="text-black text-lg tracking-widest">SEGREDOS DE 8 MESES</h2>
      </footer>
    </>
  );
}
