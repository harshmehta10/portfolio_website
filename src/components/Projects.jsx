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
      description:
        "A Netflix clone built with React, Tailwind CSS, Redux, and Firebase featuring authentication, responsive UI, and dynamic carousels for Trending, Upcoming, and Top Rated movies, replicating Netflix’s seamless and engaging browsing experience.",
      image: netflix,
      path: "https://react-clone-netflx.netlify.app/",
      Skills: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Shoor",
      description:
        "Shoor is a minimalist fashion e-commerce website built with React, Tailwind CSS, and Framer Motion, featuring clean navigation, product categories, locale options, and a structured footer for policies, customer care, and company information.",
      image: shoor,
      path: "https://shoor.netlify.app/",
      Skills: [
        "React",
        "Redux",
        "Tailwind CSS",
        "AOS Animation",
        "Framer Motion",
      ],
    },
    {
      title: "All in one Podcast",
      description:
        "All-in-One Podcast enables creators to easily produce, distribute, and monetize unlimited podcasts, offering advanced analytics and a seamless streaming experience tailored for both podcast enthusiasts and content publishers.",
      image: allinonepodcast,
      path: "https://allinonepodcast.techxerro.site/",
      Skills: ["React", "Tailwind CSS", "AOS Animation", "Framer Motion"],
    },
    {
      title: "Blal",
      description:
        "A healthcare website for Dr. B. Lal Clinical Laboratory built with React, featuring diagnostic service booking, report access, prescription uploads, membership plans, and a clean, responsive UI for seamless doorstep lab services.",
      image: blal,
      path: "https://blal.netlify.app/",
      Skills: ["React", "Tailwind CSS", "AOS Animation", "Framer Motion"],
    },
    {
      title: "OtsEshore",
      description:
        "Optimum Therapeutic Solutions is a health supplements platform built with React, featuring product listings, personalized supplement recommendations, quick dispatch, on-time delivery, free shipping offers, and a clean responsive UI for a seamless customer experience.",
      image: ots,
      path: "https://ots.techxerro.site/",
      Skills: [
        "React",
        "Redux",
        "Tailwind CSS",
        "AOS Animation",
        "Framer Motion",
      ],
    },
    // Add more projects as needed
  ];

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-2xl drop-shadow-2xl cursor-pointer"
              >
                {/* Top portion: white background with image + hover overlay */}
                <div className="relative bg-[#F1F6EE] h-auto lg:h-64 ">
                  <img src={item.image} alt="photos" className="" />
                </div>

                {/* Bottom portion*/}
                <div className="space-y-5 bg-[#fffbf7] px-6 py-5 relative z-50 ">
                  <div className="flex justify-between">
                    <p className=" font-raleway text-base lg:text-xl font-medium tracking-wide">
                      {item.title}
                    </p>
                  </div>
                  {/* Description */}
                  <p className=" font-montserrat text-sm lg:text-base">
                    {item.description}
                  </p>
                  {/* Skills */}
                  <div className="font-montserrat text-xs lg:text-sm flex flex-wrap gap-2">
                    {item.Skills.map((skill, idx) => (
                      <div key={idx}>
                        <p className="border px-1 bg-[#F8F6F0] font-montserrat">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => window.open(item.path, "_blank")}
                    className="cursor-pointer"
                  >
                    <p className=" font-montserrat text-sm lg:text-base border px-2 bg-black text-[#d7d7d7] hover:bg-[#36454f]">
                      Website 🌐
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
