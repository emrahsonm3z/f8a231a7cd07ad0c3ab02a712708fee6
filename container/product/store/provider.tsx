/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useReducer } from 'react'

import { productService } from '~/services/product.service'

import { ProductContext } from './context'
import { productReducer } from './reducer'

export const ProductProvider: React.FC = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    products: null
  })

  useEffect(() => {
    if (productState.products === null) {
      productService
        .getAll()
        .then((res) => {
          productDispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: res.products.map((p) => ({
              id: p.id,
              title: p.title,
              image: p.image.src,
              handle: p.handle,
              body_html: p.body_html,
              price: p.variants[0].price
            }))
          })
        })
        .catch(() =>
          productDispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: null
          })
        )
    }
  }, [])

  return (
    productState.products !== null && (
      <ProductContext.Provider value={productState}>{children}</ProductContext.Provider>
    )
  )
}
