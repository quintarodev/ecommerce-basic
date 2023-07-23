import { ShoppingCart } from 'lucide-react'
import { Link } from 'wouter'

import { useCart } from '../hook/useCart'

import { Button } from '@/components/ui'

function CartButton() {
  const { cart } = useCart()

  return (
    <Button asChild size={'icon'} variant={'link'}>
      <Link href='/cart'>
        <ShoppingCart className=' text-gray-700' />
        {cart.length}
      </Link>
    </Button>
  )
}

export default CartButton
