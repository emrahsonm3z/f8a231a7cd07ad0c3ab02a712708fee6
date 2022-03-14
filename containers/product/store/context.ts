import { createContext, useContext } from 'react'

import { Product } from '../types/Product'

export interface IProductContext {
  products: Product[] | null
}

export const ProductContext = createContext<IProductContext>({ products: null })

export const useProductContext = () => useContext(ProductContext)
