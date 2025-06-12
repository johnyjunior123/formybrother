import { Balloon } from '@/components/balloon'
import { StarsAndHearts } from '@/components/star-and-hearts'
import { imageLink } from '@/utils/imageLink'

export default function PageThree() {
    return (
        <main className='relative flex bg-white flex-1 min-h-screen min-w-screen max-w-screen max-h-screen text-black overflow-hidden'>
            <StarsAndHearts />
            <Balloon img={imageLink(process.env.NEXT_PUBLIC_BALLONS1)} pos="top-25 left-25" />
            <Balloon img={imageLink(process.env.NEXT_PUBLIC_BALLONS2)} pos="top-35 left-50" />
            <Balloon img={imageLink(process.env.NEXT_PUBLIC_BALLONS3)} pos="top-19 left-80" />
            <Balloon img={imageLink(process.env.NEXT_PUBLIC_BALLONS4)} pos="top-120 -left-120" />
            <Balloon img={imageLink(process.env.NEXT_PUBLIC_BALLONS5)} pos="top-80 -left-50" />
            <Balloon img={imageLink(process.env.NEXT_PUBLIC_BALLONS6)} pos="top-75 -left-30" />
        </main >
    )
}
