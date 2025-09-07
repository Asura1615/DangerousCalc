"use client"

import React, {useState} from "react";
import "./calculator.css"

function Calcbuttons({onclick}){
  const mybuttons=[
    ["AC", "/", "*","-"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "="],
    ["1", "2", "3", "."],
    ["0", "<-"]
  ];

  return (
    <div className="Calc-buttons">
    {
      mybuttons.flat().map((btn, posn) =>(
        //console.log(btn);
        <button key={posn} onClick={() => onclick(btn)}>
          {btn}
        </button>
      )
    )
  }
    </div>
  );

}

function Calculator(){
  const [display, setdisplay] = useState("");
  const [showbutton, setshowbuttons] = useState(false);

  const buttonClick= (e) => {
    if (e === "AC"){
      setdisplay("0")
    }else if(e === "<-"){
      setdisplay((current)=> 
        current.length - 1 <= 0 ? "0" : current.substring(0, current.length - 1) === "" ? 0 : current.substring(0, current.length - 1));
    }else if(e === "="){
      setdisplay(eval(display).toString());
    }else{
      setdisplay((prev) =>
        prev === "0" && !isNaN(e) ? e : prev + e);
    }
  }
  
  const clicks = (e) => {
  //  console.log(display);
    if (e.key === "Enter"){
      setdisplay(eval(display).toString());
    }
  };
  
  return (<div>
  
  <div className="Calc-display">
    <input type="text"
     placeholder="Press Enter to evaluate"
     id="calcdisplay"
     value={display}
     onChange={(e) => setdisplay(e.target.value)}
     onKeyDown={clicks}/>
     <br/>
  </div>
  
  <div  className="Show-button">
    <input type="checkbox" name="mycheckbox" onChange={(e) => {setshowbuttons(e.target.checked)}}/>Show buttons<br/>
  </div>

  <div>
    {showbutton ? <Calcbuttons onclick={buttonClick}/>: null}
  </div>

  </div>);
}

export default function Page(){
  return(
    <div className="app">
      <h1 className="Main-header">Calculator</h1>
      <Calculator/>
    </div>
  )
}
