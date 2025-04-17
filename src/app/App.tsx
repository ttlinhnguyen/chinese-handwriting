import fonts from '@/config/font'
import WordGridBox from '@/components/WordGridBox';
import { useState } from 'react';

function App() {
  const defaultText = "鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认,乃是世界自由、正义与和平的基础"
  const fontFaces = fonts.map(font => (
    `@font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('truetype');
    }`
  ));

  const [selectedFont, setSelectedFont] = useState(fonts[0].name)

  return (
    <>
      <style>{fontFaces.join("\n")}</style>
      <select className='m-auto p-3' value={selectedFont} 
        onChange={e => setSelectedFont(e.target.value)}>
        {fonts.map(font => (
          <option value={font.name}>{font.name}</option>
        ))}
      </select>
      <div style={{fontFamily: selectedFont}} className='flex flex-wrap'>
        {defaultText.split("").map(word => (
          <WordGridBox>{word}</WordGridBox>
        ))}
      </div>
    </>
  )
}

export default App
