import { useContext } from 'react';
import { InvestmentPageContext } from '../../utils/Contexts/InvestmentPageContext';
import InvestmentDetails from './Subcomponents/InvestmentDetails';

function InvestmentOverView() {
  const { pageData } = useContext(InvestmentPageContext);
  return (
    <div className="flex gap-[65px]">
      <img
        src={pageData.coverFileUrl}
        alt={pageData.coverFileName}
        className="w-[534px] h-[704px] object-cover rounded-[13.56px]"
      />
      <InvestmentDetails />
    </div>
  );
}

export default InvestmentOverView;
