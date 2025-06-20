'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BalloonProps {
  img: string;
  pos: string;
}

export function Balloon({ img, pos }: BalloonProps) {
  return (
    <motion.div
      className={`flex flex-1 relative ${pos}`}
      animate={{
        y: [0, -10, 0, 10, 0],
        x: [0, 50, 0, -50, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <a href="/tudo/porque/eu">
        <Image
          width={100}
          height={100}
          src={img}
          alt="Balão de fala"
          className="w-[200px] h-[200px] object-contain"
        />
      </a>
    </motion.div>
  );
}
