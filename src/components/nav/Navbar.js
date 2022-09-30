import Banner from './Banner';
import { ReactComponent as IpxLogo } from '../../icons/ipxLogo.svg';
import { ReactComponent as AccountIcon } from '../../icons/account.svg';

function Navbar() {
  return (
    <div>
      <Banner>Please link your metamask wallet</Banner>
      <div className="flex justify-between pl-[99px] pr-[118px] mt-[69px]">
        <IpxLogo width="50px" />
        <AccountIcon width="50px" />
      </div>
    </div>
  );
}

export default Navbar;
