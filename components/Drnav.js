import React from 'react'
import Image from 'next/image';


const Drnav = () => {
    return (
         <div className=' flex w-full items-center justify-center px-[10%]'>

                <div class="grid grid-cols-4 gap-4  p-3  ">
                    
                    <div className='relative w-full  inline-block  max-h-96 transition delay-150 
                        border-4 duration-300 brightness-50 hover:brightness-100
                        ease-in-out rounded-xl scale-100 hover:scale-110 shadow-2xl z-0 hover:z-10'>
                    
                            <Image src='/images/s2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                            <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/
                            bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                            مشاوره خانواده
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                        </button>
                    </div>
                
                
                    <div className='relative w-full  inline-block  max-h-96 transition delay-150 border-4 
                    duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl 
                    scale-75 hover:scale-100  shadow-2xl z-0 hover:z-10'>

                            <Image src='/images/s3.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                            <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4
                            bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                            مشاوره خانواده
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    </button>
                    
                    </div>
                
                    <div className='relative w-full  inline-block  max-h-96 transition delay-150 border-4 
                    duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl scale-100 
                    hover:scale-125 shadow-2xl z-0 hover:z-10'>

                            <Image src='/images/s5.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                            <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4
                            bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                            مشاوره خانواده
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    </button>
                </div>

                    <div className='relative w-full  inline-block  max-h-96 transition delay-150 border-4
                    duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl scale-100 
                    hover:scale-125 shadow-2xl z-0 hover:z-10'>

                            <Image src='/images/s1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                            <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4
                            bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                            مشاوره خانواده
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    </button>
                </div>
                
                    <div className='relative w-full  inline-block  max-h-96 transition delay-150 
                    border-4 duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl
                    scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>

                            <Image src='/images/bgg.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                            <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4
                            bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                            مشاوره خانواده
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    </button>
                </div>
                
                    <div className='relative w-full  inline-block  max-h-96 transition delay-150 
                    border-4 duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl
                    scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
                        
                            <Image src='/images/bg.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                            <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4
                            bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                            مشاوره خانواده
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    </button>
                </div>
            
            </div>
         </div>
    )
}
export default Drnav;