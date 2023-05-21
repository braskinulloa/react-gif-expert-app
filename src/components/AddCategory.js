import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputchange = ({ target: { value } }) => {
    // console.log(value);
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories( categories => [inputValue, ...categories] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>
        <input 
          type="text" 
          value={ inputValue }
          onChange={ handleInputchange } 
        />
      </h2>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}