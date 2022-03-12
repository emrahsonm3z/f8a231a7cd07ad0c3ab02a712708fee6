import cn from 'classnames'
import React from 'react'

import styles from './Button.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export const Button: React.FC<IButtonProps> = ({ loading, className, children, ...props }) => {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {loading && <div>...</div>}
      {children}
    </button>
  )
}

Button.defaultProps = {
  loading: false
}
