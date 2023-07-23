export const CATEGORIE_ENUM = {
  all: 'all',
  'home-decoration': 'home-decoration',
  laptops: 'laptops',
  smartphones: 'smartphones',
  fragrances: 'fragrances',
  skincare: 'skincare',
  groceries: 'groceries',
} as const

export type CategorieEnumType = keyof typeof CATEGORIE_ENUM

export type CategorieType = {
  id: number
  name: CategorieEnumType
  image?: string
}
