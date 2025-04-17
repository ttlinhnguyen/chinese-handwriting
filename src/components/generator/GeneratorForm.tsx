import { FormEvent, useState } from "react"
import GeneratorResult from "@/components/generator/GeneratorResult"

interface FormEventTarget {
    text: {value: string};
};

const GeneratorForm = () => {
  const defaultText = "鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认,乃是世界自由、正义与和平的基础"
  const [inputText, setInputText] = useState("")
  
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & FormEventTarget
    setInputText(target.text.value)
  }
    
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea name="text" className='w-full min-h-10 border m-3' defaultValue={defaultText} />
        <button type="submit">Generate</button>
      </form>

      <GeneratorResult text={inputText}/>
    </div>
  )
}

export default GeneratorForm