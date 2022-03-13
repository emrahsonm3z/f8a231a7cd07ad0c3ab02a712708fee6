import Image from 'next/image'
import React from 'react'

import styles from './Product.module.css'

interface IProductCardProps {
  title: string
  price: string
  image: string
}

export const ProductDetailCard: React.FC<IProductCardProps> = ({ title, price, image }) => {
  return (
    <div className={styles['product-detail']}>
      <div className={styles['product-detail__image']}>
        <Image src={image} alt={title} width={250} height={250} objectFit="contain" />
      </div>
      <span className={styles['product-detail__info']}>
        <span className={styles['product-detail__title']}>{title}</span>
        <span className={styles['product-detail__price']}>{price}</span>
      </span>
    </div>
  )
}
