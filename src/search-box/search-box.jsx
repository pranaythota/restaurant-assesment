import React from 'react';
import './search-box.css'

 const Searchbox = ({placeholder,handleChange,onSubmit})=>(

     
    <div className="search-container">
<div>
<div className='search-text'>Search city  for restaurants.</div>
<input
        className='search-bar'
        type= 'search'
        placeholder={placeholder}
        onChange = {handleChange}
    />
     <input
      type='submit' 
      className='search-submit' 
      onClick = {onSubmit}
      />
</div>

    </div>

  
    
)

export default Searchbox;