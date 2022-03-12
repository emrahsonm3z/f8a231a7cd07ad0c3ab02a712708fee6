import { request } from '~/utils/request'

interface IProductService {
  getAll(params?: Record<string, any>): Promise<any>
}

const getAll = async (params?: Record<string, any>): Promise<any> =>
  request.get('/products', { params })

export const productService: IProductService = {
  getAll
}
