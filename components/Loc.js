import React from 'react'
import Image from 'next/image';
// import Slider from '../components/Slider'
import X from './X';
const Loc = () => {
    return (
    <div className='  md:space-y-4 py-8  px-4 flex md:flex-col  justify-center items-center'>
          
   
          <X 
          img1='/images/s1.jpg' img2='/images/s1.jpg' img3='/images/s1.jpg' img4='/images/s1.jpg' img5='/images/s1.jpg' img6='/images/s1.jpg'
          img7='/images/s1.jpg' img8='/images/s1.jpg' img9='/images/s1.jpg' img10='/images/s1.jpg' />

   
        

        
        
        <div className=' w-1/2 h-60 flex justify-center items-center '>
            <div className='bg-slate-500  w-4/5'>
                <Image className='w-full h-full object-contain ' width='600' height='400' 
                src='/images/loc2.jpg'/>
            </div>
        </div>
    
    </div>


    )
}
export default Loc;