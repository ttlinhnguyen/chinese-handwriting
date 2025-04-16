import fonts from '../config/font'
import WordGridBox from '../components/WordGridBox';

function App() {
  const defaultText = "鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认,乃是世界自由、正义与和平的基础"
  const fontFaces = fonts.map(font => (
    `
    @font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('truetype');
    }
    `
  ));

  return (
    <>
      <style>{fontFaces.join("\n")}</style>
      <div style={{fontFamily: fonts[0].name}} className='flex flex-wrap text-5xl'>
        {defaultText.split("").map(word => (
          <WordGridBox>{word}</WordGridBox>
        ))}
      </div>
    </>
  )
}

export default App
