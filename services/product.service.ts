import { Product } from '~/container/product/types/Product'
import { request } from '~/utils/request'

interface IProductService {
  getAll(params?: Record<string, any>): Promise<Product[]>
}

const getAll = async (params?: Record<string, any>): Promise<Product[]> =>
  request.get('/products', { params })

export const productService: IProductService = {
  getAll
}
