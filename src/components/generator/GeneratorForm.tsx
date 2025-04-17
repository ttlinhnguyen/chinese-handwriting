import { FormEvent, useState } from "react";
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
        <textarea name="text" className='w-full min-h-20 border' 
          value={formText} onChange={e => setFormText(e.target.value)} />
        <div>
          Word limit: {WORD_LIMIT}. Word count: {formText.length}
        </div>
        <button type="submit">Generate</button>
      </form>

      <GeneratorResult text={inputText}/>
    </div>
  );
};

export default GeneratorForm;