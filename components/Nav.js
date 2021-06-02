import Link from 'next/link';
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

export default function Nav() {
    return (
        <div> 
                <img src="./icon-burger.png" className=" w-5 right-5 top-5 absolute md:hidden "></img>
                
                
                
                
                
                
                
        <div className="md:flex justify-around items-center flex-row shadow-lg py-6 px-0 bg-gradient-to-r from-yellow-400 to-red-500 text-white ">
            <img className="md:w-16 absolute left-2 top-5 md:left-1 md:top-1 w-12" src="./logo.png"alt="logo" ></img>

            <div className="text-xl sm:ml-10 sm:flex sm:justify-around  md:flex md:justify-around md:mx-16 ml-16"><Link href='/'>Repar'Automobile</Link></div>

        
            <div className="md:flex md:items-center ">
                <div className="ml-16 md:mx-4"><Link href='./Appointments'>Prendre rendez-vous</Link></div>
                <div className="ml-16 md:mx-4"><Link href='./Activities'>Activitées</Link></div>
                <div className="ml-16 md:mx-4"><Link href="./Occasions">Véhicules d'occasions</Link></div>
                <div className="ml-16 md:mx-4"><Link href='./Customers-notices'>Avis clients</Link></div>
                <div className="ml-16 md:mx-4"><Link href='./Contact'>Contact</Link></div>
                
            </div>
        </div>
        </div>
    )
}