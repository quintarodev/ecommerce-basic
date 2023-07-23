import { Button, Wrapper } from './ui'

import { useCategorie } from '@/categories'
import { useFilters } from '@/hooks/useFilters'

function Filters() {
  const { categories } = useCategorie()
  const { categorieSelected, updateCategorie } = useFilters()

  return (
    <section>
      <Wrapper className='border p-6 rounded-lg shadow-sm flex flex-col space-y-6'>
        <h2 className='text-2xl font-bold text-gray-700'>Categorias</h2>
        <ul className='flex items-center space-x-6'>
          {categories.map((cat) => (
            <li key={cat.id}>
              <div>
                <Button
                  className='capitalize'
                  variant={
                    cat.name === categorieSelected ? 'default' : 'secondary'
                  }
                  onClick={() => {
                    updateCategorie(cat.name)
                  }}
                >
                  {cat.name}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Filters
