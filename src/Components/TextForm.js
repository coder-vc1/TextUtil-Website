

// --------------[ Learn how to Handle Event ] & [ How to Set State ] -----------------

import React , {useState} from 'react'
export default function TextForm(props) {

    const handleUpClick = () => {
       // console.log("UpplerCase was clicked" + text);
        let newText = text.toUpperCase();

        setText(newText);       
    }

    const handleLowClick = () => {
        // console.log("UpplerCase was clicked" + text);
        let newText = text.toLowerCase();
 
        setText(newText);       
     }
     const handleClearClick = () => {
        // console.log("UpplerCase was clicked" + text);
        let newText = '';
 
        setText(newText);       
     }

    //  const speak = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    //   }
      
   const handleOnChange = (event) => {
      //console.log("On Change");
      setText(event.target.value);
   }

   //const [text, setText] = useState("Enter text here"); // instead of "Enter text here" , using placeholder
   const [text, setText] = useState(""); // here text is a variable/ state

   // text = "new text" // Wrong way to change the state
   // setText("new Text") // Correct way to change the state

  return (
    <>
    <div className='container'>
        <div className="mb-3">
            
            <h1>{props.heading}</h1>
            
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="8"></textarea>
        </div>

        <button className='btn btn-success' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-info mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-warning mx-2' onClick={handleClearClick}>Clear</button>
        {/* <button className="btn btn-warning mx-2" onClick={speak}>Speak</button> */}
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length} Words and {text.length} characters</b> </p>
        <p>{0.008 * text.split("").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    



    </>
  )
}
