import type { NextPage } from 'next'

import { Layout } from '~/components/layout'
import { ProductList } from '~/container/product'

const AllProducts: NextPage = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  )
}

export default AllProducts
