// ThemePage.jsx
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the styles
import Navbar from '../NavComponents/Navbar'; // Adjust the path accordingly
import image1 from '../bd.jpg'; // Adjust the paths for your images
import image2 from '../wed.jpg';
import image3 from '../farewell.jpg';
import './theme.css';

const ThemePage = () => {
  const images = [
    {
      original: image1,
      description: 'Enjoy a variety of entertaining activities and games suitable for all ages.',
      price:'Budget: 10000',
      className: 'custom-image-class-1', // Add a custom className for Image 1
    },
    {
      original: image2,
      description: 'Post-ceremony celebration with a sumptuous feast featuring culinary delights to satisfy every palate.',
      price:'Budget : 20000',
      className: 'custom-image-class-2', // Add a custom className for Image 2
    },
    {
      original: image3,
      description: 'Savor a delightful culinary experience with a carefully curated menu that reflects the diverse taste buds of our esteemed guest of honor.',
      price:'Budget: 30000',
      className: 'custom-image-class-3', // Add a custom className for Image 3
    },
    // Add more images as needed
  ];

  return (
    <div className='themebg'>
      <Navbar />
      <h1 className='themeh1'>BRIGHTEN THE PARTY WITH UNIQUE THEMES</h1>
      <div className="theme-container">

        <Gallery items={images} className='gelleryitems'/>
      </div>
    </div>
  );
};

export default ThemePage;
