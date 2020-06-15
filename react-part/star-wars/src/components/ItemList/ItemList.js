import React, { Component } from 'react'
import Spinner from '../Spinner';
import './ItemList.css';

export default class ItemList extends Component {

  state = {
    isLoading: true,
    items: [],  
    currentPage: 1,
    itemsPerPage: 10
  }

  async componentDidMount() {
    const items = await this.props.getData();
    this.setState({ items, isLoading: false });
  }

  renderListItems = (itemsArray) => {
    const { setItem, currentItem, renderItem } = this.props;
    return itemsArray.map((item) => (
      <li onClick={() => setItem(item)}
        key={item.url} 
        className={`list-group-item ${currentItem.url === item.url ? 'active' : ''}`}>
        {renderItem(item)}
      </li>)
    )
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
  }

  renderPagination = (itemsPerPage, totalItems, currentPage) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const pageItems = pageNumbers.map((number) => (
      <li key={number}
        className={`page-item ${number === currentPage ? 'active' : ''}`}
        onClick={() => this.paginate(number)}>
        <span className='page-link'>{number}</span>
      </li>
    ))

    return (
      <ul className='pagination mt-3 justify-content-end'>
        {pageItems}
      </ul>
    )
  }

  render() {
    const { isLoading, items, currentPage, itemsPerPage } = this.state;

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;

    const currentItems = items.slice(firstItemIndex, lastItemIndex);

    if (isLoading) return <Spinner />;

    return (
      <ul className='list-group item-list' >
        {this.renderListItems(currentItems)}
        {this.renderPagination(itemsPerPage, items.length, currentPage)}
      </ul>
    )
  }
}
