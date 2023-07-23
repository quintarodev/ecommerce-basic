import { create } from 'zustand'

import { CATEGORIE_ENUM, CategorieType } from '../types.d'

interface Props {
  categories: CategorieType[]
  reset: () => void
}

export const initialState = [
  { id: 0, name: CATEGORIE_ENUM.all },
  { id: 1, name: CATEGORIE_ENUM['home-decoration'] },
  { id: 2, name: CATEGORIE_ENUM.laptops },
  { id: 3, name: CATEGORIE_ENUM.smartphones },
  { id: 4, name: CATEGORIE_ENUM.fragrances },
  { id: 5, name: CATEGORIE_ENUM.groceries },
  { id: 6, name: CATEGORIE_ENUM.skincare },
]

export const categorieStore = create<Props>((set) => ({
  categories: initialState,
  reset() {
    set(() => ({ categories: [...initialState] }))
  },
}))
