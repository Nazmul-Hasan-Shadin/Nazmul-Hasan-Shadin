import React from 'react';


import './Services.css'
import HeartEmoji from "../../src/img/heartemoji.png"
import GlassesEmogi from "../../src/img/glassesimoji.png"
import humblEmoji from "../../src/img/humble.png"
import Card from './Card/Card';
import { motion } from 'framer-motion';
const Services = () => {
    const transition={
        duration:1 ,type: 'spring'
    }
    return (
        <div className='services'>



       {/* left side */}
       <div className="awesome">
    <span> My Awesome</span>
    <span>Services</span> <br />
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat <br /> perferendis blanditiis temporibus magni corporis voluptate?</span>
    <button className='s-button button'>Download Cv</button>
       </div>

       {/* right side */}
         <div className="cards" style={{left:'14rem'}}>
            <motion.div
            initial={{left:'25%'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            
            
            >
            <Card
            emoji={HeartEmoji}
            heading={'Design' }
            detail={"Figma,Photosho,adobe ,Sdid dj"}
            
            />
            </motion.div>
            {/*  2nd card */}
            <div style={{top:'14rem',left:'-17rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Developer' }
            detail={"Html,css, js,react"}
            
            />
            </div>
                         {/* 3rd card */}

     <div style={{top:'18rem',left:'-1rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Ul/UX' }
            detail={"Html,css, js,react"}
            
            />
            </div>


         </div>

        </div>
    );
};

export default Services;