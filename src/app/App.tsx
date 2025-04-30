import GeneratorForm from "@/components/generator/GeneratorForm";
import { Container } from "@mui/material";
import { useState } from "react";
import AppLoading from "./AppLoading";

function App() {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <>
      <nav>
        <h1 className="text-center p-3 text-3xl">Chinese Handwriting Practice</h1>
      </nav>
      <Container maxWidth="md">{isLoaded ? <GeneratorForm /> : <AppLoading setLoaded={setLoaded} />}</Container>
    </>
  );
}

export default App;
