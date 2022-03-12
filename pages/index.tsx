import type { NextPage } from 'next'

import { ProductList } from '~/container/product'

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <ProductList />
      </main>
    </div>
  )
}

export default Home
