import { useCallback, useState } from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/icons/minus.svg';

function Accordion({ title, content }) {
  /* state */
  const [open, setOpen] = useState(false);

  /* callbacks */
  const handleClick = useCallback(() => {
    setOpen((old) => !old);
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="font-visby-600 text-[20px] leading-[140%] w-[70%]">
          {title}
        </div>
        <button
          type="button"
          className="ml-auto mr-[33.77px] h-6"
          onClick={handleClick}
        >
          {open ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
      <div
        className={`transition-[height] font-visby-500 text-[18px] leading-[144%] opacity-70 w-[70%] ${
          !open ? 'h-0 overflow-hidden' : 'mt-[12px]'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default Accordion;
