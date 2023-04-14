import './App.css';
import Navbar from './Components/Navbar';
//import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
 <>
            {/* -----------------NavBar Content using Props-------------------------------- */}

                      <Navbar setTitle= 'React_vc' setAbout = 'About'/>
                      {/* <Navbar /> */}
                      {/* <Navbar setTitle='React_vc'/> */}
          
          

          {/* -----------------------TextForm Content Start-------------------------------- */}
                      {/* <div className="container my-3 ">
                         
                         // { <TextForm/> }
                          <TextForm heading = "Enter the text to analyze below"/>

                      </div> */}
                      
        {/* ------------------------------About Component--------------------------------- */}

                      <div className="container my-3 ">
                         
                     <About/>
                     
                     </div>
                     
                      
          
  </>
  );
}

export default App;
