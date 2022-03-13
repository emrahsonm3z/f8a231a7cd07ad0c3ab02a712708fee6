import 'rc-pagination/assets/index.css'

import RCPagination, { PaginationProps } from 'rc-pagination'
import React from 'react'

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <RCPagination {...props} />
}
