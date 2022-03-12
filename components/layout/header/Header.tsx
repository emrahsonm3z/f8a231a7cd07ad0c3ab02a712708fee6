import { SearchBox } from '~/components/searchBox/SearchBox'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <SearchBox />
    </header>
  )
}
