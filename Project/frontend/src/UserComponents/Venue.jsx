// Grid.jsx
import React, { useState } from 'react';
import './venue.css';
import Navbar from '../NavComponents/Navbar';
import bdImage from '../bd.jpg'; // Adjust the paths accordingly
import weddingImage from '../wed.jpg';
import farewellImage from '../farewell.jpg';
import cocktailImage from '../cocktail.jpg';

const Grid = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseMove = (e, itemId) => {
    if (hoveredItem === itemId) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (centerX - x) / centerX;
      const deltaY = (centerY - y) / centerY;

      setRotation({
        x: deltaY * 20, // Adjust the rotation sensitivity
        y: deltaX * 20,
      });
    }
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setRotation({ x: 0, y: 0 });
  };

  const items = [
    {
      id: 1,
      imageSrc: bdImage,
      description: 'Enjoy a variety of entertaining activities and games suitable for all ages.',
      price: '$50000',
    },
    {
      id: 2,
      imageSrc: weddingImage,
      description: 'Post-ceremony celebration with a sumptuous feast featuring culinary delights to satisfy every palate.',
      price: '$80000',
    },
    {
      id: 3,
      imageSrc: farewellImage,
      description: 'Savor a delightful culinary experience with a carefully curated menu that reflects the diverse taste buds of our esteemed guest of honor.',
      price: '$60000',
    },
    {
      id: 4,
      imageSrc: cocktailImage,
      description: 'Groove to the beats of a curated playlist, blending elegance and energy to keep the party alive.',
      price: '$70000',
    },
    {
      id: 5,
      imageSrc: bdImage,
      description: 'Enjoy a variety of entertaining activities and games suitable for all ages.',
      price: '$50000',
    },
    {
      id: 6,
      imageSrc: weddingImage,
      description: 'Post-ceremony celebration with a sumptuous feast featuring culinary delights to satisfy every palate.',
      price: '$80000',
    },
    {
      id: 7,
      imageSrc: farewellImage,
      description: 'Savor a delightful culinary experience with a carefully curated menu that reflects the diverse taste buds of our esteemed guest of honor.',
      price: '$60000',
    },
    {
      id: 8,
      imageSrc: cocktailImage,
      description: 'Groove to the beats of a curated playlist, blending elegance and energy to keep the party alive.',
      price: '$70000',
    },
    
  ];

  return (
    <body className='venuebg'>
    <div>
      <Navbar/>
      <div className="grid-container" onMouseLeave={handleMouseLeave}>
        {items.map((item) => (
          <div
            key={item.id}
            className="grid-item"
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseEnter(item.id)}
            style={{
              transform: `rotateX(${hoveredItem === item.id ? rotation.x : 0}deg) rotateY(${
                hoveredItem === item.id ? rotation.y : 0
              }deg)`,
            }}
          >
            <div className="top-info">
              <p className="pricegrid">{item.price}</p>
              
            </div>
            <img src={item.imageSrc} className="gridimg" alt={`Image ${item.id}`} />
            <p className="gridp">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default Grid;






// // Grid.jsx
// import React, { useState } from 'react';
// import './event.css';
// import Navbar from '../NavComponents/Navbar';
// import bdImage from '../bd.jpg'; // Adjust the paths accordingly
// import weddingImage from '../wed.jpg';
// import farewellImage from '../farewell.jpg';
// import cocktailImage from '../cocktail.jpg';

// const Grid = () => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleMouseMove = (e, itemId) => {
//     if (hoveredItem === itemId) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       const deltaX = (centerX - x) / centerX;
//       const deltaY = (centerY - y) / centerY;

//       setRotation({
//         x: deltaY * 20, // Adjust the rotation sensitivity
//         y: deltaX * 20,
//       });
//     }
//   };

//   const handleMouseEnter = (itemId) => {
//     setHoveredItem(itemId);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//     setRotation({ x: 0, y: 0 });
//   };

//   const items = [
//     {
//       id: 1,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 2,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 3,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 4,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     },
//     {
//       id: 5,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 6,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 7,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 8,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     },
//   ];

//   return (
//     <div>
//       <Navbar />
      // <div className="grid-container" onMouseLeave={handleMouseLeave}>
      //   {items.map((item) => (
//           <div
//             key={item.id}
//             className="grid-item"
//             onMouseMove={(e) => handleMouseMove(e, item.id)}
//             onMouseEnter={() => handleMouseEnter(item.id)}
//             onMouseLeave={() => handleMouseEnter(item.id)}
//             style={{
//               transform: `rotateX(${hoveredItem === item.id ? rotation.x : 0}deg) rotateY(${
//                 hoveredItem === item.id ? rotation.y : 0
//               }deg)`,
//             }}
//           >
//             <img src={item.imageSrc} className="gridimg" alt={`Image ${item.id}`} />
//             <p className="gridp">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Grid;








// // Grid.jsx
// import React from 'react';
// import './event.css';
// import Navbar from '../NavComponents/Navbar';
// import bdImage from './bd.jpg'; // Adjust the paths accordingly
// import weddingImage from '../wed.jpg';
// import farewellImage from '../farewell.jpg';
// import cocktailImage from '../cocktail.jpg';

// const Grid = () => {
//   const items = [
//     {
//       id: 1,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 2,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 3,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 4,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     },
//     {
//       id: 5,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 6,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 7,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 8,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     }
//   ];

//   return (
//     <div>
//     <Navbar/>
//     <div className="grid-container">
   
//       {items.map((item) => (
//         <div key={item.id} className="grid-item">
//           <img src={item.imageSrc} className="gridimg" alt={`Image ${item.id}`} />
//           <p className='gridp'>{item.description}</p>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };
// export default Grid;









// // Grid.jsx
// import React from 'react';
// import './event.css';
// import Navbar from '../NavComponents/Navbar';
// import bdImage from './bd.jpg'; // Adjust the paths accordingly
// import weddingImage from '../wed.jpg';
// import farewellImage from '../farewell.jpg';
// import cocktailImage from '../cocktail.jpg';

// const Grid = () => {
//   const items = [
//     {
//       id: 1,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 2,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 3,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 4,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     },
//     {
//       id: 5,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 6,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 7,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 8,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     }
//   ];

//   return (
//     <div>
//     <Navbar/>
//     <div className="grid-container">
   
//       {items.map((item) => (
//         <div key={item.id} className="grid-item">
//           <img src={item.imageSrc} className="gridimg" alt={`Image ${item.id}`} />
//           <p className='gridp'>{item.description}</p>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };
// export default Grid;









// // Grid.jsx
// import React from 'react';
// import './event.css';
// import Navbar from '../NavComponents/Navbar';
// import bdImage from './bd.jpg'; // Adjust the paths accordingly
// import weddingImage from '../wed.jpg';
// import farewellImage from '../farewell.jpg';
// import cocktailImage from '../cocktail.jpg';

// const Grid = () => {
//   const items = [
//     {
//       id: 1,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 2,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 3,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 4,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     },
//     {
//       id: 5,
//       imageSrc: bdImage,
//       description: 'Description for Image 1',
//     },
//     {
//       id: 6,
//       imageSrc: weddingImage,
//       description: 'Description for Image 2',
//     },
//     {
//       id: 7,
//       imageSrc: farewellImage,
//       description: 'Description for Image 3',
//     },
//     {
//       id: 8,
//       imageSrc: cocktailImage,
//       description: 'Description for Image 4',
//     }
//   ];

//   return (
//     <div>
//     <Navbar/>
//     <div className="grid-container">
   
//       {items.map((item) => (
//         <div key={item.id} className="grid-item">
//           <img src={item.imageSrc} className="gridimg" alt={`Image ${item.id}`} />
//           <p className='gridp'>{item.description}</p>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Grid;
