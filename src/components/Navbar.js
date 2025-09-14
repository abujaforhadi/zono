import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className=' md:w-1/2 mx-auto bg-gray-100 text-[#212121] flex justify-between items-center  py-4 px-5 rounded-lg'>

            <p className='text-2xl font-bold '>ZUNO</p>
            <div className=' text-xl font-medium mx-4 flex gap-2 '>
                <Link href={'/'} className='hover:bg-gray-200' >Home</Link>
                <Link href={'/pages'} className='hover:bg-gray-200'>Pages</Link>
                <Link href={'/templates'} className='hover:bg-gray-200'>Templates</Link>
            </div>
            <button className='bg-[#B6DB7D] px-4 py-2 rounded-md hover:bg-[#649164]'>Request demo</button>

        </div>
    )
}

export default Navbar
