import InvestmentOverView from './components/InvestmentOverview/InvestmentOverView';
import Navbar from './components/nav/Navbar';
/* We import the data once, in the root level component, which mimics fetching data from remote using api.
Then we pass the data as context, for subcomponents of the page to use */
import DATA from './NFTDATA.json';
import InvestmentPageContextProvider from './utils/Contexts/InvestmentPageContext';

/* It appears that the nft.json contains a project details and a nftDetails object. 
Since the figma screen previous to the investment details screen is labelled "Project Details", 
we assume that the "Investment Details" data is contained in nftDetails (since an nft is commonly
seen as a type of investment) */
const investmentData = DATA.nftDetails;

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <InvestmentPageContextProvider pageData={investmentData}>
        <div className="pr-[148px] pl-[93px]">
          <InvestmentOverView data={investmentData} />
        </div>
      </InvestmentPageContextProvider>
    </div>
  );
}

export default App;
