function Box({ title, children, className }) {
  return (
    <div className={`border-[1px] border-white/50 ${className || ''}`}>
      <div className="px-[5%] py-6">{title}</div>
      <div className="px-[5%] py-6 border-t-[1px] border-white/20">
        {children}
      </div>
    </div>
  );
}

export default Box;
