import React from 'react';
import './styles/SearchPanel.css';


class SearchPanel extends React.Component {


  onChangeHandler = (e) => {
    const searchText = e.target.value;
    this.props.changeSearchField(searchText);
  }


  render() {

    return <input onChange={this.onChangeHandler}
      type='text'
      className='form-control search-input'
      placeholder='Поиск' />;
  }

}



export default SearchPanel;

