import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "../terminal/terminal.css";

export default function Terminal() {
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
  const [cdInputToggle, setCdInputToggle] = useState("")
  const cdInputRef = useRef(null);
  const pages = ["experience", "skills", "projects", "contact"];

  function handleKeyDown(e) {
    if (lsInput === "ls") {
      if (e.key === "Enter") {
        setLsInputToggle(true);
      }
    }
  }

  function handleKeyDownCd(e){
    for(let p in pages){
      if(cdInput === `cd ${pages[p].txt}`){
        if(e.key === "Enter"){
          setCdInputToggle(true)
        }
      }
    }
  }

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
    if (lsInput === "ls" && lsInputToggle) {
      console.log(lsInput);
      const timer = setTimeout(() => {
        setlsPagesToggle(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [lsInput, lsInputToggle]);

  useEffect(() => {
    if(cdInputToggle){
      const timer = setTimeout(() => {
        setCdInputToggle(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [cdInputToggle])

  useEffect(() => {
    if (showSecCmdLine && lsInputRef.current) {
      lsInputRef.current.focus();
      lsInputRef.current.select();
    }
  }, [showSecCmdLine]);

  useEffect(() => {
    if(showSecCmdLine && cdInputRef.current){
      cdInputRef.current.focus();
      cdInputRef.current.select();
    }
  }, [showSecCmdLine])


  return (
    <div>
      <div className="relative">
        <div className="absolute left 0 font-ubuntu text-white text-2xl">
          <p>
            To run command as administrator (user: 'root'), use "sudo command".
            See man sudo root for detail.
          </p>

          <p className="absolute left 0">
            {" "}
            <span class="text-[#24F75A]">abhay@abhay-WebDev:</span> ~${" "}
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
          <br></br>
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
                <>
                  <p className="absolute left 0">
                    <>You might want to access the portfolio.</>
                    <br></br>
                    <>The following commands will help:</>
                    <br></br>
                    <>
                      <span></span>'ls' : to list all pages
                    </>
                    <br></br>
                    <>
                      <span></span>'cd' : to access each page
                    </>
                    <br></br>
                  </p>
                  <br></br>
                </>
              )}

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              {showSecCmdLine && (
                <p className="absolute left 0">
                  {" "}
                  <span class="text-[#24F75A]">
                    abhay@abhay-WebDev:
                  </span> ~$ <span></span>
                  <span className="">
                    <input
                      ref={lsInputRef}
                      value={lsInput}
                      onChange={(e) => setLsInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="blinking-cursor bg-transparent border-none focus:outline-none"
                    />
                  </span>
                </p>
              )}
              <br></br>
              {lsPagesToggle && (
                <>
                  <p className="absolute left 0">
                    <span className="mr-8">experience.txt </span>
                    <span className="mr-8">skills.txt </span>
                    <span className="mr-8"> projects.txt </span>
                    <span className="mr-8">contact.txt </span>
                  </p>{" "}
                  <br></br>
                </>
              )}
              {showThirdCmdLine && (
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
                  onKeyDown={handleKeyDownCd}
                  className="blinking-cursor bg-transparent border-none focus:outline-none"
                />
              </span>
              </p>
              )}
              <br></br>
              {cdInputToggle && (
                <p>

                </p>
              )}

              {/* end of sudo commands */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}