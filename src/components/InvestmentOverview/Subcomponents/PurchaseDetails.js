import { useContext, useMemo } from 'react';
import { format } from 'date-fns';
import { InvestmentPageContext } from '../../../utils/Contexts/InvestmentPageContext';
import Box from '../../Box';
import paypalImg from '../../../assets/imgs/PaypalLogo.png';
import stripeImg from '../../../assets/imgs/StripeLogo.png';
import Button from '../../Button';
import PaymentOption from './PaymentOption';

function PurchaseDetails() {
  const { pageData } = useContext(InvestmentPageContext);
  const nftData = pageData.projectIndividualNfts[1];
  const expiryDate = nftData.nftAuction.expiry;
  const formattedExpiryDate = useMemo(
    () =>
      `${format(new Date(expiryDate), 'do MMMM, y ')} at ${format(
        new Date(expiryDate),
        'h:ma, O'
      )}`,
    [pageData]
  );
  return (
    <Box
      title={
        <div className="font-visby-500 text-[18px] leading-[12px] tracking-[1px]">
          Sale ends on <span>{formattedExpiryDate}</span>
        </div>
      }
      className="mt-auto"
    >
      <div className="grid grid-cols-2 mb-[59px]">
        {[
          {
            heading: 'current price',
            value: `$${nftData.nftAuction.lastBidPrice}`,
          },
          { heading: 'units available', value: nftData.qty },
        ].map(({ heading, value }) => (
          <div key={heading}>
            <GreyText>{heading}</GreyText>
            <div className="font-zuume-700 text-[48px] leading-[52px]">
              {value}
            </div>
          </div>
        ))}
      </div>
      <GreyText className="mb-[14px]">select how you want to pay</GreyText>
      <div className="flex items-center gap-[55px] mb-[74px]">
        <PaymentOption src={stripeImg} alt="Stripe" />
        <PaymentOption src={paypalImg} alt="PayPal" selected />
      </div>
      <label htmlFor="terms">
        <input id="terms" type="checkbox" />
        <GreyText className="inline ml-[10px]">
          I understand the benefits, terms and risks in buying this NFT
        </GreyText>
      </label>
      <div className="mt-[24px] flex flex-row gap-[20px]">
        <Button className="h-[56px] w-[174px]" variant="filled">
          Buy Now
        </Button>
        <Button className="h-[56px] w-[174px]" variant="contained">
          Request Callback
        </Button>
      </div>
    </Box>
  );
}

function GreyText({ children, className }) {
  return (
    <div
      className={`font-visby-500 text-[14px] leading-[12px] tracking-[1px] opacity-70 ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}

export default PurchaseDetails;
