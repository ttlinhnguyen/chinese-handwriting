import GeneratorForm from "@/components/generator/GeneratorForm";
import { FONTS } from "@/config/font";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container } from "@mui/material";

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

      <Container maxWidth="md">
        <h1 className="text-center p-3 text-3xl">Chinese Handwriting Practice</h1>
        <GeneratorForm />
      </Container>
    </>
  );
}

export default App;
