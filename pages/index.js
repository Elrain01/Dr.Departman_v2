import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Loc from '@/components/Loc'
import Gigo from '@/components/Gigo'
import Drnav from '@/components/Drnav'
import Last from '@/components/Last'
import Poshtibani from '@/components/Poshtibani'

// hfhfhjhfjjf
export default function Home() {
  return (
   <div>
   
   <Header/>
   <Hero/>
   <Loc/>
   <Gigo/>
   <Drnav/>
   <Last/>
   <div className='  relative bottom-0 right-0 z-20  w-full'>
   <Poshtibani/>
   </div>
   
   
   
   

   
    </div>









        
    
  )
}
