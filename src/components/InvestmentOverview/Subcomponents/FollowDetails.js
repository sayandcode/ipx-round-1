import { useContext } from 'react';
import { ReactComponent as BookArtIcon } from '../../../assets/icons/BookArt.svg';
import { InvestmentPageContext } from '../../../utils/Contexts/InvestmentPageContext';

function FollowDetails() {
  const { pageData } = useContext(InvestmentPageContext);
  return (
    <div className="border-y-[1px] border-white/[0.2]">
      <div className="flex items-center h-[70px] w-[70%] justify-between">
        {[
          { heading: 'project', content: pageData.coverName },
          { heading: 'owned by', content: pageData.ownerName },
        ].map(({ heading, content }) => (
          <div key={heading}>
            <div className="lowercase text-[12px] font-visby-500 leading-[12px] opacity-50 tracking-[1px]">
              {heading}
            </div>
            <div className="text-[14px] font-visby-500 leading-[12px] tracking-[1px] mt-[9px]">
              {content}
            </div>
          </div>
        ))}
        <div className="flex flex-col">
          <button
            className="flex flex-row items-center gap-[13px] text-[14px] font-visby-500 leading-[12px] opacity-70 tracking-[1px]"
            type="button"
          >
            <BookArtIcon />
            Follow NFT
          </button>
        </div>
      </div>
    </div>
  );
}

export default FollowDetails;
