import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'




const Header = dynamic(() => import('../components/page1/Header'))
const Hero = dynamic(() => import('../components/page1/Hero'))
const Location = dynamic(() => import('../components/page1/Location'))
const Drnav = dynamic(() => import('../components/page1/Drnav'))
const Lastlogo = dynamic(() => import('../components/page1/Lastlogo'))
const Poshtibani = dynamic(() => import('../components/page1/Poshtibani'))

export default function Home() {
  return (
   <div className='h-full'>
   
   <Header/>
   <Hero/>
   <Location/>
   <Drnav/>
   <Lastlogo/>
   <div className='  relative bottom-0 right-0 z-20  w-full'>
   <Poshtibani/>
   </div>

 
   
   
   

   
    </div>









        
    
  )
}
