import { create } from 'zustand'

import { ProductType } from '@/products'

export type CartItem = Pick<
  ProductType,
  'id' | 'title' | 'price' | 'thumbnail'
> & { quantity: number }

interface Props {
  cart: CartItem[]
  addProductToCart: (item: CartItem) => void
  deleteProductToCart: (id: CartItem['id']) => void
  plusQuantity: (id: CartItem['id']) => void
  minusQuantity: (id: CartItem['id']) => void
}

export const initialState = []

export const cartStore = create<Props>((set, get) => ({
  cart: initialState,
  addProductToCart(item) {
    set((state) => ({ cart: [...state.cart, item] }))
  },
  deleteProductToCart(id) {
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }))
  },
  plusQuantity(id) {
    const cartNew: CartItem[] = get().cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }

      return { ...item }
    })

    set(() => ({ cart: [...cartNew] }))
  },
  minusQuantity(id) {
    const cartNew: CartItem[] = get().cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 }
      }

      return { ...item }
    })

    set(() => ({ cart: [...cartNew] }))
  },
}))
