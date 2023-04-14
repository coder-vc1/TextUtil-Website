

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

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        
    }
      
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
    
     <div className="container">
      <table className='table my-3 mx-2' border="1px" width="100%" bgcolor='gray' font-style="Times New Roman">

         <tr>
            
            <td>
                <div className='container'>
                    <div className="mb-3">
                        
                        <h1>{props.heading}</h1>
                        
                        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="8"></textarea>
                    </div>

                </div>
            </td>
            
            <td>
                    <div className="container my-3">
                        <h2>Your text summary</h2>
                        <p><b>{text.split(" ").length} Words and {text.length} characters</b> </p>
                        <p>{0.008 * text.split("").length} Minutes read</p>

                        {/* <h2>Preview</h2>
                        <p>{text}</p> */}
                    </div>
             </td>

            </tr>
        </table>

       
        <div className="dropdown mx-3">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Actions
            </button>
            <ul className="dropdown-menu">

                <li><button className='btn btn-success my-1' onClick={handleUpClick}>Convert to UpperCase</button></li>
                <li><button className='btn btn-info my-1' onClick={handleLowClick}>Convert to LowerCase</button></li>
                <li><button className="btn btn-primary my-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button></li>
                <li><button className='btn btn-warning my-1' onClick={handleClearClick}>Clear</button></li>
            </ul>
        </div>

    </div>
           
    </>
  )
}
