import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
import InvestmentPage from './pages/InvestmentPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pr-[148px] pl-[93px]">
        {/* we could put a router here */}
        <InvestmentPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
