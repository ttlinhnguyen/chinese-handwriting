import { FormEvent, useState } from "react";
import { Button, FormHelperText, TextField } from "@mui/material";
import { EditNote as EditNoteIcon } from "@mui/icons-material";

import GeneratorResult from "@/components/generator/GeneratorResult";
import { DEFAULT_TEXT, WORD_LIMIT } from "@/config/generator";

const GeneratorForm = () => {
  const [formText, setFormText] = useState<string>(DEFAULT_TEXT);
  const [inputText, setInputText] = useState<string>(DEFAULT_TEXT);

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
        <TextField
          multiline
          fullWidth
          minRows={5}
          aria-describedby="text-input-helper"
          label="Text"
          name="text"
          value={formText}
          onChange={(e) => setFormText(e.target.value)}
        />
        <FormHelperText id="text-input-helper">
          Word limit: {WORD_LIMIT}. Word count: {formText.length}
        </FormHelperText>
        <Button variant="contained" type="submit" disabled={formText === inputText} endIcon={<EditNoteIcon />}>
          Generate
        </Button>
      </form>

      <GeneratorResult text={inputText} />
    </div>
  );
};

export default GeneratorForm;
