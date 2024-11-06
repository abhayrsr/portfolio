import React, { useState, useEffect, useRef } from "react";
import Experience from "../pages/experience/experience";
import Projects from "../pages/projects/projects";
import Contact from "../pages/contact/contact";
import Skills from "../pages/skills/skills";
import List from "../pages/list/list";
import Error from "../pages/error/error";

export default function Path() {
  const [inputCommand, setInputCommand] = useState("");
  const [toggleList, setToggleList] = useState(false)
  const [toggleExp, setToggleExp] = useState(false);
  const [toggleProject, setToggleProject] = useState(false)
  const [toggleContact, setToggleContact] = useState(false)
  const [toggleSkills, setToggleSkills] = useState(false)
  const [toggleError, setToggleError] = useState(false)
  const [toggleEmp, setToggleEmp] = useState(false)
  const inputRef = useRef(null)

  function handleKeyDown(e) {
    if (inputCommand === "ls") {
      if (e.key === "Enter") {
        setToggleList(true);
      }
    } else if (inputCommand === `cd experience.txt`) {
        if(e.key === "Enter"){
          setToggleExp(true)
      } 
    } else if (inputCommand === `cd projects.txt`){
      if(e.key === 'Enter'){
        setToggleProject(true)
      }
    } else if(inputCommand === `cd contact.txt`){
      if(e.key === 'Enter'){
        setToggleContact(true)
      }
    } else if(inputCommand === `cd skills.txt`){
      if(e.key === 'Enter'){
        setToggleSkills(true)
      }
    } else if(inputCommand === ``){
      if(e.key === 'Enter'){
        setToggleEmp(true)
      }
    } else {
      if(e.key === 'Enter'){
        setToggleError(true)
      }
    }
  }

  useEffect(() => {
     inputRef.current.focus();
  })

   return ( 
   <div>
      <p className="absolute left 0">
        {" "}
        <span class="text-[#24F75A]">abhay@abhay-WebDev:</span> ~$ <span></span>
        <span className="">
          <input
            ref={inputRef}
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="blinking-cursor bg-transparent border-none focus:outline-none"
          />
        </span>
      </p>
      <br />
      {toggleEmp && <Path />}
      {toggleList && <List />}
      {toggleExp && <Experience />}
      {toggleProject && <Projects />}
      {toggleContact && <Contact />}
      {toggleSkills && <Skills />}
      {toggleError && <Error />}
      
    </div>
  );
}
