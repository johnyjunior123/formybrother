import Image, { StaticImageData } from "next/image"

interface BalloonProps {
    img: StaticImageData
    pos: string
}

export function Balloon({ img, pos }: BalloonProps) {
    return (
        <div className={`flex flex-1 relative ${pos} transition delay-700 duration-300 animate-fade-in-left-slow`}>
            <div className="relative w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw]">
                <Image
                    src={img}
                    alt="Balão de fala"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}