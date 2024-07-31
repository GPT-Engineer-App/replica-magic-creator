// Update this page (the content is just a fallback if you fail to update the page)

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#87CEEB]">
      <div className="w-[800px] h-[600px] bg-[#87CEEB] border-4 border-gray-700 relative p-4">
        <h1 className="text-4xl font-bold mb-4 text-black">Homer's Web Page</h1>
        <div className="absolute top-20 left-10">
          <img src="/placeholder.svg" alt="Jesus" className="w-32 h-48 object-cover" />
        </div>
        {['top-8 right-8', 'bottom-8 left-8', 'top-8 left-1/2', 'bottom-8 right-8'].map((position, index) => (
          <motion.div
            key={index}
            className={`absolute ${position}`}
            animate={{ y: isAnimating ? -10 : 0 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
          >
            <img src="/placeholder.svg" alt="Alarm clock" className="w-12 h-12 object-cover" />
          </motion.div>
        ))}
        {['top-1/4 left-1/4', 'bottom-1/4 right-1/4', 'top-3/4 left-3/4', 'bottom-1/2 left-3/4'].map((position, index) => (
          <div key={index} className={`absolute ${position}`}>
            <img src="/placeholder.svg" alt="Toaster" className="w-16 h-12 object-cover" />
          </div>
        ))}
        {['top-1/3 right-1/3', 'bottom-1/3 left-1/3'].map((position, index) => (
          <div key={index} className={`absolute ${position}`}>
            <img src="/placeholder.svg" alt="Mouth" className="w-24 h-16 object-cover" />
          </div>
        ))}
        {['top-1/2 right-1/4', 'bottom-1/4 left-1/2'].map((position, index) => (
          <div key={index} className={`absolute ${position}`}>
            <img src="/placeholder.svg" alt="Worm" className="w-20 h-8 object-cover" />
          </div>
        ))}
        {['top-3/4 right-1/4', 'bottom-1/2 left-1/4'].map((position, index) => (
          <div key={index} className={`absolute ${position}`}>
            <img src="/placeholder.svg" alt="Bell" className="w-10 h-12 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
