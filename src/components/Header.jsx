import './Header.css'
import { useState, useEffect } from 'react'
import condominium from '../assets/realestate/condominium.jpg'
import singleFamilyHouse from '../assets/realestate/single-family-house.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {
  gsap.registerPlugin(useGSAP);

  const images = [
    {
      link: singleFamilyHouse,
      description: 'Single Family House Picture'
    },
    {
      link: condominium,
      description: 'Condominium Picture'
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const bars = document.querySelectorAll('.header__horizontal-bars')

  const transition = () => {
    for (let i = 0; i < bars.length; i++) {
      setTimeout(() => {
        bars[i].style.width = '100%';
        setTimeout(() => {
          bars[i].style.width = '0%';
        },800)
      }, 200 * i);
    }
  }
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      transition();
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      },800)
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className='header'>
      <div className='header__transition-wrapper'>
        <div className='header__horizontal-bars'></div>
        <div className='header__horizontal-bars'></div>
        <div className='header__horizontal-bars'></div>
      </div>
      <img src={images[currentImage].link} alt={images[currentImage].description} />
      <div className='header__type-wrapper'>
        <h1 className='header__title'>Your Trusted <br /> Tucson Real <br /> Estate Expert</h1>
        <p>Guiding buyers and sellers through every step with clarity and transparency</p>
      </div>
      <div className='header__navigation-wrapper'>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Header;
