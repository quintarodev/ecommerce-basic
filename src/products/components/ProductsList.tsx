import { FC } from 'react'

import { ProductCard, ProductType } from '..'
interface Props {
  products: ProductType[]
}
const ProductsList: FC<Props> = ({ products }: Props) => {
  return (
    <section className='grid grid-cols-4 gap-8'>
      {products.map((product) => (
        <article key={product.id}>
          <ProductCard product={product} />
        </article>
      ))}
    </section>
  )
}

export default ProductsList
