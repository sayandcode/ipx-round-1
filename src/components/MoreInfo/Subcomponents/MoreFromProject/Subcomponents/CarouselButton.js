import { cloneElement } from 'react';

function CarouselButton({ Icon }) {
  return (
    <button
      type="button"
      className="bg-[#272C33] h-[27px] w-[27px] rounded-full flex items-center justify-center"
    >
      {cloneElement(Icon, { height: '60%', width: '60%' })}
    </button>
  );
}

export default CarouselButton;
