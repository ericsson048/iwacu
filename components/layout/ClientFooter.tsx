import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function ClientFooter() {
  return (
    <div className='flex flex-col w-full relative '>
        <div className='w-full h-[300px]'>
            <Image src={"/images/tourismm-1024x401.jpeg"} alt='footer' fill className='object-cover rounded-t-lg'/>
        </div>
        <div className="absolute w-full h-full flex justify-center items-center top-0 bottom-0 left-0 text-center right-0">
          <form className="flex flex-col items-start justify-center py-3 px-6 gap-3 space-y-3">
            <h1 className='text-2xl text-white '>Abonnez-vous a Notre <span className='text-primary'>Newsletter</span></h1>
            <input type="text" name="name" id="name" placeholder='entre votre nom' className='w-[400px] py-3 px-6 outline-none' />
            <input type="email" name="email" id="email" placeholder='entre votre email' className='w-[400px] py-3 px-6 outline-none' />
            <Button type="submit">S&apos;inscrire</Button>
          </form>
        </div>
      
    </div>
  )
}

export default ClientFooter
