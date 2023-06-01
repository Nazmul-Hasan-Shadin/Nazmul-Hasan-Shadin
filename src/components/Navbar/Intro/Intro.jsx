import React  from 'react';
import { Link } from 'react-router-dom';
import "./Intro.css"
import Github from  '../../../img/github.png'
import Linkdin from  '../../../img/linkedin.png'
import Instagram from  '../../../img/instagram.png'
import Vector1 from '../../../img/Vector1.png'
import Vector2 from '../../../img/Vector2.png'
import boy from '../../../img/boy.png'
import thumup from '../../../img/thumbup.png'
import crown from '../../../img/crown.png'
import glassesimoji from '../../../img/glassesimoji.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {
  const transition = {duration:2, type: 'spring'}
    return (
        <div className='intro'>
       <div className="i-left">
  <div className="i-name">
    <span>Hi! I AM</span>
    <span>Shadin</span>
    <span>Fronted Developer With high level of expereince in web desinging and development .producting the quality</span>
  </div>
  <button className="button i-button">
    Hire Me
  </button>

<div className="i-icons">
   
 <a href="https://github.com/Nazmul-Hasan-Shadin">
 <img src={Github} alt="" />
  </a> 


    
    <img src={Linkdin} alt="" />
    <img src={Instagram} alt="" />
</div>


       </div>
    <div className="i-right">
     
     <img src={Vector1} alt="" />
     <img src={Vector2} alt="" />
     <img src={boy} alt="" />
     < motion.img
     initial={{left:'-36%'}}
     whileInView={{left:'-24%'}}
     transition={transition}
     
     src={glassesimoji} alt="" />

      < motion.div
       initial={{top:'-4%',left:'74%'}}
       whileInView={{left:'68%'}}
       transition={transition}
      style={{top:'-4%',left:'68%'}} >
    <FloatingDiv  image={crown} txt1='web' txt2='Developer'></FloatingDiv>
      
      </motion.div>


      <motion.div
      initial={{top:'18rem',left:'9rem'}}
      whileInView={{left:'0rem'}}
      transition={transition}
      
      
      style={{top:'18rem' ,left:'0rem'}}>

  <FloatingDiv image={thumup}  txt1='Best Design' text2='award'></FloatingDiv>

      </motion.div>
       </div>
        
        </div>
    );
};

export default Intro;