import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

import styles from './BreadCrumb.module.css'

export type BreadCrumbItem = {
  title: string
  path: string
  active: boolean
}

interface IBreadCrumbProps {
  items: Partial<BreadCrumbItem>[]
}

export const BreadCrumb: React.FC<IBreadCrumbProps> = ({ items }) => {
  return (
    <nav className={styles.nav}>
      <ol className={styles['breadcrumb-list']}>
        {items.map((item) => (
          <li
            key={item.path}
            className={cn(styles.breadcrumb__item, { [styles['breadcrumb--active']]: item.active })}
          >
            <Link href={item.path}>
              <a href={item.path}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
