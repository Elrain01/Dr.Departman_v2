import React from 'react'
import Image from 'next/image';



const Poshtibani = () => {
    return (
        <div className=' bg-slate-900 w-full h-16 px-6 flex justify-between items-center'>
            <div className='flex items-center space-x-3'>
                <Image className='w-8 'width='100'height='100' alt='xx' src='/images/ring1.gif' />
                <p className='text-l text-gray-400'>09044262926</p>
            </div>

            <div className='flex items-center space-x-3'>
                <Image className='w-8 'width='100'height='100' src='/images/email1.png' />
                <p className='text-l text-gray-400'>@email.com</p>
            </div>

            <div className='flex items-center space-x-3'>
                <p className=' text-gray-400'>مازندران - میذان ساری - خیابان فرهنگ</p>
            </div>

        </div>
          

     )
 }
export default Poshtibani;