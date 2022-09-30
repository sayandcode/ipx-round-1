function Button({ variant = 'filled', children, className, ...restProps }) {
  let buttonStyles = 'font-visby-700 px-4 py-2 rounded-[10px]';

  if (variant === 'filled') {
    buttonStyles += ' bg-gradient-to-tr from-ipxBlue to-ipxPink';
  } else if (variant === 'contained') {
    buttonStyles +=
      ' bg-[rgba(255,31,31,0.11)] border-b-ipxBlue/50 border-l-ipxBlue/50 border-t-ipxRed/50 border-r-ipxRed/50 border-[0.76px]';
  }
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button className={`${buttonStyles} ${className}`} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
