import { FC, useRef, useState } from 'react'

import { ProductType } from '..'

import ProductSheet from './ProductSheet'

import { Skeleton } from '@/components/ui/skeleton'

interface Props {
  product: ProductType
}
const ProductCard: FC<Props> = ({ product }: Props) => {
  const refProduct = useRef<HTMLDivElement | null>(null)
  const [isLoad, setIsLoad] = useState(false)

  return (
    <>
      <div
        ref={refProduct}
        className=' h-full flex flex-col justify-between gap-4'
      >
        <div>
          <div>
            {isLoad ? null : <Skeleton className='h-[180px] w-[180px] ' />}
            <img
              alt=''
              className='aspect-square rounded-md object-cover'
              src={product.thumbnail}
              onLoad={() => {
                setIsLoad(true)
              }}
            />
          </div>
          <h3 className=''>{product.title}</h3>
        </div>
        <ProductSheet product={product} />
      </div>
    </>
  )
}

export default ProductCard
