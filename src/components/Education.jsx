import React from "react";
import ipu from "../assets/ipu-logo.svg";
import vbb from "../assets/vbb.png";

const Education = () => {
  return (
    <div className="container mx-auto  px-8 lg:px-20 py-12 flex flex-col  space-y-6">
      <div className=" space-y-6">
        <div className="block lg:flex flex-col items-center">
          <p className="font-medium font-raleway py-2 lg:py-4 px-3 lg:px-7 border-2 lg:border-4 rounded-xl text-xl lg:text-4xl">
            Education
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={ipu} alt="GGSIPU Logo" className="size-8 lg:size-13" />
            </div>
            <div>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Guru Gobind Singh IP University
              </p>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                BCA
              </p>
            </div>
          </div>
          <div>
            <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
              2021 - 2024
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={vbb} alt="VBBs Logo" className="size-8 lg:size-13" />
            </div>
            <div>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Vidya Bal Bhawan Sr. Sec. School
              </p>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Commerce with Maths
              </p>
            </div>
          </div>
          <div>
            <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
              2019 - 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
