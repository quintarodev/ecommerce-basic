import { cartStore } from '../state'

export const useCart = () => {
  const {
    addProductToCart,
    cart,
    deleteProductToCart,
    plusQuantity,
    minusQuantity,
  } = cartStore()

  return {
    cart,
    addProductToCart,
    deleteProductToCart,
    plusQuantity,
    minusQuantity,
  }
}
