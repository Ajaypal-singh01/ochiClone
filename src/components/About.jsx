import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-800">
      <h1 className="text-5xl mx-10 font-normal ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className=" w-full mx-10 mt-10 pb-10 border-y-[1px] border-zinc-700 pt-5 flex justify-between ">
        <div className="w-full ">What you can expect:</div>
        <div className="w-full flex -ml-20">
          <div className="w-full">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="mt-10">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.{" "}
            </p>
          </div>
          <div className="w-full mt-20 ml-5">
            <div>S: </div>
            <div className="mt-5">
              <p>Instagram</p>
              <p>Behance </p>
              <p>Facebook </p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-5xl mx-10">Our approach:
            
        </div>
        <div></div>
      </div>
    </div>
    
  );
}

export default About;
