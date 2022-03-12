import React from 'react'

import styles from './Button.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export const Button: React.FC<IButtonProps> = ({ loading, children, ...props }) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {loading && <div>...</div>}
      {children}
    </button>
  )
}

Button.defaultProps = {
  loading: false
}
