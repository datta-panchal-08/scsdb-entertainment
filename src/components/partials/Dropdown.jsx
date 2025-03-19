import React, { useState } from 'react'

const Dropdown = ({title,options,setCategory}) => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCategory(option);
    setIsOpen(false);
  };
  return (
      <>
        <div className='select'>
        <select onChange={(e)=>setCategory(e.target.value)} defaultValue='0' name="format" id="format">
          <option value="0" disabled>
            {title}
         </option>
         {
          options.map((item,index)=>{
            return <option key={index} value={item} >{item.toUpperCase()}</option>
          })
         }
        </select>
        </div>

       <div className="relative w-full max-w-[10em] mx-auto  z-50 md:hidden"> 
      <button
        className="w-full py-2 px-4 bg-gray-800 text-white text-sm font-sans rounded-md flex justify-between items-center focus:outline-none hover:bg-indigo-600"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full w-full bg-gray-800 rounded-md shadow-lg mt-1">
          {options.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 text-white cursor-pointer hover:bg-indigo-600"
              onClick={() => handleOptionSelect(item)}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
        </div>


      </>
  )
}

export default Dropdown