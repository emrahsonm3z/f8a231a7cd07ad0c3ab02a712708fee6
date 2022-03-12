import React from 'react'

import { Footer } from './footer'
import { Header } from './header'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
