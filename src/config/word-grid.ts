import { FONTS } from "./font";

const DEFAULT_FONT_NAME = FONTS[0].name;

const DEFAULT_BOX_SIZE = 60;
const BOX_SIZE_THRESHOLD = {
  min: 30,
  max: 150,
  step: 5,
};

const DEFAULT_TEXT_OPACITY = 1;
const TEXT_OPACITY_THRESHOLD = {
  min: 0,
  max: 1,
  step: 0.1,
};

export { DEFAULT_FONT_NAME, DEFAULT_BOX_SIZE, DEFAULT_TEXT_OPACITY, BOX_SIZE_THRESHOLD, TEXT_OPACITY_THRESHOLD };
