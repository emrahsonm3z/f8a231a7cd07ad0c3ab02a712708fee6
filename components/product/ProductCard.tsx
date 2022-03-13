import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './Product.module.css'

interface IProductCardProps {
  title: string
  price: string
  path: string
  image: string
}

export const ProductCard: React.FC<IProductCardProps> = ({ title, price, path, image }) => {
  return (
    <Link href={`product/${path}`}>
      <a href={`product/${path}`}>
        <div className={styles['product-card']}>
          <div className={styles['product-card__image']}>
            <Image src={image} alt={title} width={100} height={100} objectFit="contain" />
          </div>
          <span className={styles['product-card__title']}>{title}</span>
          <span className={styles['product-card__price']}>{price}</span>
        </div>
      </a>
    </Link>
  )
}
