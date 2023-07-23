import { create } from 'zustand'

import { CATEGORIE_ENUM, CategorieEnumType } from '@/categories'

interface Props {
  categorieSelected: CategorieEnumType
  updateCategorie: (categorie: CategorieEnumType) => void
}

export const initialState = CATEGORIE_ENUM.all

export const useFilters = create<Props>((set) => ({
  categorieSelected: initialState,
  updateCategorie(categorie) {
    set(() => ({ categorieSelected: categorie }))
  },
}))
