import './WhyUs.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WhyUs = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:'.whyus',
          start: 'top top',
          scrub: 2,
          // pin: true,
          
        },
      })

      // APPEARING TITLE
      gsap.from('.whyus__letter', { 
        scrollTrigger: {
          trigger: '.whyus',
          start: 'top top',
          pin: true,
          // end: 'top bottom',
          // scrub: 3,
          // markers: true,
          // toggleActions: "restart none none reset"
        },
        y: '100%', 
        stagger: 0.05, 
        duration: 1
      });

      // TRACK HORIZONTAL MOVEMENT
      tl.to('.whyus__track', {
        x: '-36%',
        duration: 10,
        pin: true,
      });

      // TRACK GROWING CIRCLES
      gsap.from('.whyus__image-wrapper', {
        scrollTrigger:{
          trigger: '.whyus',
          start: 'top top',
          // end: 'bottom top',
          scrub: 1,
          
        },
        width: '0%',
        height: '0%',
        duration: 3,
        stagger: 2,
      })
        
            
      }
  );

  return (
    <section className='whyus' ref={containerRef}>
      <h2 className ='whyus__title'>
        <p className='whyus__letter'>w</p>
        <p className='whyus__letter'>h</p>
        <p className='whyus__letter'>y</p>
        <p className='whyus__letter'> </p>
        <p className='whyus__letter' style={{color: 'darkslategray'}}>u</p>
        <p className='whyus__letter' style={{color: 'darkslategray'}}>s</p>
      </h2> 
      <div className='whyus__track' ref={trackRef}>
        <div className='whyus__wrapper'>
          <div className='whyus__image-wrapper' id='one'>
            <img src="https://images.unsplash.com/photo-1494512163437-5d01c88c0e5a?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='whyus__text-wrapper'>
              <h3>FOR BUYERS</h3>
              <p>Guidance through the new buyer regulations and compensation agreements</p>
            </div>
          </div>
        </div>
        <div className='whyus__wrapper'>
          <div className='whyus__image-wrapper'>
            <img src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='whyus__text-wrapper'>
              <h3>FOR SELLERS</h3>
              <p>Marketing strategies and compensation transparency.</p>
            </div>
          </div>
        </div>
        <div className='whyus__wrapper'>
          <div className='whyus__image-wrapper'>
            <img src="https://images.unsplash.com/photo-1525969078312-6b67ed648b39?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='whyus__text-wrapper'>
              <h3>EXPERTISE & INTEGRITY</h3>
              <p>Veteran-owned, focused on excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
