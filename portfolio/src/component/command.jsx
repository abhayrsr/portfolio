import React, {useState }from "react";

export default function Command() {
  const [inputCommand, setInputCommand] = useState("");
  const [toggle, setToggle] = useState(false)
//   const inputCommandRef = useRef(null);
//   const pages = ["experience", "skills", "projects", "contact"];

function handleKeyDown(e) {
    if (inputCommand === "ls") {
      if (e.key === "Enter") {
        setToggle(true)
      }
    } else {
        if(e.key === "Enter"){
            setToggle(false)
        }
    }
}

  
  return (
    <div>
      <p className="absolute left 0">
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
      </p>
      <br/>
      {toggle && <p className="absolute left 0">
        <span className="mr-8">experience.txt </span>
        <span className="mr-8">skills.txt </span>
        <span className="mr-8"> projects.txt </span>
        <span className="mr-8">contact.txt </span>
    </p>}
    </div>
  );
}
