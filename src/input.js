import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);
  const [dropdownList, setDropdownList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const names = ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula M. Keith"]
 
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    if (inputValue.endsWith("@")) {
      setDropdownList(names);
    } else {
      setDropdownList([]);
    }
  
    // Check if an option is selected
    const optionIndex = selectedOptions.indexOf(inputValue);
    if (optionIndex === -1) {
      setSelectedOptions([...selectedOptions, inputValue]);
    } else {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions.splice(optionIndex, 1);
      setSelectedOptions(newSelectedOptions);
    }
  };
  
  
  const handleReset = (e) =>{
    e.preventDefault();
    setDropdownList([]);
    setInputList([]);
    setInput("");
    setSelectedOptions([]);
  }
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputList([...inputList, input]);
    setInput("");
  };

  return (
    <form onReset={handleReset} onSubmit={handleSubmit} className="px-60 py-20">
      <div className=" border-orange-200  border-4 max-h-50 py-20">

        <h1 className="font-bold italic ">Type Here</h1>
        <div className="">
<textarea 
  className="border-2 px-10 py-5 border-black font-bold italic p-10 "
  type="text"
  value={input}
  onChange={handleInputChange}

  style={{ background: 'none', border: 'none' }}
>  
  {selectedOptions.join(', ')}
</textarea>
</div>
        {dropdownList.length > 0 && (
  <div className="relative px-96 -top-5">
    <ul className="dropdown bg-gray-200 rounded-md border-2 border-black">
      {dropdownList.map((name, index) => (
        <li 
          key={index} 
          className={selectedOptions.includes(name) ? 'selected' : ''}
          onClick={() => setInput(name)}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
)}



<br/>
<div className="p-2">
        <button className="p-2 rounded-md text-white font-bold bg-blue-700" type="submit">+Add Notes</button>
        <button className="p-2 rounded-md text-white font-bold bg-blue-700" type="reset">Reset</button>
        </div> 
      </div>

      <div className="px-2 py-2 border-2 border-black">
        <h2  className='font-bold italic py-2 border-4 border-blue-800 flex justify-center'>Added Names:</h2>
        <ul className="inputs py-2 mt-6 font-bold  border-2 border-green-400">
          {inputList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Input;
