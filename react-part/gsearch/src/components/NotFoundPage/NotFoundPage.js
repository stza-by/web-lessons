import React from 'react'

export const NotFoundPage = ({location: {pathname}}) => {
 
  return (
    <div>
      <h1>404</h1>

      <p>Страница {pathname} не найдена</p>
    </div>
  )
}
