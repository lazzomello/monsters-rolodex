import React from 'react';
import './search-box.style.css'

const Searchbox= ({placeholder,handleChange})=> {
  return (
    <div className='search'>
      <input onChange={ handleChange }
       type="search" 
       placeholder={ placeholder }
      />
    </div>
  )
}

export default Searchbox