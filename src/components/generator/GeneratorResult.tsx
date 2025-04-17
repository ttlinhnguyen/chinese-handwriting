import "./GeneratorResult.css";
import React, { useState } from "react";
import { FormControl, MenuItem, Slider, TextField } from "@mui/material";
import WordGridBox from "@/components/WordGridBox";
import { DEFAULT_BOX_SIZE, DEFAULT_FONT_NAME, FONTS } from "@/config/font";

interface GeneratorResultProps {
    text: string;
}

const GeneratorResult: React.FC<GeneratorResultProps> = ({text}) => {
  const [selectedFont, setSelectedFont] = useState(DEFAULT_FONT_NAME);
  const [boxSize, setBoxSize] = useState<number>(DEFAULT_BOX_SIZE);

  return (
    <>
      <form className="my-3 grid grid-cols-2 gap-2">
        <TextField select label="Font" defaultValue={DEFAULT_FONT_NAME}
          value={selectedFont} onChange={e => setSelectedFont(e.target.value)}>
          {FONTS.map(font => (
            <MenuItem value={font.name} key={font.name}>
              {font.name}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <div>Size</div>
          <Slider marks defaultValue={DEFAULT_BOX_SIZE} valueLabelDisplay="on" 
            min={30} max={100} step={5}
            value={boxSize} onChange={e => setBoxSize(parseInt(e.target?.value))} />
        </FormControl>
      </form>

      <div id="generator-result" style={{fontFamily: selectedFont}} className='flex flex-wrap gap-y-2'>
        {text.split("").map((word, index) => (
          <WordGridBox key={index} text={word} size={boxSize}></WordGridBox>
        ))}
      </div>
    </>
  );
};

export default GeneratorResult;
