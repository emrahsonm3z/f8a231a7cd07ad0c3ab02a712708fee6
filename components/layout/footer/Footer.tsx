import React from 'react'

import styles from './Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles['footer-menu']}>
        <li className={styles['footer-menu__item']}>
          <a
            href="https://github.com/emrahsonm3z/f8a231a7cd07ad0c3ab02a712708fee6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer-menu__link']}
          >
            Emrah Sönmez
          </a>
        </li>
      </ul>
    </footer>
  )
}
