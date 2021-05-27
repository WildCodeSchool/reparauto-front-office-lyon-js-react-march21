import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <div className=" shadow-lg py-6 px-8 bg-gradient-to-r from-yellow-400 to-red-500   text-black flex justify-around">
            <div className="text-xl"><Link href='/'>Repar'Automobile</Link></div>
            <div className="flex">
                <div className="ml-8"><Link href='/Prendre rendez-vous'>Prendre rendez-vous</Link></div>
                <div className="ml-8"><Link href='/Activitées'>Activitées</Link></div>
                <div className="ml-8"><Link href="/Véhicules d'occasion">Véhicules d'occasions</Link></div>
                <div className="ml-8"><Link href='/Contact'>Contact</Link></div>
            </div>
        </div>
    )
}