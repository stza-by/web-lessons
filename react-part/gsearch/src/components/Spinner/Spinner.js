import React from 'react';
import spinner from './spinner.gif';

import styles from './styles';

export const Spinner = () => {
  return (
    <div style={styles}>
      <img src={spinner}/>
    </div>
  )
}
