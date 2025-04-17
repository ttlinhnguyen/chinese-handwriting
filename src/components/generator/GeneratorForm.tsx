import { FormEvent, useState } from "react";
import { Button, FormHelperText, TextField } from "@mui/material";
import GeneratorResult from "@/components/generator/GeneratorResult";

const WORD_LIMIT = 1000;

const GeneratorForm = () => {
  const defaultText = "鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认,乃是世界自由、正义与和平的基础";
  const [formText, setFormText] = useState<string>(defaultText);
  const [inputText, setInputText] = useState<string>("");
  
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formText.length > WORD_LIMIT) {
      setInputText("");
      console.error("Exceed word limit");
      return;
    }

    setInputText(formText);
  };
    
  return (
    <div className="m-3">
      <form onSubmit={handleFormSubmit}>
        <TextField multiline fullWidth minRows={5} aria-describedby="text-input-helper"
          label="Text" name="text"
          value={formText} onChange={e => setFormText(e.target.value)} />
        <FormHelperText id="text-input-helper">
          Word limit: {WORD_LIMIT}. Word count: {formText.length}
        </FormHelperText>
        <Button type="submit">Generate</Button>
      </form>

      <GeneratorResult text={inputText}/>
    </div>
  );
};

export default GeneratorForm;