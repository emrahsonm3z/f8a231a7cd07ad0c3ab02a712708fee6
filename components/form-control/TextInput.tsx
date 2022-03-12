import cn from 'classnames'
import React from 'react'

import styles from './FormControl.module.css'

type ITextProps = React.InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<ITextProps> = ({
  type = 'text',
  disabled,
  className,
  ...props
}) => {
  return (
    <div className="form-control">
      <input
        type={type}
        className={cn(
          styles['form-input'],
          { [styles['form-input--disabled']]: disabled },
          className
        )}
        {...props}
      />
    </div>
  )
}
