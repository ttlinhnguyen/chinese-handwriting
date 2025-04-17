import { DEFAULT_BOX_SIZE } from "@/config/font";
import React, { PropsWithChildren } from "react";

interface WordGridBoxProps {
  text: string;
  size?: number;
  lineColor?: string;
  bgColor?: string;
  props?: PropsWithChildren
}

const WordGridBox: React.FC<WordGridBoxProps> = ({text, size = DEFAULT_BOX_SIZE, lineColor = "darkseagreen", bgColor = "white", ...props}) => {
  const strokeWidth = size/50;

  return (
    <div className='relative text-black' 
      style={{
        width: size, height: size, 
        fontSize: (size * 3/4), lineHeight: `${size}px`
      }} {...props}>

      {/* Grid */}
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg">
        {/* Outline */}
        <rect x={0} y={0} width={size} height={size} 
          stroke={lineColor} strokeWidth={strokeWidth} fill={bgColor} />
        {/* Horizontal line */}
        <line x1={0} y1={size/2} x2={size} y2={size/2} 
          stroke={lineColor} strokeWidth={strokeWidth} />
        {/* Vertical line */}
        <line x1={size/2} y1={0} x2={size/2} y2={size} 
          stroke={lineColor} strokeWidth={strokeWidth} />
        {/* Right diagonal line */}
        <line x1={0} y1={0} x2={size} y2={size} 
          stroke={lineColor} strokeWidth={strokeWidth} />
        {/* Left diagonal line */}
        <line x1={size} y1={0} x2={0} y2={size} 
          stroke={lineColor} strokeWidth={strokeWidth} />
      </svg>

      {/* Text */}
      <div className="absolute size-full text-center">
        {text}
      </div>
    </div>
  );
};

export default WordGridBox;