import React from 'react'

import { Button } from '../button'
import { TextInput } from '../form-control/TextInput'
import styles from './SearchBox.module.css'

export const SearchBox: React.FC = () => {
  return (
    <div className={styles.search}>
      <TextInput placeholder="Ara" />
      <Button>Ara</Button>
    </div>
  )
}
