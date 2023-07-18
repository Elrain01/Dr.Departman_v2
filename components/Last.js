import React from 'react'
import Image from 'next/image';


const Last = () => {
    return (
    <div className='  w-full h-24 flex flex-col items-center'>
            <Image className='w-14 object-contain ' width='100' height='100' 
             src='/images/logo.png'/>
            <div className='flex space-x-2'>
            <p className='text-white flex  '>power by</p>
            <p className='text-sky-500'>ONLINE CEO</p>
            </div>
       
</div>
  )
 }
 export default Last;