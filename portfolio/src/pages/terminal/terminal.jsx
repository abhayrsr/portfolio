import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
import Command from "../../component/command";
import "../terminal/terminal.css";
import Path from "../../component/path";

export default function Terminal({toggle}) {
  const [showNextLine, setShowNextLine] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showDoneSec, setShowDoneSec] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [showSecCmdLine, setShowSecCmdLine] = useState(false);
  const [lsInput, setLsInput] = useState("");
  const [lsInputToggle, setLsInputToggle] = useState(false);
  const [lsPagesToggle, setlsPagesToggle] = useState(false);
  const lsInputRef = useRef(null);
  const [showThirdCmdLine, setShowThirdCmdLine] = useState(false);
  const [cdInput, setCdInput] = useState("");
  const [cdInputToggle, setCdInputToggle] = useState("");
  const cdInputRef = useRef(null);
  const [showFourthCmdLine, setShowFourthCmdLine] = useState(false);
  const [cdInput1, setCdInput1] = useState("");
  const [cdInputToggle1, setCdInputToggle1] = useState("");
  const cdInput1Ref = useRef(null);
  const pages = ["experience", "skills", "projects", "contact"];

  function handleToggle(data){
    setLsInputToggle(data)
  }

  function handleCommandComponent(){
    // <Command sendToggle={handleToggle} />
  }

  function handleKeyDown(e) {
    if (lsInput === "ls") {
      if (e.key === "Enter") {
        setLsInputToggle(true);
      }
    } else {
      // setCdInputToggle(true);
        for (let p = 0; p < pages.length; p++) {
          if (cdInput === `cd ${pages[p]}.txt`) {
            if (e.key === "Enter") {
              showThirdCmdLine(true)
            }
          }
        }
      }
    }
  
    function handleInput(){
      setLsInput(lsInput)
    }

  // function handleKeyDownCd(e) {
  //   for (let p = 0; p < pages.length; p++) {
  //     if (cdInput === `cd ${pages[p]}.txt`) {
  //       if (e.key === "Enter") {
  //         setCdInputToggle(true);
  //       }
  //     }
  //   }
  // }

   function handleKeyDownCd1(e){
    for (let p = 0; p < pages.length; p++) {
      if (cdInput1 === `cd ${pages[p]}.txt`) {
        if (e.key === "Enter") {
          setCdInputToggle1(true);

        }
      }
    }
  }

  const component = () => {
    if (cdInput === `cd experience.txt`) {
      return <Experience />;
    } else if (cdInput === `cd skills.txt`) {
      return <Skills />;
    } else if (cdInput === `cd projects.txt`) {
      return <Projects />;
    } else if (cdInput === `cd contact.txt`) {
      return <Contact />;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideCursor(true);
    }, 5650);

    return () => clearTimeout(timer);
  }, [showNextLine]);

  useEffect(() => {
    if (showNextLine) {
      const timer = setTimeout(() => {
        setShowDone(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showNextLine]);

  useEffect(() => {
    if (showNextLine) {
      const timer = setTimeout(() => {
        setShowTree(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showNextLine]);

  useEffect(() => {
    if (showNextLine) {
      const timer = setTimeout(() => {
        setShowInfo(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showNextLine]);

  useEffect(() => {
    if (showNextLine) {
      const timer = setTimeout(() => {
        setShowDoneSec(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showNextLine]);

  useEffect(() => {
    if (showNextLine) {
      const timer = setTimeout(() => {
        setShowCommands(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showNextLine]);

  useEffect(() => {
    if (showNextLine) {
      const timer = setTimeout(() => {
        setShowSecCmdLine(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showNextLine]);

  useEffect(() => {
    if (lsInputToggle) {
      const timer = setTimeout(() => {
        setShowThirdCmdLine(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [lsInputToggle]);

  useEffect(() => {
    if (cdInputToggle) {
      const timer = setTimeout(() => {
        setShowFourthCmdLine(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [cdInputToggle]);

  useEffect(() => {
    if (lsInput === "ls" && lsInputToggle) {
      console.log(lsInput);
      const timer = setTimeout(() => {
        setlsPagesToggle(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [lsInput, lsInputToggle]);

  useEffect(() => {
    if (cdInputToggle) {
      const timer = setTimeout(() => {
        setCdInputToggle(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [cdInputToggle]);

  useEffect(() => {
    if (showSecCmdLine && lsInputRef.current) {
      lsInputRef.current.focus();
      lsInputRef.current.select();
    }
  }, [showSecCmdLine]);

  useEffect(() => {
    if (showThirdCmdLine && cdInputRef.current) {
      cdInputRef.current.focus();
      cdInputRef.current.select();
    }
  }, [showThirdCmdLine]);

  useEffect(() => {
    if (showFourthCmdLine && cdInput1Ref.current) {
      cdInput1Ref.current.focus();
      cdInput1Ref.current.select();
    }
  }, [showFourthCmdLine]);

  return (
    <div>
      <div className="relative sm:container sm:mx-auto size-full">
        <div className="terminal absolute left 0 font-ubuntu text-white mobile:text-xs tablets:text-xl laptop:text-2xl size-full">
          {/* <p className="absolute left 0">
            To run command as administrator (user: 'root'), use "sudo command".
            See man sudo root for detail.
          </p>
          <br /> */}
          <p className="terminal-content absolute left 0 ">
            {" "}
            <span className="text-[#24F75A]">abhay@abhay-theDev:</span> ~${" "}
            <span className={hideCursor ? "cursor-hidden" : ""}>
              <ReactTyped
                strings={["sudo apt install portfolio"]}
                typeSpeed={100}
                cursorChar="_"
                startDelay={2000}
                onComplete={() => setShowNextLine(true)}
              />
            </span>
          </p>
          <br />
          {showNextLine && (
            <>
              {/* start of first sudo commands */}

              <p className="absolute left 0">
                Reading package lists... {showDone && <span>Done</span>}
              </p>
              <br></br>
              <p className="absolute left 0">
                {showTree && <>Building dependency tree...</>}
              </p>
              <br></br>
              <p className="absolute left 0">
                {showInfo && <>Reading state information...</>}{" "}
                <span>{showDoneSec && <span className="left">Done</span>}</span>
              </p>
              <br></br>
              <br></br>

              {showCommands && (
                <div>
                  <p className="absolute left 0">
                    You might want to access the portfolio.
                    <br/>
                    The following commands will help:
                    <br />
                    
                      'ls' : to list all pages
                    
                    <br />
                    
                      'cd' : to access each page
                    
                  </p>  
                  <br />
                  <br />
                  <br />
                  <br />
                  <div><Path /></div>
                </div>
              )}

              {/* {showSecCmdLine && <Path />} */}
              
              {/* {showSecCmdLine && (
                <Path />
                // <Path />
                // <p className="absolute left 0">
                //   {" "}
                //   <span class="text-[#24F75A]">
                //     abhay@abhay-WebDev:
                //   </span> ~$ <span></span>
                //   <span className="">
                //     <input
                //       ref={lsInputRef}
                //       value={lsInput}
                //       onChange={(e) => setLsInput(e.target.value)}
                //       onKeyDown={handleKeyDown}
                //       className="blinking-cursor bg-transparent border-none focus:outline-none"
                //     />
                //   </span>
                // </p>
              )}
              <br></br> */}
              {/* {lsInputToggle && (
                <>
                  <p className="absolute left 0">
                    <span className="mr-8">experience.txt </span>
                    <span className="mr-8">skills.txt </span>
                    <span className="mr-8"> projects.txt </span>
                    <span className="mr-8">contact.txt </span>
                  </p>{" "}
                  <br></br>
                  <Command />
                  {handleCommandComponent}
                </>
              )} */}
              {/* {showThirdCmdLine && (
                <p className="absolute left 0">
                  {" "}
                  <span class="text-[#24F75A]">
                    abhay@abhay-WebDev:
                  </span> ~$ <span></span>
                  <span className="">
                    <input
                      ref={cdInputRef}
                      value={cdInput}
                      onChange={(e) => setCdInput(e.target.value)}
                      // onKeyDown={handleKeyDownCd}
                      className="blinking-cursor bg-transparent border-none focus:outline-none"
                    />
                  </span>
                </p>
              )}
              <br></br>
              <br></br>
              {cdInputToggle && (
                <>
                  <p className="absolute left 0">
                    <div>{component()}</div>
                    {showFourthCmdLine && (
                      <p className="absolute left 0">
                        {" "}
                        <span class="text-[#24F75A]">
                          abhay@abhay-WebDev:
                        </span>{" "}
                        ~$ <span></span>
                        <span className="">
                          <input
                            ref={cdInput1Ref}
                            value={cdInput1}
                            onChange={(e) => setCdInput1(e.target.value)}
                            onKeyDown={handleKeyDownCd1}
                            className="blinking-cursor bg-transparent border-none focus:outline-none"
                          />
                        </span>
                      </p>
                    )}
                  </p>{" "}
                  <br></br>
                  
                </>
              )}
              */}

              {/* end of sudo commands */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
