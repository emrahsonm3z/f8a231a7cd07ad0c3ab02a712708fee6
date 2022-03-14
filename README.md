## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

These variables must be set

> API_URL=
> ACCESS_TOKEN=

### Note:

The project was created with Next.js to avoid dealing with packaging processes.
All the records were taken from the product service and the desired operations were performed.

### Defaults

> It is assumed that the product list does not change to exemplify the global state and reducer usage in the project. And the product list is stored on the global state. In every routing change, the product list on the global state is checked. If there is no product list on the global state, a service call is made and the state is filled.
>
> These operations are done on **containers/product/store/provider.tsx**.
>
> PRODUCT_ROW_PER_PAGE : 10

### General Rules:

When the data is to be retrieved, loading is first shown on the screen. After the service answers, data or error message is displayed on the screen.

**params**

- loading (boolean)
- data (object | array | null)

### Test

**utils/findInValues.ts**
A test is written for the search operation from the given array.

### Product Types

```
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

```
