import Image, { StaticImageData } from "next/image"

interface BalloonProps {
    img: StaticImageData
    pos: string
}

export function Balloon({ img, pos }: BalloonProps) {
    return (
        <div className={`flex flex-1 relative ${pos} transition delay-700 duration-300 animate-fade-in-left-slow`}>
            <Image
                src={img}
                alt="Balão de fala"
                className="w-[200px] h-[200px] object-contain"
            />
        </div>
    )
}