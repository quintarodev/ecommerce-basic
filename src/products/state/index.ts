import { create } from 'zustand'

import { ProductType } from '../types'

import { products } from '@/mocks/products.json'
interface Props {
  products: ProductType[]
  updateProducts: (products: ProductType[]) => void
}

export const initialProducts: ProductType[] = products

export const storeProducts = create<Props>((set) => ({
  products: initialProducts,
  updateProducts(products) {
    set(() => ({ products: [...products] }))
  },
}))
