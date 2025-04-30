import { FONTS } from "@/config/font";

const loadFonts = async () => {
  const promises = FONTS.map(async (font) => {
    const fontFace = new FontFace(font.name, `url(${font.url})`);
    const loadedFont = await fontFace.load();
    document.fonts.add(loadedFont);
  });

  await Promise.all(promises);
};

export { loadFonts };
