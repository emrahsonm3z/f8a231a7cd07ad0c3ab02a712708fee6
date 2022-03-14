import React from 'react'

import { BreadCrumb, BreadCrumbItem } from '~/components/breadcrumb/BreadCrumb'
import { ProductDetailCard } from '~/components/product/ProductDetailCard'
import { ROUTES } from '~/constants/routes'

import { Product } from '../types/Product'

type ProductDetailProps = {
  product: Product
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const breadcrumbItems: Partial<BreadCrumbItem>[] = [
    ROUTES.home,
    {
      title: product.title,
      path: `/product/${product.handle}`,
      active: true
    }
  ]

  return (
    <>
      <BreadCrumb items={breadcrumbItems} />
      <ProductDetailCard title={product.title} price={product.price} image={product.image} />
    </>
  )
}
