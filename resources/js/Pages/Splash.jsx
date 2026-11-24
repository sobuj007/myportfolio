import React, { useEffect } from 'react'
import load from '../../assets/load.gif';
import { router } from '@inertiajs/react';

export default function Splash() {
    useEffect(() => {
        setInterval(() => {
            router.visit('/backend/login');
        }, 3000);
    });
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-blue-50">
                <img src={load} className='w-55' />
            </div>
        </>
    )
}
