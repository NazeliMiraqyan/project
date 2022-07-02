import React, { useContext, useEffect, useState } from "react";
import Navbar from "./menu/Navbar";
import Content from "./content/Content";
import './content/content.scss'
import { useSelector } from 'react-redux';
import { IItemProps, InitialState } from "../redux/types";

import { useRef } from 'react';


const Home: React.FC=()=>{
 
    
    return(
      <>
    
        <div style={{height:'100vh', overflow:'hidden'}} >
            <Navbar />
            
              <div className="scrollBar"  >
                  <Content />
              </div>
             
        
        </div>

        
      </>
     
    )
}
export default Home