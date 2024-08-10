import React from 'react';
//import { useEffect, useState } from "react";
import '../../styles/Collapes.css'
import AboutBanner from '../../components/AboutBanner';
import Collapse from "../../components/Collapse";
import aboutArray from "../../datas/collapes.json"; 


function Propos() {
    
    return (
        <React.Fragment>

         <AboutBanner /> 
         {aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
        
         </React.Fragment>
    )
}

export default Propos