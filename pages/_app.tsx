import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { ProductProvider } from '~/containers/product/store/provider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  )
}

export default MyApp
