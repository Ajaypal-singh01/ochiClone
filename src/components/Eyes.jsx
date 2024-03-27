import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate,setRotate]=useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX=e.clientX;
      let mousey=e.clientY;

      let deltaX=mouseX-window.innerWidth/2;
    let deltaY=mousey-window.innerHeight/2;

    let angel=Math.atan2(deltaY,deltaX)*(180/Math.PI);  
    setRotate(angel-180);
    })
    
  })
  return (
    <div className="w-full h-screen overflow-hidden ">
      <div className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className=" absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center font-montreal">
            <div style={{transform:`rotate(${rotate}deg)`}} className="line w-full h-5  ">
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center">
            <div  className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center font-montreal">
            <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-5  ">
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
