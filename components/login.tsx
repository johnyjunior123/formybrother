'use client'
import Avatar from '@/public/assets/login-avatar-icon.png'
import loginCadeado from '@/public/assets/login-cadeado-icon.png'
import loginUser from '@/public/assets/login-user-icon.png'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'

export function Login() {
    const [senha, setSenha] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const { push } = useRouter()

    const onClickLogin = () => {
        setLoading(true)
        if (senha === '0810') {
            return push('/tudo/')
        }
        alert('Senha incorreta!')
        setLoading(false)
    }

    return (
        <section className={` flex flex-col justify-center items-center w-80 bg-[#F9F4EA] p-6 rounded-[20px] shadow-[6px_6px_0_#000000] border border-black relative text-center`}>
            <section className='w-20 h-20 rounded-full border-6 border-black mx-auto mb-4 bg-white flex items-end justify-center overflow-hidden'>
                <Image src={Avatar} alt='Pequeno avatar' className="w-14 object-cover" />
            </section>
            <div className="mb-4 relative">
                <div className="absolute left-0 top-0 flex items-center pl-2 h-full">
                    <span className="flex justify-center items-center text-lg"><Image src={loginUser} alt="user-icon" className='w-5 h-5 object-contain' /></span>
                </div>
                <input
                    value="PRIMEIRO BEIJO"
                    disabled
                    type="text"
                    className='text-black w-full pl-10 py-2 rounded-md bg-white border-2 border-black shadow-[3px_3px_0_#FFD93D] font-bold tracking-widest text-center disabled' />
            </div>
            <div className="mb-4 relative">
                <div className="absolute left-0 top-0 flex items-center pl-2 h-full">
                    <span className="flex justify-center items-center text-lg"><Image src={loginCadeado} alt="user-icon" className='w-5 h-5 object-contain' /></span>
                </div>
                <input
                    type='text'
                    onChange={(e) => {
                        setSenha(e.target.value)
                    }}
                    className='font-cup-cakes w-full pl-10 py-2 rounded-md bg-white border-2 border-black shadow-[3px_3px_0_#FFD93D] font-bold tracking-widest text-center text-black caret-black'
                />
            </div>

            <motion.button
                type='submit'
                onClick={onClickLogin}
                disabled={loading}
                whileTap={{ scale: 0.95 }}
                animate={loading ? { scale: [1, 1.1, 1], opacity: [1, 0.7, 1] } : {}}
                transition={{ repeat: loading ? Infinity : 0, duration: 0.8 }}
                className={`bg-gradient-to-b from-yellow-300 to-orange-400 border-2 border-black px-6 py-2 rounded-full text-white font-bold shadow-[3px_3px_0_#000000] 
                ${loading ? 'cursor-wait' : 'hover:scale-105 cursor-pointer'} transition-transform`}
            >
                {loading ? 'Verificando...' : 'Login'}
            </motion.button>
        </section>
    )
}