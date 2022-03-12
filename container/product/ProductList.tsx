import React, { useState } from 'react'

import { Button } from '~/components/button'
import { Search } from '~/components/icons'
import { productService } from '~/services/product.service'
import { theme } from '~/theme'

import { Product } from './types/Product'

type ProductListState = {
  loading: boolean
  data: Product[] | null
}

export const ProductList = () => {
  const [products, setProducts] = useState<ProductListState>({
    loading: false,
    data: null
  })
  console.log('🚀 -> products list', products)

  const getAllProduct = (): void => {
    setProducts((prev: ProductListState) => ({ ...prev, loading: true }))

    productService
      .getAll()
      .then((res) => {
        setProducts({ loading: false, data: res })
      })
      .catch(() => setProducts({ loading: false, data: null }))
  }

  return (
    <div>
      <main>
        <Button onClick={getAllProduct}>Click</Button>
        <Search width={32} height={32} color={theme.colors.primary} />
        <section>
          {products.loading ? (
            <div>Loading</div>
          ) : products.data === null ? (
            <div>Ürünler bulunamadı</div>
          ) : (
            <pre>{JSON.stringify(products.data, null, 2)}</pre>
          )}
        </section>
      </main>
    </div>
  )
}
