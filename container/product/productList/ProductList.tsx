/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { BreadCrumb, BreadCrumbItem } from '~/components/breadcrumb/BreadCrumb'
import { Pagination } from '~/components/pagination'
import { ProductCard } from '~/components/product/ProductCard'
import { PRODUCT_ROW_PER_PAGE } from '~/constants'
import { ROUTES } from '~/constants/routes'
import { productService } from '~/services/product.service'

import { useProductContext } from '../store/context'
import { ProductListRequest, ProductListResponse } from '../types/Product'
import styles from './ProductList.module.css'

type ProductListResult = {
  loading: boolean
  result: ProductListResponse | null | undefined
}

export const ProductList = () => {
  const { products } = useProductContext()
  const router = useRouter()

  const [productList, setProductList] = useState<ProductListResult>({
    loading: false,
    result: undefined
  })

  const handleGetProductList = (request: ProductListRequest) => {
    console.log('🚀 -> handleGetProductList -> request', request)
    setProductList((prev: ProductListResult) => ({ ...prev, loading: true }))
    productService
      .getProductsPerPage({
        products,
        page: request.page,
        rows_per_page: request.rows_per_page
      })
      .then((result) => setProductList({ loading: false, result }))
      .catch(() => setProductList({ loading: false, result: null }))
  }

  const breadcrumbItems: Partial<BreadCrumbItem>[] = [
    {
      ...ROUTES.home,
      active: true
    }
  ]

  useEffect(() => {
    if (products !== null) {
      handleGetProductList({ products, page: 1, rows_per_page: PRODUCT_ROW_PER_PAGE })
    }
  }, [products])

  return (
    <>
      <BreadCrumb items={breadcrumbItems} />
      <section>
        {productList.loading ? (
          <div>Loading...</div>
        ) : (
          productList.result !== undefined &&
          (productList.result === null ? (
            <div>Ürünler bulunamadı</div>
          ) : (
            <>
              <div className={styles['product-list']}>
                {productList.result.data?.map((product) => {
                  const { id, title, handle, price, image } = product
                  return (
                    <ProductCard key={id} title={title} path={handle} price={price} image={image} />
                  )
                })}
              </div>
              <div className={styles.pagination}>
                <Pagination
                  defaultCurrent={productList.result.current_page}
                  total={productList.result.total_rows}
                  pageSize={productList.result.rows_per_page}
                  onChange={(page: number, pageSize: number) =>
                    handleGetProductList({ products, page, rows_per_page: pageSize })
                  }
                />
              </div>
            </>
          ))
        )}
      </section>
    </>
  )
}
