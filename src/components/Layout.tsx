import { Heart } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { Link } from 'wouter'

import { HeaderLinks } from './HeaderLinks'
import { Button, Wrapper } from './ui'
import { Input } from './ui/input'

import CartButton from '@/cart/components/CartButton'
interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <header>
        <Wrapper
          className='flex items-center justify-between'
          intent={'header'}
        >
          <Link className='flex items-center space-x-1' href='/'>
            <img alt='' className='h-10 object-cover' src='/vite.svg' />
            <span className='text-md uppercase font-bold'>MYStore</span>
          </Link>
          <HeaderLinks />
          <div className='flex items-center gap-x-6'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('ok')
              }}
            >
              <Input placeholder='Tablets, Fragancias' type='search' />
            </form>
            <div className='flex items-center'>
              <CartButton />
              <Button size={'icon'} variant={'link'}>
                <Heart className=' text-gray-700' />
              </Button>
            </div>
          </div>
        </Wrapper>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
