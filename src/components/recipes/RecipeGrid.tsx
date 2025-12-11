import RecipeCard from './RecipeCard'
import type { Recipe } from '@/types'

interface RecipeGridProps {
  recipes: Recipe[]
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhuma receita encontrada.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          slug={recipe.slug}
          title={recipe.title}
          imageUrl={recipe.imageUrl}
          prepTime={recipe.prepTimeMinutes}
          cookTime={recipe.cookTimeMinutes}
          servings={recipe.servings}
          difficulty={recipe.difficulty}
          tags={recipe.tags}
          highlight={recipe.highlight}
        />
      ))}
    </div>
  )
}
