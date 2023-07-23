import Filters from '@/components/Filters'
import { Wrapper } from '@/components/ui'
import { useFilters } from '@/hooks/useFilters'
import { ProductsList, useProducts } from '@/products'

function HomePage() {
  const { products } = useProducts()

  const { categorieSelected } = useFilters()

  const productFiltered =
    categorieSelected !== 'all'
      ? products.filter((p) => p.category === categorieSelected)
      : products

  return (
    <Wrapper className='flex flex-col space-y-12'>
      <h1 className='text-4xl font-bold text-gray-700'>List of Products</h1>
      <Filters />
      <ProductsList products={productFiltered} />
    </Wrapper>
  )
}

export default HomePage
