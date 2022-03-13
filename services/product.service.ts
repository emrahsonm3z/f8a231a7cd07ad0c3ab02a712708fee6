import { ProductListRequest, ProductListResponse } from '~/container/product/types/Product'
import { request } from '~/utils/request'

interface IProductService {
  getAll(params?: Record<string, any>): Promise<any>
  getProductsPerPage(params: ProductListRequest): Promise<ProductListResponse>
}

const getAll = async (params?: Record<string, any>): Promise<any> =>
  request.get('/products', { params })

const getProductsPerPage = ({
  products,
  page,
  rows_per_page
}: ProductListRequest): Promise<ProductListResponse> => {
  const result = products.slice((page - 1) * rows_per_page, page * rows_per_page)

  return new Promise((resolve) => {
    resolve({
      current_page: page,
      data: result,
      next: page * rows_per_page < products.length ? page + 1 : null,
      prev: page === 1 ? null : page - 1,
      rows_per_page,
      rows_returned: result.length,
      total_pages: Math.ceil(products.length / rows_per_page),
      total_rows: products.length
    })
  })
}

export const productService: IProductService = {
  getAll,
  getProductsPerPage
}
