import React, { useState } from "react";
import WordGridBox from "@/components/WordGridBox";
import fonts from "@/config/font";
import { MenuItem, TextField } from "@mui/material";

interface GeneratorResultProps {
    text: string;
}

const GeneratorResult: React.FC<GeneratorResultProps> = ({text}) => {
  const [selectedFont, setSelectedFont] = useState(fonts[0].name);

  const fontFaces = fonts.map(font => (
    `@font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('truetype');
    }`
  ));

  return (
    <>
      <style>{fontFaces.join("\n")}</style>

      <TextField select label="Font"
        value={selectedFont} onChange={e => setSelectedFont(e.target.value)}>
        {fonts.map(font => (
          <MenuItem value={font.name} key={font.name}>
            {font.name}
          </MenuItem>
        ))}
      </TextField>

      <div style={{fontFamily: selectedFont}} className='flex flex-wrap'>
        {text.split("").map((word, index) => (
          <WordGridBox key={index}>{word}</WordGridBox>
        ))}
      </div>
    </>
  );
};

export default GeneratorResult;
