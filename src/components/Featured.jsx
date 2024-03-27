import React from 'react';
import fade from "../assets/FydeImg.png";
import viseimg from "../assets/ViseImg.jpg"

function Featured() {
  return (
    <div className='bg-zinc-800 w-full py-10'>
        <div className='text-5xl font-montreal px-10 py-10'>Featured projects</div>
        <div className='line border-t-[1px] border-zinc-400 '></div>
        <div className='cards px-20 '>
            <div className='cards w-full flex gap-10 mt-10'>
            <div className='cardContainer relative w-1/2 h-[75vh] '>
            <h1 className='absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl leading-none tracking-tighter font-semibold font-grotexsk text-[#CDEA68]'>{"FADE".split('').map((item, index)=><span key={index}>{item}</span>)}</h1>
            <div className='card w-full h-full rounded-lg overflow-hidden'>
            
              <img className="" src={fade} alt="" />
            </div>
            </div>
            <div className='cardContainer relative rounded-lg w-1/2 h-[75vh] '>
            <h1 className='absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-6xl leading-none tracking-tighter font-semibold font-grotexsk text-[#CDEA68]'>{"VISE".split('').map((item, index)=><span key={index}>{item}</span>)}</h1>
            <div className='card  w-full h-full rounded-lg overflow-hidden'>
              <img className='' src={viseimg} alt="" />
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
