import React, { useContext, useEffect, useState } from "react";
import Navbar from "./menu/Navbar";
import Content from "./content/Content";
import './content/content.scss'


const Home: React.FC=()=>{
 
    
    return(
      < >
    
        <div style={{height:'100vh', overflow:'hidden', width:'100%',}} >
            <Navbar />
    
        <div className="scrollBar" >
          <div style={{display:'flex', justifyContent:'center'}}>
            <Content />
          </div>
            
        </div>
        </div>

        
      </>
     
    )
}
export default Home