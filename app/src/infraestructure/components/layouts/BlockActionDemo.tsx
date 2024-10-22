import React, { useState, useEffect } from "react";

function BlockActionDemo() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3500); // 2 segundos
  };

  return (
    <div onClick={handleClick}  className={`absolute z-30 w-full h-full justify-center flex items-center bg-black bg-opacity-70 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>

        <p className="text-xl text-red-300 font-bold">
          Esta función no está permitida en esta demo
        </p>
    </div>
  );
}

export default BlockActionDemo;
