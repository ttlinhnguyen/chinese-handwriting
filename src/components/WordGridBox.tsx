const WordGridBox = ({...props}) => {
  const boxLength = 70;
  const color = "darkseagreen";
  const bgColor = "white";
  const strokeWidth = boxLength/50;

  return (
    <div className='relative text-black' 
      style={{
        width: boxLength, height: boxLength, 
        fontSize: (boxLength * 3/4), lineHeight: `${boxLength}px`
      }}>

      {/* Grid */}
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg">
        {/* Outline */}
        <rect x={0} y={0} width={boxLength} height={boxLength} 
          stroke={color} strokeWidth={strokeWidth} fill={bgColor} />
        {/* Horizontal line */}
        <line x1={0} y1={boxLength/2} x2={boxLength} y2={boxLength/2} 
          stroke={color} strokeWidth={strokeWidth} />
        {/* Vertical line */}
        <line x1={boxLength/2} y1={0} x2={boxLength/2} y2={boxLength} 
          stroke={color} strokeWidth={strokeWidth} />
        {/* Right diagonal line */}
        <line x1={0} y1={0} x2={boxLength} y2={boxLength} 
          stroke={color} strokeWidth={strokeWidth} />
        {/* Left diagonal line */}
        <line x1={boxLength} y1={0} x2={0} y2={boxLength} 
          stroke={color} strokeWidth={strokeWidth} />
      </svg>

      {/* Text */}
      <div className="absolute size-full text-center" {...props}>
      </div>
    </div>
  );
};

export default WordGridBox;