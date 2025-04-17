import "./GeneratorResult.css";
import React, { useState } from "react";
import { Button, FormControl, MenuItem, Slider, TextField, InputAdornment } from "@mui/material";
import { Print as PrintIcon, FontDownload as FontIcon, FormatSize as FormatSizeIcon, Opacity as OpacityIcon } from "@mui/icons-material";
import WordGridBox from "@/components/WordGridBox";
import { FONTS } from "@/config/font";
import { BOX_SIZE_THRESHOLD, DEFAULT_BOX_SIZE, DEFAULT_FONT_NAME, DEFAULT_TEXT_OPACITY, TEXT_OPACITY_THRESHOLD } from "@/config/word-grid";

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
      <form className="mb-10 grid gap-5">
        <TextField select label="Font" defaultValue={DEFAULT_FONT_NAME}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <FontIcon />
                </InputAdornment>
              ),
            },
          }}
          value={selectedFont} onChange={e => setSelectedFont(e.target.value)}>
          {FONTS.map(font => (
            <MenuItem value={font.name} key={font.name} style={{fontFamily: font.name}}>
              <span className="text-xl">{font.name}</span>
            </MenuItem>
          ))}
        </TextField>
        <div className="grid md:grid-cols-3 gap-5">
          <FormControl>
            <div><FormatSizeIcon /> Size</div>
            <Slider marks defaultValue={DEFAULT_BOX_SIZE} valueLabelDisplay="auto" 
              min={BOX_SIZE_THRESHOLD.min} max={BOX_SIZE_THRESHOLD.max} step={BOX_SIZE_THRESHOLD.step}
              value={boxSize} onChange={e => setBoxSize(Number(e.target?.value))} />
          </FormControl>
          <FormControl>
            <div><OpacityIcon /> Text opacity</div>
            <Slider marks defaultValue={DEFAULT_TEXT_OPACITY} valueLabelDisplay="auto" 
              min={TEXT_OPACITY_THRESHOLD.min} max={TEXT_OPACITY_THRESHOLD.max} step={TEXT_OPACITY_THRESHOLD.step}
              value={textOpacity} onChange={e => setTextOpacity(Number(e.target?.value))} />
          </FormControl>
          <div className="m-auto">
            <Button variant="contained" onClick={printResult} endIcon={<PrintIcon />}>Print</Button>
          </div>
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
