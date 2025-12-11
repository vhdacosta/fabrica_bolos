export interface Recipe {
  id: string
  slug: string
  title: string
  subtitle?: string
  categoryId: string
  difficulty: 'facil' | 'medio' | 'avancado'
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  highlight: boolean
  imageUrl?: string
  videoUrl?: string
  ingredients: Ingredient[]
  steps: Step[]
  tips?: string
  occasions: string[]
  tags: string[]
  views: number
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
  category?: Category
}

export interface Ingredient {
  section: string
  items: IngredientItem[]
}

export interface IngredientItem {
  name: string
  quantity: number
  unit: string
  notes?: string
}

export interface Step {
  order: number
  text: string
}

export interface Category {
  id: string
  slug: string
  name: string
  description?: string
  icon?: string
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  body: string
  excerpt?: string
  tags: string[]
  imageUrl?: string
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}
