import React from 'react';

import './Work.css'
import upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import facebook from '../../img/Facebook.png'
import shopify from '../../img/Shopify.png'
import { motion } from 'framer-motion';
const Work = () => {
    return (
        <div className='works'>
               {/* left side */}
       <div className="awesome">
    <span> Works For all these</span>
    <span>Brand clicent</span> <br />
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat <br />  perferendis blanditiis temporibus magni corporis voluptate? <br />  perferendis blanditiis temporibus magni corporis voluptate?<br />  perferendis blanditiis temporibus magni corporis voluptate?</span>
    <button className='s-button button'>Hire ME</button>
       </div>

                      {/* right side */}

          <div className="w-right">
            <motion.div
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            
            viewport={{margin:'-40px'}}
            transition={{duration:3.6,type:'spring'}}
            
            className="w-mainCircle">
 
           <div className="w-secCircle">
                <img src={upwork} alt="" />
                 </div>
                 <div className="w-secCircle">
                <img src={facebook} alt="" />
                 </div>
                 <div className="w-secCircle">
                <img src={shopify} alt="" />
                 </div>
                 <div className="w-secCircle">
                <img src={amazon} alt="" />
                 </div>
                 <div className="w-secCircle">
                <img src={fiver} alt="" />
                 </div>
                 {/* backgroun circle */}
  <div className="w-backCircle blueCircle"></div>
  <div className="w-backCircle yellowCircle"></div>

            </motion.div>
            
            
            </div>                  




        </div>
    );
};

export default Work;