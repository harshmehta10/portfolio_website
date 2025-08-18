import React from "react";
import unitedlogo from "../assets/unitedlexlogo.svg";
import techxerrologo from "../assets/techxerro.svg";

const WorkExperience = () => {
  return (
    <div className="container mx-auto  px-8 lg:px-20 py-12 block lg:flex flex-col  space-y-6">
      <div className="space-y-6">
        <div className="block lg:flex flex-col items-center">
          <p className="font-medium font-montserrat py-2 lg:py-4 px-3 lg:px-7 border-2 lg:border-4 rounded-xl text-xl lg:text-4xl ">
            Work Experience
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={unitedlogo}
                alt="Unitedlex Logo"
                className="size-8 lg:size-13"
              />
            </div>
            <div>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Incident Response
              </p>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Unitedlex
              </p>
            </div>
          </div>
          <div>
            <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
              May 2025 - July 2025
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={techxerrologo}
                alt="Techxerro Logo"
                className="size-8 lg:size-full"
              />
            </div>
            <div>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Full Stack Developer Intern
              </p>
              <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
                Techxerro
              </p>
            </div>
          </div>
          <div>
            <p className="font-montserrat  text-[#050505] font-light text-xs lg:text-lg">
              Dec 2024 - Mar 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
