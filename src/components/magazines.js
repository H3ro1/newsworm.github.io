import React, { useEffect } from 'react'
import vogue1i from '../images/vogue1.jpg'
import vogue2i from '../images/vogue2.jpg'
import vogue3i from '../images/vogue3.jpg'
import vogue4i from '../images/vogue4.jpg'
import vogue5i from '../images/vogue5.jpg'
import vogue6i from '../images/vogue6.jpg'
import { Link } from "gatsby"

import{
    child,
   
    magazinewrapper,
} from '../style/module.magazines.css'

const Magazines = () => {

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section[id]');
          let scrollPosition = window.scrollY + window.innerHeight / 2;
    
          sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (top <= scrollPosition && top + height > scrollPosition) {
              // Remove existing viewing-section classes
              document.body.classList.forEach(className => {
                if (className.startsWith('viewing-section')) {
                  document.body.classList.remove(className);
                }
              });
              // Add the current viewing-section class
              document.body.classList.add(`viewing-section${id.substring(1)}`); // Assuming IDs like 'm1', 'm2', etc.
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      
    return(
    <div className={magazinewrapper}>
        <section className={child} id="m1"><img src={vogue1i}/><h1>Vogue #1</h1></section>
        <section className={child} id="m2"><img src={vogue2i}/><h1>Vogue #2</h1></section>
        <section className={child} id="m3"><img src={vogue3i}/><h1>Vogue #3</h1></section>
        <section className={child} id="m4"><img src={vogue4i}/><h1>Vogue #4</h1></section>
        <section className={child} id="m5"><img src={vogue5i}/><h1>Vogue #5</h1></section>
        <section className={child} id="m6"><img src={vogue6i}/><h1>Vogue #6</h1></section>
    </div>
    )
}

export default Magazines