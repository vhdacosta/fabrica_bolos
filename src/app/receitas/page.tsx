import MainLayout from '@/components/layout/MainLayout'
import SearchBar from '@/components/search/SearchBar'
import RecipeGrid from '@/components/recipes/RecipeGrid'
import { getAllRecipes } from '@/lib/data'
import ReceitasClient from './ReceitasClient'

export default async function ReceitasPage() {
  const allRecipes = await getAllRecipes()

  return (
    <MainLayout>
      <ReceitasClient initialRecipes={allRecipes} />
    </MainLayout>
  )
}
