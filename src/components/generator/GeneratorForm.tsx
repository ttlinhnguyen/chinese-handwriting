import { ChangeEvent, FormEvent, useState } from "react";
import { Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";
import { EditNote as EditNoteIcon } from "@mui/icons-material";

import GeneratorResult from "@/components/generator/GeneratorResult";
import { DEFAULT_TEXT, WORD_LIMIT } from "@/config/generator";

const GeneratorForm = () => {
  const [formText, setFormText] = useState<string>(DEFAULT_TEXT);
  const [inputText, setInputText] = useState<string>(DEFAULT_TEXT);

  const sanitiseTextInput = (text: string) => text.trim();
  const validateTextInput = () => sanitiseTextInput(formText).length <= WORD_LIMIT;

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => setFormText(e.target.value);
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateTextInput()) {
      setInputText("");
      console.error("Exceed word limit");
      return;
    }

    setInputText(sanitiseTextInput(formText));
  };

  return (
    <div className="m-3">
      <form onSubmit={handleFormSubmit}>
        <FormControl fullWidth error={!validateTextInput()}>
          <InputLabel>Text</InputLabel>
          <OutlinedInput label="Text" multiline minRows={5} value={formText} onChange={handleTextInput} />
          {!validateTextInput() && <FormHelperText>Exceeds word limit</FormHelperText>}
          <FormHelperText>
            Word limit: {WORD_LIMIT}. Word count: {sanitiseTextInput(formText).length}
          </FormHelperText>
        </FormControl>

        <Button variant="contained" type="submit" disabled={formText === inputText} endIcon={<EditNoteIcon />}>
          Generate
        </Button>
      </form>

      <GeneratorResult text={inputText} />
    </div>
  );
};

export default GeneratorForm;
