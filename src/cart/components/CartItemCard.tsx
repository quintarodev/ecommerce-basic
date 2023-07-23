import { MinusIcon, PlusIcon, Trash2 } from 'lucide-react'
import { FC } from 'react'

import { useCart } from '../hook/useCart'
import { CartItem } from '../state'

import { Button } from '@/components/ui'
interface Props {
  cartItem: CartItem
}
const CartItemCard: FC<Props> = ({ cartItem: item }: Props) => {
  const { deleteProductToCart, minusQuantity, plusQuantity } = useCart()

  /* const minusQuantity = () => setQuantity((q) => q - 1)
  const plusQuantity = () => setQuantity((q) => q + 1) */

  return (
    <div
      key={item.id}
      className='flex space-x-2 border  rounded-xl p-6 max-w-lg'
    >
      <img
        alt=''
        className='w-[180px] shadow-sm border rounded-md aspect-square'
        src={item.thumbnail}
      />
      <div className='flex flex-col justify-between py-6  w-full'>
        <div className='flex items-start justify-between w-full'>
          <div>
            <span className='text-gray-800 text-lg font-semibold'>
              {item.price.toLocaleString('es-pe', {
                style: 'currency',
                currency: 'PEN',
              })}
            </span>
            <h4 className='text-sm font-semibold text-gray-500'>
              {item.title}
            </h4>
          </div>
          <Button
            size={'icon'}
            variant={'link'}
            onClick={() => deleteProductToCart(item.id)}
          >
            <Trash2 className='text-gray-600' />
          </Button>
        </div>
        <div className='flex items-center '>
          <Button
            disabled={item.quantity === 1}
            size={'icon'}
            onClick={() => minusQuantity(item.id)}
          >
            <MinusIcon />
          </Button>
          <span className='w-20 text-center font-semibold'>
            {item.quantity}
          </span>
          <Button size={'icon'} onClick={() => plusQuantity(item.id)}>
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
