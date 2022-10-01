import Button from '../../../../Button';

function CarouselItem({ data, className }) {
  return (
    <div className="bg-[#121212] rounded-[16.6285px] p-[14.55px] w-[286.92px]">
      <img alt="" src={data.imgUrl} className="w-[100%]" />
      <div className="flex flex-row my-[22.5px] gap-[16.63px]">
        <img
          alt=""
          src={data.ownerImgUrl}
          className="h-[33.26px] aspect-square"
        />
        <div className="">
          <div className="font-visby-600 text-[12.47px] leading-[19px]">
            {data.title}
          </div>
          <div className="font-visby-400 text-[11.08px] leading-[17px] text-[#ebebeb]">
            {data.ownerName}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between pl-[18px] pr-[9px] bg-[#080808] rounded-[11.0857px]">
        <div className="font-visby-500 text-[9.69px] leading-[14px]">
          Price - INR {data.price}
        </div>
        <Button className="text-[9.7px] leading-[14.25px] rounded-[75.44px]">
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default CarouselItem;
