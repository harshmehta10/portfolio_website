import React from "react";
import SplitText from "../util/SplitText";
import TextType from "../util/TextType";
import pic from "../assets/pic.jpeg";
const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="max-w-screen-2xl mx-auto h-screen px-8 lg:px-20 py-6 lg:py-10 space-y-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-5 justify-center">
        <img src={pic} alt="" className="rounded-full size-60 object-cover" />
        <SplitText
          text=" Namaste 🙏🏽 , I am Harsh"
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
      </div>
    </div>
  );
};

export default Hero;
