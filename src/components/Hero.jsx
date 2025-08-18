import React from "react";
import SplitText from "../util/SplitText";
import TextType from "../util/TextType";
import pic from "../assets/pic.jpeg";
import github from "../assets/github.svg";
import linkdin from "../assets/linkdin.svg";
import twitter from "../assets/twitter.svg";
const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="container mx-auto h-screen px-8 lg:px-20 py-6 lg:py-10 space-y-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-5 justify-center">
        <img
          src={pic}
          alt="pic of the developer"
          className="rounded-full size-60 object-cover"
        />
        <div className="flex items-center space-x-2">
          <SplitText
            text=" Namaste, I am Harsh "
            className="font-raleway font-bold text-xl lg:text-4xl"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <span className="wave ">👋</span>
        </div>

        {/* <p className="text-[#909090] font-light font-raleway text-2xl max-w-2xl text-center">
          Frontend Developer focused on building clean, responsive, and
          user-friendly web experiences.
        </p> */}
        <TextType
          text={[
            "Frontend Developer focused on building clean, responsive, and user-friendly web experiences.",
          ]}
          typingSpeed={55}
          pauseDuration={1000}
          showCursor={true}
          cursorCharacter="|"
          className="text-[#909090] font-light font-raleway text-base lg:text-2xl max-w-2xl text-center "
        />
        <div className="flex justify-between items-center gap-10">
          <img
            src={github}
            alt="GitHub"
            className="hover:scale-110 hover:translate-y-0.5 transition-transform duration-500 cursor-pointer size-8"
            onClick={() =>
              window.open("https://github.com/harshmehta10", "_blank")
            }
          />
          <img
            src={linkdin}
            alt="LinkedIn"
            className="hover:scale-110 hover:translate-y-0.5 transition-transform duration-500 cursor-pointer size-8"
            onClick={() =>
              window.open("https://www.linkedin.com/in/harshmehta02/", "_blank")
            }
          />
          <img
            src={twitter}
            alt="Twitter"
            className="hover:scale-110 hover:translate-y-0.5 transition-transform duration-500 cursor-pointer size-8"
            onClick={() => window.open("https://x.com/Harshmehtaa10", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
