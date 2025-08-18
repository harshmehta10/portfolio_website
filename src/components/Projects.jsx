import React from "react";
import netflix from "../assets/netflix.png";
import shoor from "../assets/shoor.png";
import allinonepodcast from "../assets/allinone.png";
import blal from "../assets/blal.png";
import ots from "../assets/ots.png";

const Projects = () => {
  const data = [
    {
      title: "Netflix",
      description: "Description for Netflix",
      image: netflix,
      path: "https://react-clone-netflx.netlify.app/",
      Skills: "React, Firebase , Tailwind CSS",
    },
    {
      title: "Shoor",
      description: "Description for Shoor",
      image: shoor,
      path: "https://shoor.netlify.app/",
      Skills: "React, Redux , Tailwind CSS, aos animation,framer motion",
    },
    {
      title: "All in one Podcast",
      description: "Description for Shoor",
      image: allinonepodcast,
      path: "https://allinonepodcast.techxerro.site/",
      Skills: "React, Tailwind CSS, aos animation,framer motion",
    },
    {
      title: "Blal",
      description: "Description for Shoor",
      image: blal,
      path: "https://blal.netlify.app/",
      Skills: "React, Tailwind CSS, aos animation,framer motion",
    },
    {
      title: "OtsEshore",
      description: "Description for Shoor",
      image: ots,
      path: "https://ots.techxerro.site/",
      Skills: "React, Redux , Tailwind CSS, aos animation,framer motion",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div className="container mx-auto px-8 lg:px-20 py-12 block lg:flex flex-col space-y-6">
        <div className="space-y-6">
          <div className="block lg:flex flex-col items-center">
            <p className="font-medium font-raleway py-2 lg:py-4 px-3 lg:px-7 border-2 lg:border-4 rounded-xl text-xl lg:text-4xl">
              Projects
            </p>
          </div>
          <p className="font-montserrat font-normal text-[#050505] text-base lg:text-xl flex flex-col items-center">
            Here are some of my projects:
          </p>
          <div className="space-y-6 mt-8">
            {/* 4-column grid for the cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow">
                  {/* Top portion: white background with image + hover overlay */}
                  <div className="relative bg-[#F1F6EE] h-auto lg:h-64 ">
                    <img src={item.image} alt="photos" className="" />
                  </div>

                  {/* Bottom portion: gradient background */}
                  <div className="space-y-5 bg-white px-6 py-5 relative z-50">
                    {/* Title + Pricing */}
                    <div className="flex justify-between">
                      <p className=" font-inter  text-sm lg:text-base font-medium">
                        {item.title}
                      </p>
                    </div>
                    {/* Description */}
                    <p className=" font-inter text-sm lg:text-base">
                      {item.description}
                    </p>
                    {/* Skills */}
                    <p className=" font-inter text-sm lg:text-base">
                      Skills: {item.Skills}
                    </p>
                    <button
                      onClick={() => window.open(item.path, "_blank")}
                      className="cursor-pointer"
                    >
                      <p className=" font-inter text-sm lg:text-base">
                        Website
                      </p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
