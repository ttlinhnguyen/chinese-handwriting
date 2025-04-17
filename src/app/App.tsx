import GeneratorForm from "@/components/generator/GeneratorForm";
import fonts from "@/config/font";

function App() {
  // Load font faces' CSS styles
  const fontFaces = fonts.map(font => (
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
