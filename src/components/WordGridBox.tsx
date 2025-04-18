import { DEFAULT_BOX_SIZE, DEFAULT_TEXT_OPACITY } from "@/config/word-grid";
import { colors } from "@mui/material";
import React, { CSSProperties, PropsWithChildren } from "react";

interface WordGridBoxProps {
  text: string;
  size?: number;
  lineColor?: string;
  textOpacity?: number;
  props?: PropsWithChildren;
}

const WordGridBox: React.FC<WordGridBoxProps> = ({
  text,
  size = DEFAULT_BOX_SIZE,
  lineColor = colors.grey[400],
  textOpacity = DEFAULT_TEXT_OPACITY,
  ...props
}) => {
  const bgColor = "white";
  const strokeWidth = size / 50;
  const cssProperties: CSSProperties = {
    width: size,
    height: size,
    pageBreakInside: "avoid",
    fontSize: (size * 17) / 20,
    lineHeight: `${size}px`,
  };

  return (
    <div className="relative text-black" style={cssProperties} {...props}>
      {/* Grid */}
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg">
        {/* Outline */}
        <rect x={0} y={0} width={size} height={size} stroke={lineColor} strokeWidth={strokeWidth} fill={bgColor} />
        {/* Horizontal line */}
        <line x1={0} y1={size / 2} x2={size} y2={size / 2} stroke={lineColor} strokeWidth={strokeWidth} />
        {/* Vertical line */}
        <line x1={size / 2} y1={0} x2={size / 2} y2={size} stroke={lineColor} strokeWidth={strokeWidth} />
        {/* Right diagonal line */}
        <line x1={0} y1={0} x2={size} y2={size} stroke={lineColor} strokeWidth={strokeWidth} />
        {/* Left diagonal line */}
        <line x1={size} y1={0} x2={0} y2={size} stroke={lineColor} strokeWidth={strokeWidth} />
      </svg>

      {/* Text */}
      <div className="absolute size-full text-center" style={{ opacity: textOpacity }}>
        {text}
      </div>
    </div>
  );
};

export default WordGridBox;
