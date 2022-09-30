function Banner({ children: bannerText }) {
  const textWithEndBullet = `${bannerText} • `;
  return (
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    <marquee className="text-white bg-ipxRed pt-[9px] pb-[8px] font-visby-500">
      {textWithEndBullet.repeat(10)}
    </marquee>
  );
}

export default Banner;
