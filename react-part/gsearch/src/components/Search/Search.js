import React from 'react'

export const Search = (props) => {

  const {
    isClear,
    onSearchChangeHandler,
    onSearchClickHandler,
    onClearHandler,
    search
  } = props;

  return (
    <div>
      <form className='form mt-3' onSubmit={(e => {
        e.preventDefault();
        onSearchClickHandler();
      })}>
        <input type='text'
          className='form-control'
          placeholder='Поиск пользователей...'
          value={search}
          onChange={(e) => onSearchChangeHandler(e.target.value)}
        />

        <input className='form-control btn btn-dark mt-3'
          type='submit'
          value='Поиск'
        />

        {!isClear ? <input className='form-control btn btn-light mt-3'
          type='button'
          value='Очистить'
          onClick={onClearHandler}
        /> : null}

      </form>
    </div>
  )
}
