import { Heart, MinusIcon, PlusIcon, Share2, ShoppingCart } from 'lucide-react'
import { FC, useState } from 'react'

import { ProductType } from '..'

import { useCart } from '@/cart/hook/useCart'
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui'
interface Props {
  product: ProductType
}
const ProductSheet: FC<Props> = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const { addProductToCart } = useCart()
  const addCart = () => {
    addProductToCart({ ...product, quantity })
  }
  const plusQuantity = () => setQuantity((q) => q + 1)
  const minusQuantity = () => setQuantity((q) => q - 1)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='w-full' size={'lg'}>
          <ShoppingCart className='w-4 h-4 text-white' />
          <span className='text-lg'>Agregar</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='grid grid-rows-[auto_1fr_auto]'>
        <SheetHeader>
          <div className='mt-2 flex items-center justify-end '>
            <Button size={'icon'} variant={'link'}>
              <Heart className='text-gray-700' />
            </Button>
            <Button size={'icon'} variant={'link'}>
              <Share2 className='text-gray-700' />
            </Button>
            <Button size={'icon'} variant={'link'}>
              <ShoppingCart className='text-gray-700' />
            </Button>
          </div>
        </SheetHeader>

        <div className=''>
          <img
            alt=''
            className='object-cover rounded-lg'
            src={product.thumbnail}
          />
        </div>

        <SheetFooter>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between'>
              <Button
                className={
                  quantity === 2
                    ? 'cursor-not-allowed text-blue-500'
                    : 'cursor-default'
                }
                disabled={quantity === 2}
                size={'icon'}
                onClick={minusQuantity}
              >
                <MinusIcon />
              </Button>
              <span>{quantity}</span>
              <Button size={'icon'} onClick={plusQuantity}>
                <PlusIcon />
              </Button>
            </div>
            <SheetClose asChild>
              <Button className='w-full text-lg' size={'lg'} onClick={addCart}>
                Agregar al carrito
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ProductSheet
