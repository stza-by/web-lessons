import React from 'react';
import './styles/SearchPanel.css';

const SearchPanel = () => {
  const placeholder = 'Поиск';

  return <input type='text'
    className='form-control search-input'
    placeholder={placeholder} />;
}

export default SearchPanel;

