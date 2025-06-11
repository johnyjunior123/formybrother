'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import React from 'react';

export default function LoveCalendar() {
    const year = 2024;
    const month = 9; // Outubro (0 indexado)
    const selectedDay = 9;

    const startDay = dayjs(new Date(year, month, 1)).day(); // domingo = 0
    const daysInMonth = dayjs(new Date(year, month + 1, 0)).date();
    const nextMonthDays = 7 - ((startDay + daysInMonth) % 7 || 7); // completa a última linha

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
        <div className="inline-block bg-white p-4 rounded-lg border text-center font-serif">
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

                    const baseClass =
                        'flex items-center justify-center w-8 h-8 rounded-full mx-auto';

                    if (item.type === 'current') {
                        if (item.day === selectedDay) {
                            return (
                                <div key={i} className={`${baseClass} bg-red-600 text-white text-[12px] relative`}>
                                    <span>❤️</span>
                                    <span className="absolute text-[10px] text-white font-bold">{formatted}</span>
                                </div>
                            );
                        }
                        return (
                            <div key={i} className={`${baseClass} text-black text-[12px]`}>
                                {formatted}
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
        </div>
    );
}
