import { ReactComponent as ChevronIcon } from '../../../../assets/icons/chevron.svg';
import ITEM_DATA_FILLER from './ITEM_DATA_FILLER';
import CarouselButton from './Subcomponents/CarouselButton';
import CarouselItem from './Subcomponents/CarouselItem';

function MoreFromProject() {
  return (
    <div>
      <div className="flex flex-row items-center gap-[52.8px]">
        <div className="font-visby-600 text-[28px] leading-[44px]">
          More from this project
        </div>
        <div className="flex flex-row gap-[9.34px]">
          <CarouselButton Icon={<ChevronIcon transform="rotate(180)" />} />
          <CarouselButton Icon={<ChevronIcon />} />
        </div>
        <div />
      </div>
      <div className="flex flex-row gap-[28.2px]">
        {ITEM_DATA_FILLER.map((item) => (
          <CarouselItem data={item} />
        ))}
      </div>
    </div>
  );
}

export default MoreFromProject;
