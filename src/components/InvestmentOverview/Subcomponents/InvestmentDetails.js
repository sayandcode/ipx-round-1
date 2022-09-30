import FollowDetails from './FollowDetails';
import PurchaseDetails from './PurchaseDetails';

function InvestmentDetails() {
  return (
    <div className="w-full flex flex-col">
      <div className="lowercase text-[12px] font-visby-500 leading-[12px] opacity-50 tracking-[1px]">
        investment option
      </div>
      <div className="uppercase font-zuume-700 text-[46px] leading-[81px] tracking-[6.78641px]">
        Common share
      </div>
      <FollowDetails />
      <PurchaseDetails />
    </div>
  );
}

export default InvestmentDetails;
