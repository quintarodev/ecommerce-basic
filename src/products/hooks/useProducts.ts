import { useRef, useEffect } from 'react'

import { storeProducts } from '../state'
import { ProductType } from '..'

export const useProducts = () => {
  const { products, updateProducts } = storeProducts()
  const refProducts = useRef<ProductType[]>([])

  useEffect(() => {
    refProducts.current = products
  }, [])
  const reset = () => {
    updateProducts(refProducts.current)
  }

  return { products, reset }
}
