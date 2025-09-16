import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-2xl flex justify-between items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg text-[#212121] z-50'>

            <span className="text-2xl font-bold">zuno</span>
            <div className='text-xl font-medium mx-4 flex gap-2'>
                <Link href={'/'} className='hover:bg-gray-200 px-2 py-1 rounded-md'>Home</Link>
                <Link href={'/pages'} className='hover:bg-gray-200 px-2 py-1 rounded-md'>Pages</Link>
                <Link href={'/templates'} className='hover:bg-gray-200 px-2 py-1 rounded-md'>Templates</Link>
            </div>
            <button className='bg-[#B6DB7D] px-4 py-2 rounded-md hover:bg-[#649164] transition-colors'>
                Request demo
            </button>

        </div>
    )
}

export default Navbar
