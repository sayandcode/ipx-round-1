function Box({ title, children, className }) {
  return (
    <div className={`border-[1px] border-white/50 ${className || ''}`}>
      <div className="px-[5%] py-6 font-visby-700 text-[18px] leading-[12px] tracking-[1px]">
        {title}
      </div>
      <div className="px-[5%] py-6 border-t-[1px] border-white/20">
        {children}
      </div>
    </div>
  );
}

export default Box;
