import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Layout } from '~/components/layout'
import { ProductDetail } from '~/containers/product'
import { useProductContext } from '~/containers/product/store/context'
import { Product } from '~/containers/product/types/Product'
import sleep from '~/utils/sleep'

type ProductDetailPageProps = {
  data: Product | null
  loading: boolean
}

const ProductDetailPage: NextPage = () => {
  const router = useRouter()
  const { products } = useProductContext()
  const [product, setProduct] = useState<ProductDetailPageProps>({ loading: true, data: null })

  const getProduct = ({ slug }: { slug: string }): void => {
    setProduct((prev: ProductDetailPageProps) => ({ ...prev, loading: true }))

    sleep(500)
      .then(() => {
        setProduct({ loading: false, data: products.find((p) => p.handle === slug) })
      })
      .catch(() => setProduct({ loading: false, data: null }))
  }

  useEffect(() => {
    if (typeof router.query.index !== 'undefined' && products !== null) {
      getProduct({ slug: router.query.index as string })
    }
  }, [router, products])

  return (
    <Layout>
      {product.loading ? (
        <div>Loading..</div>
      ) : product.data === null ? (
        <div>Ürün bulunamadı</div>
      ) : (
        <ProductDetail product={product.data} />
      )}
    </Layout>
  )
}

export default ProductDetailPage
