import { createContext, useMemo } from 'react';

const InvestmentPageContext = createContext({ pageData: null });

function InvestmentPageContextProvider({ children, pageData }) {
  const contextVal = useMemo(() => ({ pageData }), []);
  return (
    <InvestmentPageContext.Provider value={contextVal}>
      {children}
    </InvestmentPageContext.Provider>
  );
}

export default InvestmentPageContextProvider;
export { InvestmentPageContext };
