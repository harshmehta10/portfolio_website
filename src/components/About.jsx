import React from "react";

const About = () => {
  return (
    <div className=" container mx-auto  px-8 lg:px-20 py-12 block lg:flex flex-col space-y-6">
      <div className="block lg:flex flex-col items-center justify-center space-y-6">
        <p className="font-medium font-montserrat py-2 lg:py-4 px-3 lg:px-7 border-2 lg:border-4 rounded-xl text-xl lg:text-4xl ">
          About Me
        </p>
        <p className="font-open-sans  text-[#050505] font-light text-sm lg:text-lg">
          I'm a passionate and curious Frontend Developer with 6 months of
          hands-on experience, including a 3-month internship focused on
          React.js, Tailwind CSS, Firebase, and API integration. During my
          internship and personal projects, I built responsive web applications
          . I’m also experienced with Git, GitHub, and deploying apps via
          Netlify and Vercel. Alongside my technical experience, I gained 3
          months of corporate exposure where I enhanced my soft
          skills—communication, collaboration, and time management. I’m now
          actively seeking a frontend development role where I can grow my
          skills, explore advanced tools like Next.js and TypeScript, and
          contribute to meaningful products. My long-term goal is to become a
          well-rounded fullstack developer.
        </p>
      </div>
    </div>
  );
};

export default About;
