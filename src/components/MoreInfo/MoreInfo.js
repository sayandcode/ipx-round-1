import {
  benefitsData,
  howToBuyData,
  risksData,
  termsData,
} from './sectionsFillerData';
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
    </>
  );
}

export default MoreInfo;
