import Image from 'next/image'
import React from 'react'

function CardCircle() {
    return (
        <div className='h-min-screen flex justify-center items-center gap-5 py-10'>
            <Image src={'/1.avif'} alt='image' width={200} height={200} className='rounded-lg w-64 h-64  '/>
            <Image src={'/2.avif'} alt='image' width={200} height={200} className='rounded-lg w-64 h-64 '/>
            <Image src={'/3.avif'} alt='image' width={200} height={200} className='rounded-lg w-64 h-64 '/>
            <Image src={'/4.avif'} alt='image' width={200} height={200} className='rounded-lg w-64 h-64 '/>
            <Image src={'/5.avif'} alt='image' width={200} height={200} className='rounded-lg w-64 h-64 '/>
            <Image src={'/6.avif'} alt='image' width={200} height={200} className='rounded-lg w-64 h-64 '/> 
        </div>
    )
}

export default CardCircle
