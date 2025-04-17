import "./GeneratorResult.css";
import React, { useState } from "react";
import { Button, FormControl, MenuItem, Slider, TextField } from "@mui/material";
import WordGridBox from "@/components/WordGridBox";
import { DEFAULT_BOX_SIZE, DEFAULT_FONT_NAME, DEFAULT_TEXT_OPACITY, FONTS } from "@/config/font";

interface GeneratorResultProps {
    text: string;
}

const GeneratorResult: React.FC<GeneratorResultProps> = ({text}) => {
  const [selectedFont, setSelectedFont] = useState(DEFAULT_FONT_NAME);
  const [boxSize, setBoxSize] = useState<number>(DEFAULT_BOX_SIZE);
  const [textOpacity, setTextOpacity] = useState<number>(DEFAULT_TEXT_OPACITY);

  const printResult = () => {
    window.print();
  };

  if (!text) return <></>;

  return (
    <>
      <h2 className="mt-10 mb-5">Settings</h2>
      <form className="mb-10 grid md:grid-cols-4 gap-5">
        <TextField select label="Font" defaultValue={DEFAULT_FONT_NAME}
          value={selectedFont} onChange={e => setSelectedFont(e.target.value)}>
          {FONTS.map(font => (
            <MenuItem value={font.name} key={font.name} style={{fontFamily: font.name}}>
              <span className="text-xl">{font.name}</span>
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <div>Size</div>
          <Slider marks defaultValue={DEFAULT_BOX_SIZE} valueLabelDisplay="on" 
            min={30} max={150} step={5}
            value={boxSize} onChange={e => setBoxSize(Number(e.target?.value))} />
        </FormControl>
        <FormControl>
          <div>Text opacity</div>
          <Slider marks defaultValue={DEFAULT_TEXT_OPACITY} valueLabelDisplay="on" 
            min={0} max={1} step={0.1}
            value={textOpacity} onChange={e => setTextOpacity(Number(e.target?.value))} />
        </FormControl>
        <div className="m-auto">
          <Button variant="contained" onClick={printResult}>Print</Button>
        </div>
      </form>

      
      <div id="generator-result" style={{fontFamily: selectedFont}} className='flex flex-wrap gap-y-5'>
        {text.split("").map((word, index) => (
          <WordGridBox key={index} text={word} size={boxSize} textOpacity={textOpacity}></WordGridBox>
        ))}
      </div>
    </>
  );
};

export default GeneratorResult;
