import React from 'react'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export const Button: React.FC<IButtonProps> = ({ loading, children, ...props }) => {
  return (
    <button type="button" {...props}>
      {loading && <div>...</div>}
      {children}
    </button>
  )
}

Button.defaultProps = {
  loading: false
}
