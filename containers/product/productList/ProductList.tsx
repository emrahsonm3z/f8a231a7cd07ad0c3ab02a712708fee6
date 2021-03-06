/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { BreadCrumb, BreadCrumbItem } from '~/components/breadcrumb/BreadCrumb'
import { Pagination } from '~/components/pagination'
import { ProductCard } from '~/components/product/ProductCard'
import { PRODUCT_ROW_PER_PAGE, SEARCH_QUERY_NAME } from '~/constants'
import { ROUTES } from '~/constants/routes'
import { productService } from '~/services/product.service'
import { findInValues } from '~/utils/findInValues'

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

  const [filteredProducts, setFilteredProducts] = useState(products)

  const [productList, setProductList] = useState<ProductListResult>({
    loading: false,
    result: undefined
  })

  const handleGetProductList = (request: ProductListRequest) => {
    setProductList((prev: ProductListResult) => ({ ...prev, loading: true }))
    productService
      .getProductsPerPage({
        products: request.products,
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
    if (filteredProducts !== null) {
      handleGetProductList({
        products: filteredProducts,
        page: 1,
        rows_per_page: PRODUCT_ROW_PER_PAGE
      })
    }
  }, [filteredProducts, setFilteredProducts])

  useEffect(() => {
    if (
      typeof router.query[SEARCH_QUERY_NAME] !== 'undefined' &&
      router.query[SEARCH_QUERY_NAME] !== ''
    ) {
      const searchProducts = findInValues(products, router.query[SEARCH_QUERY_NAME])
      setFilteredProducts(searchProducts)
    } else {
      setFilteredProducts(products)
    }
  }, [router])

  return (
    <>
      <BreadCrumb items={breadcrumbItems} />
      <section>
        {productList.loading ? (
          <div>Loading...</div>
        ) : (
          productList.result !== undefined &&
          (productList.result === null ? (
            <div>??r??nler bulunamad??</div>
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
                    handleGetProductList({
                      products: filteredProducts,
                      page,
                      rows_per_page: pageSize
                    })
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
