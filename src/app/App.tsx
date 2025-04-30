import GeneratorForm from "@/components/generator/GeneratorForm";
import { Container, LinearProgress } from "@mui/material";
import { loadFonts } from "@/utils/fonts";
import { useEffect, useState } from "react";

function App() {
  const [areFontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  return (
    <>
      <nav>
        <h1 className="text-center p-3 text-3xl">Chinese Handwriting Practice</h1>
      </nav>
      <Container maxWidth="md">{areFontsLoaded ? <GeneratorForm /> : <LinearProgress />}</Container>
    </>
  );
}

export default App;
