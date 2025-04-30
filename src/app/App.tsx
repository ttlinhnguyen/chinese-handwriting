import GeneratorForm from "@/components/generator/GeneratorForm";
import { Container } from "@mui/material";
import { useState } from "react";
import AppLoading from "./AppLoading";
import { FONTS } from "@/config/font";

function App() {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <>
      <nav>
        <h1 className="text-center p-3">
          <div className="text-3xl">Chinese Handwriting Practice</div>
          <div className="text-5xl" style={{ fontFamily: FONTS[0].name }}>
            中文手写练习
          </div>
        </h1>
      </nav>
      <Container maxWidth="md">{isLoaded ? <GeneratorForm /> : <AppLoading setLoaded={setLoaded} />}</Container>
    </>
  );
}

export default App;
