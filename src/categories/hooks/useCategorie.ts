import { categorieStore } from '../state'

export const useCategorie = () => {
  const { categories } = categorieStore()

  return { categories }
}
