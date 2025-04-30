import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { FONTS } from "@/config/font";

interface AppLoadingProps {
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppLoading: React.FC<AppLoadingProps> = ({ setLoaded }) => {
  useEffect(() => {
    loadFonts().then(() => setLoaded(true));
  }, [setLoaded]);

  const loadFonts = async () => {
    const promises = FONTS.map(async (font) => {
      const fontFace = new FontFace(font.name, `url(${font.url})`);
      const loadedFont = await fontFace.load();
      document.fonts.add(loadedFont);
    });

    await Promise.all(promises);
  };

  return (
    <div className="m-3">
      <div>Loading fonts...</div>
      <LinearProgress />
    </div>
  );
};

export default AppLoading;
