import Box from '../../Box';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/socials/facebook.svg';
import { ReactComponent as DiscordIcon } from '../../../assets/icons/socials/discord.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/socials/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/socials/twitter.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';

function SocialLinksBox() {
  return (
    <Box title="Stay Connected">
      <div className="flex flex-row gap-[16px]">
        <BoxItem title="Join Discord" icons={[DiscordIcon]} />
        <BoxItem
          title="Share Link"
          icons={[FacebookIcon, TwitterIcon, InstagramIcon]}
        />
        <BoxItem title="Explore on chain" icons={[ArrowIcon]} />
      </div>
    </Box>
  );
}

function BoxItem({ title, icons }) {
  const wordsArray = title.split(' ');
  const firstWord = wordsArray[0];
  const restWords = wordsArray.slice(1).join(' ');
  return (
    <div className="py-[65px] px-[64px] text-[30px] leading-[116%] w-[100%] h-[342px] border-[1px] border-black hover:border-white/60 bg-[#222]/50 hover:bg-[#2f2f2f]/60">
      <div className="mb-[80px]">
        <div className="font-visby-400 lowercase">{firstWord}</div>
        <div className="font-visby-800 capitalize">{restWords}</div>
      </div>
      <div className="flex flex-row items-center justify-between">
        {icons.map((Icon) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#" key={Icon.render.name}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinksBox;
