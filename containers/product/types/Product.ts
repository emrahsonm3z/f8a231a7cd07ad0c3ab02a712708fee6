export type Product = {
  id: number
  title: string
  price: string
  handle: string
  image: string
  body_html: string
}

export type ProductListRequest = {
  products: Product[]
  page: number
  rows_per_page: number
}

export type ProductListResponse = {
  current_page: number
  next: number | null
  prev: number | null
  total_pages: number
  total_rows: number
  rows_per_page: number
  rows_returned: number
  data: Product[]
}
