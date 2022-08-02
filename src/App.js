import { React, Component } from "react";

import './App.css';
import { BsCartFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { TextField } from "@mui/material";
import { border, color } from "@mui/system";

class Counter extends Component {
   styles = theme => ({
    multilineColor:{
        
        
    }
  });

}
function App() {
  return (
    <div className='parent'>
    <div className='header'>
      <div  className='logodiv'>
      <img className='logo' src='./gblogo.png' alt='Logo'></img>
      </div>
      <div className='menubar'>
          <ul>
            <li><a >Home</a></li>
            <li><a >Explore</a></li>
            <li><a >Contact</a></li>
            <li><a >About Us</a></li>
          </ul>
      </div>
      </div>
      <div className='rightmenu'>
        <div className='profile' >
      <label htmlFor='cartlogo1'>My profile</label>
      <CgProfile className='cartlogo1'/> 
      </div>
      <div className='cart'>
      <label htmlFor='cartlogo2'>Cart</label>
      <BsCartFill className='cartlogo2'/>
      </div>
      </div>


      <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          className="textfield"
          sx={{ input: { color: 'rgb(129,78,163)'} }}
        />
      </div>
    </div>

      
    </div>
   
    
    
  );
}

export default App;
