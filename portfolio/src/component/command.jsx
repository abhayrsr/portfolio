import React from "react";
import Path from "./path";

export default function Command() {
  // const [inputCommand, setInputCommand] = useState("");
  // const [toggleLs, setToggleLs] = useState(false)
  // const [toggleExp, setToggleExp] = useState(false);

  // // const inputCommandRef = useRef(null);
  // // const pages = ["experience", "skills", "projects", "contact"];
  // console.log(inputCommand)
  // function handleKeyDown(e) {
  //   if (inputCommand === "ls") {
  //     if (e.key === "Enter") {
  //       setToggleLs(true);
  //     }
  //   } else if (inputCommand === `cd experience.txt`) {
  //       if(e.key === "Enter"){
  //         console.log('x')
  //         setToggleExp(true)
  //       } 
  //     }
  // }


  return (
    <div>
      {/* <p className="absolute left 0">
        {" "}
        <span class="text-[#24F75A]">abhay@abhay-WebDev:</span> ~$ <span></span>
        <span className="">
          <input
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="blinking-cursor bg-transparent border-none focus:outline-none"
          />
        </span>
      </p> */}
      <Path />
      <br />
      {/* {toggleLs && <List />}
      {toggleLs && <Path />}
      <br />
      {toggleExp && <Experience />}
      {toggleExp && <Path />} */}
      
    </div>
  );
}
