/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'

import { BreadCrumb, BreadCrumbItem } from '~/components/breadcrumb/BreadCrumb'
import { ProductCard } from '~/components/product/ProductCard'
import { productService } from '~/services/product.service'

import styles from './ProductList.module.css'
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
        setProducts({
          loading: false,
          data: res.products.map((p) => ({
            id: p.id,
            title: p.title,
            image: p.image.src,
            handle: p.handle,
            body_html: p.body_html,
            price: p.variants[0].price
          }))
        })
      })
      .catch(() => setProducts({ loading: false, data: null }))
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  const breadcrumbItems: Partial<BreadCrumbItem>[] = [
    {
      title: 'tüm ürünler',
      path: '/'
    },
    {
      title: 'Product A',
      path: '/a',
      active: true
    }
  ]

  return (
    <>
      <BreadCrumb items={breadcrumbItems} />
      <section>
        {products.loading ? (
          <div>Loading</div>
        ) : products.data === null ? (
          <div>Ürünler bulunamadı</div>
        ) : (
          <div className={styles['product-list']}>
            {products.data.map((product) => {
              const { id, title, handle, price, image } = product
              return (
                <ProductCard key={id} title={title} path={handle} price={price} image={image} />
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
