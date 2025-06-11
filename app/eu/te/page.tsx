import { Balloon } from '@/components/balloon'
import { StarsAndHearts } from '@/components/star-and-hearts'
import Balloon1 from '@/public/assets/balloons/balloon.jpg'
import Balloon2 from '@/public/assets/balloons/balloon2.jpg'
import Balloon3 from '@/public/assets/balloons/balloon3.jpg'
import Balloon4 from '@/public/assets/balloons/balloon4.jpg'
import Balloon5 from '@/public/assets/balloons/balloon5.jpg'
import Balloon6 from '@/public/assets/balloons/balloon6.png'
import Image from 'next/image'

export default function PageThree() {
    return (
        <main className='relative flex bg-white flex-1 min-h-screen min-w-screen max-w-screen max-h-screen text-black overflow-hidden'>
            <StarsAndHearts/>
            <Balloon img={Balloon3} pos="top-25 left-25" />
            <Balloon img={Balloon2} pos="top-35 left-50" />
            <Balloon img={Balloon4} pos="top-19 left-80" />
            <Balloon img={Balloon6} pos="top-100 -left-120" />
            <Balloon img={Balloon5} pos="top-80 -left-50" />
            <Balloon img={Balloon1} pos="top-75 -left-30" />
        </main >
    )
}
