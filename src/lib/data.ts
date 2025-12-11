import { promises as fs } from 'fs'
import path from 'path'
import type { Recipe, Category } from '@/types'

const dataDir = path.join(process.cwd(), 'src', 'data')
const recipesDir = path.join(dataDir, 'recipes')

// Cache para evitar leituras repetidas
let categoriesCache: Category[] | null = null
let recipesCache: Recipe[] | null = null

export async function getCategories(): Promise<Category[]> {
  if (categoriesCache) return categoriesCache

  try {
    const filePath = path.join(dataDir, 'categories.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    categoriesCache = JSON.parse(fileContent)
    return categoriesCache!
  } catch (error) {
    console.error('Error loading categories:', error)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories()
  return categories.find(cat => cat.slug === slug) || null
}

export async function getAllRecipes(): Promise<Recipe[]> {
  if (recipesCache) return recipesCache

  try {
    const files = await fs.readdir(recipesDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    const recipes = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(recipesDir, file)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(fileContent) as Recipe
      })
    )

    recipesCache = recipes
    return recipes
  } catch (error) {
    console.error('Error loading recipes:', error)
    return []
  }
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const filePath = path.join(recipesDir, `${slug}.json`)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    return null
  }
}

export async function getRecipesByCategory(categorySlug: string): Promise<Recipe[]> {
  const recipes = await getAllRecipes()
  const category = await getCategoryBySlug(categorySlug)
  
  if (!category) return []
  
  return recipes.filter(recipe => recipe.categoryId === category.id)
}

export async function searchRecipes(query: string): Promise<Recipe[]> {
  const recipes = await getAllRecipes()
  const lowerQuery = query.toLowerCase()

  return recipes.filter(recipe => {
    return (
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      recipe.occasions.some(occ => occ.toLowerCase().includes(lowerQuery))
    )
  })
}

export interface RecipeFilters {
  q?: string
  category?: string
  difficulty?: 'facil' | 'medio' | 'avancado' | 'all'
  tag?: string
  occasion?: string
  maxTime?: number
}

export async function filterRecipes(filters: RecipeFilters): Promise<Recipe[]> {
  let recipes = await getAllRecipes()

  // Busca por texto
  if (filters.q) {
    const lowerQuery = filters.q.toLowerCase()
    recipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      recipe.occasions.some(occ => occ.toLowerCase().includes(lowerQuery))
    )
  }

  // Filtro por categoria
  if (filters.category && filters.category !== 'all') {
    const category = await getCategoryBySlug(filters.category)
    if (category) {
      recipes = recipes.filter(recipe => recipe.categoryId === category.id)
    }
  }

  // Filtro por dificuldade
  if (filters.difficulty && filters.difficulty !== 'all') {
    recipes = recipes.filter(recipe => recipe.difficulty === filters.difficulty)
  }

  // Filtro por tag
  if (filters.tag) {
    recipes = recipes.filter(recipe => recipe.tags.includes(filters.tag!))
  }

  // Filtro por ocasião
  if (filters.occasion) {
    recipes = recipes.filter(recipe => recipe.occasions.includes(filters.occasion!))
  }

  // Filtro por tempo máximo
  if (filters.maxTime) {
    recipes = recipes.filter(recipe => 
      (recipe.prepTimeMinutes + recipe.cookTimeMinutes) <= filters.maxTime!
    )
  }

  // Ordenar: highlight primeiro, depois por views, depois por data
  return recipes.sort((a, b) => {
    if (a.highlight && !b.highlight) return -1
    if (!a.highlight && b.highlight) return 1
    if (a.views !== b.views) return b.views - a.views
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

export async function getHighlightedRecipes(limit: number = 6): Promise<Recipe[]> {
  const recipes = await getAllRecipes()
  return recipes
    .filter(recipe => recipe.highlight)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

export async function getRelatedRecipes(recipe: Recipe, limit: number = 3): Promise<Recipe[]> {
  const recipes = await getAllRecipes()
  
  return recipes
    .filter(r => r.id !== recipe.id)
    .filter(r => 
      r.categoryId === recipe.categoryId ||
      r.tags.some(tag => recipe.tags.includes(tag))
    )
    .slice(0, limit)
}

// Função para limpar cache (útil em desenvolvimento)
export function clearCache() {
  categoriesCache = null
  recipesCache = null
}
