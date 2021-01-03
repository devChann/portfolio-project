import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Particles from 'react-particles-js';
import Navabar from './components/navbar';
import Header from './components/Header';


function App() {
  return (
    <>
    <Particles className= "particle-canvas"
      params ={{
        particles:{
          value:30,
          density:{
            enable:true,
            value_area:900
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }
      }}
    />
    <Navabar />
    <Header/>
    </>
  );
}

export default App;
