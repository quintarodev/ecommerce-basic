import CartItemCard from '@/cart/components/CartItemCard'
import { useCart } from '@/cart/hook/useCart'
import { Wrapper } from '@/components/ui'

function CartPage() {
  const { cart } = useCart()

  return (
    <Wrapper intent={'section'}>
      <div className='grid grid-cols-1 gap-12'>
        <h2 className='text-4xl font-bold'>My cart</h2>
        {cart.map((item) => (
          <CartItemCard key={item.id} cartItem={item} />
        ))}
      </div>
    </Wrapper>
  )
}

export default CartPage
