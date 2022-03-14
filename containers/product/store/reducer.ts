import { Product } from '../types/Product'

export interface IProductState {
  products: Product[]
}

export type ProductActions = {
  type: 'GET_ALL_PRODUCTS'
  payload: Product[] | null
}

export const productReducer = (
  state: IProductState,
  action: Required<ProductActions>
): IProductState => {
  const { payload, type } = action

  switch (type) {
    case 'GET_ALL_PRODUCTS':
      return { ...state, products: payload }

    default:
      return state
  }
}
