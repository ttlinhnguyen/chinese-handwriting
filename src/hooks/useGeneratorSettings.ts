import { DEFAULT_BOX_SIZE, DEFAULT_FONT_NAME, DEFAULT_TEXT_OPACITY } from "@/config/word-grid";
import { useEffect, useState } from "react";

const SETTING_KEY = "generatorSettings";
interface GeneratorSettings {
  font: string;
  size: number;
  opacity: number;
}

const defaultSettings: GeneratorSettings = {
  font: DEFAULT_FONT_NAME,
  size: DEFAULT_BOX_SIZE,
  opacity: DEFAULT_TEXT_OPACITY,
};

const useGeneratorSettings = () => {
  const [generatorSettings, setGeneratorSettings] = useState<GeneratorSettings>(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem(SETTING_KEY);
    if (saved) setGeneratorSettings(JSON.parse(saved));
  }, []);

  const updateGeneratorSettings = (settings: GeneratorSettings) => {
    setGeneratorSettings(() => {
      localStorage.setItem(SETTING_KEY, JSON.stringify(settings));
      return settings;
    });
  };

  const resetGeneratorSettings = () => updateGeneratorSettings(defaultSettings);

  return { generatorSettings, updateGeneratorSettings, resetGeneratorSettings };
};

export default useGeneratorSettings;
