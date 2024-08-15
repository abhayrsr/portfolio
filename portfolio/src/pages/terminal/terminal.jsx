import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideCursor(true);
    }, 5650);

    return () => clearTimeout(timer);
  }, [showNextLine])

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
    const timer = setTimeout(() => {
      setShowSecCmdLine(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [showNextLine]);

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
            <span
              className={hideCursor ? "cursor-hidden" : ""}
            >
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
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
