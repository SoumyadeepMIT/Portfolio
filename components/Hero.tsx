import React from 'react'
import Image from "next/image";
import { Contacts } from './Contacts';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
        <Image src = "/myphoto.jpeg" alt="My Photo" width = {200} height={200} className="rounded-full" />
        <h1 className="text-4xl font-bold mt-4">Soumyadeep Mitra</h1>
        <p className="text-xl mt-2">Software Engineer</p>
        <Contacts />
        <div className="border-b-2 border-[#f4f1eb] w-3/4 mt-6"></div>
    </div>
  )
}

export default Hero