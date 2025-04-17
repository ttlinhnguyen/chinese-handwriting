import GeneratorForm from "@/components/generator/GeneratorForm";
import { FONTS } from "@/config/font";

function App() {
  // Load font faces' CSS styles
  const fontFaces = FONTS.map(font => (
    `@font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('truetype');
    }`
  ));
  
  return (
    <>
      <style>{fontFaces.join("\n")}</style>

      <main className="container m-auto">
        <GeneratorForm />
      </main>
    </>
  );
}

export default App;
