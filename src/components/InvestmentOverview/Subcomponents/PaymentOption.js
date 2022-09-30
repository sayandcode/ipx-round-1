import checkImg from '../../../assets/imgs/check.png';

function PaymentOption({ src, alt, selected }) {
  return (
    <div
      className={`relative h-[48px] flex items-center px-[24px] rounded-[10px] ${
        selected &&
        'bg-[rgba(255,31,31,0.09)] border-b-ipxBlue/50 border-l-ipxBlue/50 border-t-ipxRed/50 border-r-ipxRed/50 border-[0.76px]'
      }`}
    >
      {selected && (
        <div className="top-0 right-0 absolute translate-x-1/2 -translate-y-1/2 rounded-full h-[24px] w-[24px] flex items-center justify-center bg-gradient-to-tr from-ipxBlue to-ipxPink">
          <img src={checkImg} alt="" />
        </div>
      )}
      <img src={src} alt={alt} />
    </div>
  );
}

export default PaymentOption;
