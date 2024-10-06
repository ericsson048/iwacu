// "use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import { FaHouseUser, FaMapMarkedAlt, FaCalendarAlt, FaUtensils } from "react-icons/fa";
import SignIn from '../SignIn';

const links = [
    {
        name: "Hebergements",
        path: "/hebergements",
        icon: FaHouseUser
    },
    {
        name: "Tourisme",
        path: "/tourisme",
        icon: FaMapMarkedAlt 
    },
    {
        name: "Events",
        path: "/Event",
        icon: FaCalendarAlt
    },
    {
        name: "Restaurants",
        path: "/restaurants",
        icon: FaUtensils 
    },
];

function ClientNav({className}:{className?:string}) {

  return (
    <div className={cn('flex flex-col w-full  gap-3 space-y-3',className)}>
        <div className="flex w-full items-center justify-between ">
           <Link href='/' className="flex h-16  w-24 relative mr-0">
           <Image src="/images/iwacu.png" alt='logo' fill className='rounded-full absolute' />
            </Link>
            <div className="flex space-x-3 gap-3">
            <Button className='rounded-lg py-3 px-6 shadow-none bg-transparent hover:bg-primary/45 duration-500'>Ajoutez votre établissement</Button>
            <Button className='rounded-lg py-3 px-6 shadow-none bg-transparent hover:bg-primary/45 duration-500'>Button</Button>
            <SignIn/>
            </div>
        </div>

        <nav className='flex gap-3 space-x-3'>
        {links.map((item,idx)=>{
           return <Link key={idx} href={item.path} className='py-3  flex justify-center items-center gap-2 px-6 rounded-full text-card font-[300] hover:bg-primary/85 hover:text-black duration-500'> <item.icon/> {item.name} </Link>
        })}
      </nav>
    </div>
  )
}

export default ClientNav
