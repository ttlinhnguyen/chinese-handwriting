import FangZhengKaiTiGBK from "@/assets/fonts/FangZhengKaiTi-GBK.ttf";
import FangZhengShuSongGBK from "@/assets/fonts/FangZhengShuSong-GBK.ttf";
import FangZhengFangSongGBK from "@/assets/fonts/FangZhengFangSong-GBK.ttf";
import FZYBXSJF from "@/assets/fonts/FZYBXSJF.ttf";
import FZYBKSK from "@/assets/fonts/FZYBKSK.ttf";

const FONTS = [
  {
    name: "FZ KaiTi GBK",
    url: FangZhengKaiTiGBK,
  },
  {
    name: "FZ ShuSong GBK",
    url: FangZhengShuSongGBK,
  },
  {
    name: "FZ FangSong GBK",
    url: FangZhengFangSongGBK,
  },
  {
    name: "FZ YingBi KaiShu",
    url: FZYBKSK,
  },
  {
    name: "FZ YingBi XingShu",
    url: FZYBXSJF,
  },
];

const DEFAULT_FONT_NAME = FONTS[0].name;

const DEFAULT_BOX_SIZE = 60;

const DEFAULT_TEXT_OPACITY = 1;

export {
  FONTS,
  DEFAULT_FONT_NAME,
  DEFAULT_BOX_SIZE,
  DEFAULT_TEXT_OPACITY,
};