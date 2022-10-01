import {
  benefitsData,
  howToBuyData,
  risksData,
  termsData,
} from './sectionsFillerData';
import MoreFromProject from './Subcomponents/MoreFromProject/MoreFromProject';
import QASection from './Subcomponents/QASection';
import SocialLinksBox from './Subcomponents/SocialLinksBox';

function MoreInfo() {
  return (
    <>
      <QASection data={benefitsData} />
      <QASection data={termsData} />
      <QASection data={risksData} />
      <QASection img="nil" data={howToBuyData} />
      <SocialLinksBox />
      <div className="h-[1px] mt-[69px] mb-[80px] bg-gradient-to-r from-transparent via-white to-transparent" />
      <MoreFromProject />
      <div className="text-center mt-[63px] mb-[105px]">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className="rounded-[27px] border-white border-[1px] font-visby-500 uppercase text-[12px] leading-[12px] tracking-[1px] px-[55px] py-[21px]"
        >
          View Project
        </a>
      </div>
    </>
  );
}

export default MoreInfo;
