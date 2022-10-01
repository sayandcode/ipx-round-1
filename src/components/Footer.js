const LINKS = [
  'About',
  'Terms of Use',
  'Privacy Policy',
  'Knowledge Base',
  'Customer Support',
];
function Footer() {
  return (
    <footer className="flex flex-row gap-[36.98px] mx-[108px] my-[72px]">
      {LINKS.map((link) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          className="opacity-40 font-visby-400 text-[16px] leading-[25px]"
        >
          {link}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
