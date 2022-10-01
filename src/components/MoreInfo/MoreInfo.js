import {
  benefitsData,
  howToBuyData,
  risksData,
  termsData,
} from './sectionsFillerData';
import QASection from './Subcomponents/QASection';

function MoreInfo() {
  return (
    <>
      <QASection data={benefitsData} />
      <QASection data={termsData} />
      <QASection data={risksData} />
      <QASection img="nil" data={howToBuyData} />
    </>
  );
}

export default MoreInfo;
