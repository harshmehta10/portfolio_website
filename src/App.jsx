import React from "react";
import { VscHome, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Dock from "./util/Dock";
import Home from "./Pages/Home/Home";

function App() {
  const items = [
    {
      icon: <VscHome size={20} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscGithubInverted size={20} />,
      label: "Github",
      onClick: () => alert("Github!"),
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      onClick: () => alert("LinkedIn!"),
    },
    {
      icon: <FaXTwitter size={20} />,
      label: "X",
      onClick: () => alert("X"),
    },
  ];
  return (
    <div>
      <Home />
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default App;
