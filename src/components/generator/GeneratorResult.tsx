import React, { useEffect, useState } from "react";
import { Button, FormControl, MenuItem, Slider, Select, SelectChangeEvent, Typography } from "@mui/material";
import {
  Print as PrintIcon,
  Save as SaveIcon,
  RotateLeft as RotateLeftIcon,
  FontDownloadOutlined as FontIcon,
  FormatSize as FormatSizeIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import WordGridBox from "@/components/WordGridBox";
import { FONTS } from "@/config/font";
import { BOX_SIZE_THRESHOLD, TEXT_OPACITY_THRESHOLD } from "@/config/word-grid";
import useGeneratorSettings from "@/hooks/useGeneratorSettings";

interface GeneratorResultProps {
  text: string;
}

const GeneratorResult: React.FC<GeneratorResultProps> = ({ text }) => {
  const { generatorSettings, updateGeneratorSettings, resetGeneratorSettings } = useGeneratorSettings();
  const [selectedFont, setSelectedFont] = useState(generatorSettings.font);
  const [boxSize, setBoxSize] = useState<number>(generatorSettings.size);
  const [textOpacity, setTextOpacity] = useState<number>(generatorSettings.opacity);

  useEffect(() => {
    setSelectedFont(generatorSettings.font);
    setBoxSize(generatorSettings.size);
    setTextOpacity(generatorSettings.opacity);
  }, [generatorSettings]);

  const printResult = () => {
    window.print();
  };

  const getEventNumberValue = (e: Event) => {
    const target = e.target as typeof e.target & {
      value: number;
    };
    return target.value;
  };

  const saveGeneratorSettings = () => {
    updateGeneratorSettings({
      font: selectedFont,
      size: boxSize,
      opacity: textOpacity,
    });
  };

  const handleFontInput = (e: SelectChangeEvent<string>) => setSelectedFont(e.target.value);
  const handleSizeInput = (e: Event) => setBoxSize(getEventNumberValue(e));
  const handleTextOpacityInput = (e: Event) => setTextOpacity(getEventNumberValue(e));

  if (!text) return <></>;

  return (
    <>
      <form className="my-10 py-5 grid gap-5 border-y border-gray-300">
        <Typography variant="h5">Settings</Typography>
        <FormControl>
          <Typography variant="button" gutterBottom>
            <FontIcon /> Font
          </Typography>
          <Select
            size="small"
            defaultValue={generatorSettings.font}
            value={selectedFont}
            onChange={handleFontInput}
            style={{ fontFamily: selectedFont }}
          >
            {FONTS.map((font) => (
              <MenuItem value={font.name} key={font.name} style={{ fontFamily: font.name }}>
                {font.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="grid md:grid-cols-4 gap-5">
          <FormControl className="md:col-span-2">
            <Typography variant="button" gutterBottom>
              <FormatSizeIcon /> Size
            </Typography>
            <Slider
              marks
              defaultValue={generatorSettings.size}
              valueLabelDisplay="auto"
              min={BOX_SIZE_THRESHOLD.min}
              max={BOX_SIZE_THRESHOLD.max}
              step={BOX_SIZE_THRESHOLD.step}
              value={boxSize}
              onChange={handleSizeInput}
            />
          </FormControl>
          <FormControl className="md:col-span-2">
            <Typography variant="button" gutterBottom>
              <OpacityIcon /> Text opacity
            </Typography>
            <Slider
              marks
              defaultValue={generatorSettings.opacity}
              valueLabelDisplay="auto"
              min={TEXT_OPACITY_THRESHOLD.min}
              max={TEXT_OPACITY_THRESHOLD.max}
              step={TEXT_OPACITY_THRESHOLD.step}
              value={textOpacity}
              onChange={handleTextOpacityInput}
            />
          </FormControl>
        </div>
        <div className="flex gap-3">
          <Button variant="contained" onClick={saveGeneratorSettings} endIcon={<SaveIcon />}>
            Save
          </Button>
          <Button variant="outlined" onClick={resetGeneratorSettings} endIcon={<RotateLeftIcon />}>
            Reset
          </Button>
          <Button color="secondary" variant="contained" onClick={printResult} endIcon={<PrintIcon />}>
            Print
          </Button>
        </div>
      </form>

      <div style={{ fontFamily: selectedFont }} className="grid grid-cols-1 printable gap-y-10">
        {text.split("\n").map((paragraph, index) => (
          <div key={`p${index}`} className="inline-flex flex-wrap gap-y-5">
            {paragraph
              .trim()
              .split("")
              .map((word, index) => (
                <WordGridBox key={index} text={word} size={boxSize} textOpacity={textOpacity} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GeneratorResult;
