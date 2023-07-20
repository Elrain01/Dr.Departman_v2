import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'


const Test = dynamic(() => import('/components/Test'))
const Poshtibani = dynamic(() => import('/components/Poshtibani'))
const Last = dynamic(() => import('/components/Last'))
const Drnav = dynamic(() => import('/components/Test'))
const Gigo = dynamic(() => import('/components/Gigo'))
const Loc = dynamic(() => import('/components/Loc'))
const Hero = dynamic(() => import('/components/Hero'))
const Header = dynamic(() => import('/components/Header'))
// hfhfhjhfjjf

export default function Home() {
  return (
   <div className='h-full'>
   
   <Header/>
   <Hero/>
   <Loc/>
   <Gigo/>
   <Drnav/>
   <Last/>
   <div className='  relative bottom-0 right-0 z-20  w-full'>
   <Poshtibani/>
   </div>
   <Test/>
   
   
   

   
    </div>









        
    
  )
}
