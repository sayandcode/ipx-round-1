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
    </>
  );
}

export default MoreInfo;
