import React from 'react'

const Dropdown = ({title,options,setCategory}) => {
 

  return (
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
  )
}

export default Dropdown