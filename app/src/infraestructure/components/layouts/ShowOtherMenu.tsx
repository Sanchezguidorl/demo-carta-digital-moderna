import React from 'react';

function ShowOtherMenu() {
  return (
    <a 
      href="/carta-cafeteria.webp" 
      target="_blank" 
      rel="noopener noreferrer" 
      className='aspect-square w-40 text-sm bg-green-900 text-white rounded-tr-full absolute bottom-0 left-0 flex justify-center items-end font-light p-10 pl-6 border-t border-r hover:cursor-pointer hover:brightness-150 transition-all duration-200'
    >
      <p className="text-center text-shadow">Mirá otro estilo</p>
    </a>
  );
}

export default ShowOtherMenu;
