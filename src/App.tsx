import { Route } from 'wouter'

import Layout from './components/Layout'
import { home } from './pages'
import SearchPage from './pages/search'
import CartPage from './pages/cart'
function App() {
  return (
    <Layout>
      <Route component={home} path='/' />
      <Route component={CartPage} path='/cart' />
      <Route path='/products/:search'>
        {(params) => <SearchPage query={params.search} />}
      </Route>
    </Layout>
  )
}

export default App
