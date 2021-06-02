import Link from 'next/link';


export default function Nav() {
    return (
        <div className=" shadow-lg py-6 px-0 bg-gradient-to-r from-yellow-400 to-red-500 text-white flex justify-around items-center">
            <img className="w-16 absolute left-1 top-1" src="./logo.png"alt="logo" ></img>
            <div className="text-xl"><Link href='/'>Repar'Automobile</Link></div>
            <div className="flex">
                <div className="ml-18"><Link href='./Appointments'>Prendre rendez-vous</Link></div>
                <div className="ml-10"><Link href='./Activities'>Activitées</Link></div>
                <div className="ml-10"><Link href="./Occasions">Véhicules d'occasions</Link></div>
                <div className="ml-10"><Link href='./Customers-notices'>Avis clients</Link></div>
                <div className="ml-10"><Link href='./Contact'>Contact</Link></div>
                <div className="ml-10"><Link href='./Avis'>Avis</Link></div>
            </div>
        </div>
    )
}