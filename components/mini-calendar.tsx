'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoveCalendar() {
    const year = 2024;
    const month = 9; // Outubro (0-index)

    const router = useRouter();
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const startDay = dayjs(new Date(year, month, 1)).day();
    const daysInMonth = dayjs(new Date(year, month + 1, 0)).date();
    const nextMonthDays = 7 - ((startDay + daysInMonth) % 7 || 7);

    const days = [];

    for (let i = 0; i < startDay; i++) {
        days.push({ day: null, type: 'empty' });
    }

    for (let d = 1; d <= daysInMonth; d++) {
        days.push({ day: d, type: 'current' });
    }

    for (let i = 1; i <= nextMonthDays; i++) {
        days.push({ day: i, type: 'next' });
    }

    return (
        <div className="inline-block bg-white p-4 rounded-lg border text-center font-serif relative">
            <h2 className="text-xl font-bold italic mb-1 text-black">9 de Outubro de 2024</h2>
            <div className="border-b border-black mb-2"></div>

            <div className="grid grid-cols-7 gap-1 text-sm font-bold text-red-600">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                    <div key={i}>{d}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 mt-1 text-sm">
                {days.map((item, i) => {
                    if (item.type === 'empty') return <div key={i}></div>;

                    const formatted = item.day!.toString().padStart(2, '0');
                    const baseClass = 'flex items-center justify-center w-8 h-8 rounded-full mx-auto cursor-pointer';

                    if (item.type === 'current') {
                        const isSelected = item.day === selectedDay;

                        return (
                            <div
                                key={i}
                                className={`${baseClass} ${isSelected ? 'bg-red-600 text-white' : 'text-black'} text-[12px] relative`}
                                onClick={() => setSelectedDay(item.day!)}
                            >
                                {isSelected ? (
                                    <>
                                        <span>❤️</span>
                                        <span className="absolute text-[10px] text-white font-bold">{formatted}</span>
                                    </>
                                ) : (
                                    formatted
                                )}
                            </div>
                        );
                    }

                    return (
                        <div key={i} className={`${baseClass} text-gray-400 text-[12px]`}>
                            {formatted}
                        </div>
                    );
                })}
            </div>

            {selectedDay && (
                <div className="absolute left-1/2 top-full mt-4 transform -translate-x-1/2 w-64 bg-pink-100 text-black p-4 rounded-xl shadow-lg transition-all animate-fade-in-up">
                    <p className="text-sm italic font-semibold text-center">
                        {selectedDay === 9
                            ? 'Neste dia a gente se apaixonou ainda mais ❤️'
                            : `Você é o meu motivo favorito de todos os dias!`}
                    </p>
                    {selectedDay === 9 && (
                        <button
                            onClick={() => router.push('/tudo/porque/')}
                            className="cursor-pointer mt-4 mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                        >
                            <span>Próximo</span>
                            <span className="animate-bounce">➡️</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
