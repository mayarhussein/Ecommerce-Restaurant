import React, {useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtn, HeroItems} from './HeroElements'

const Hero = () => {

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen)
   }

    return(
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
              <HeroItems> 
                <HeroH1>The tastiest Pizza you'll ever eat</HeroH1>
                <HeroP>Ready in just 7 mins</HeroP>
                <HeroBtn>Place Order</HeroBtn>
              </HeroItems> 
            </HeroContent>
        </HeroContainer>
    )

}

export default Hero