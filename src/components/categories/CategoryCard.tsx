import Link from 'next/link'

interface CategoryCardProps {
  slug: string
  name: string
  description?: string
  icon?: string
  recipeCount?: number
}

export default function CategoryCard({ slug, name, description, icon, recipeCount }: CategoryCardProps) {
  return (
    <Link 
      href={`/categorias/${slug}`}
      className="card bg-gradient-to-br from-rosa-bolo to-white p-6 text-center group"
    >
      <div className="text-5xl mb-3">{icon || '🍰'}</div>
      <h3 className="font-playfair text-xl font-semibold mb-2 text-cinza-texto group-hover:text-vermelho-bolo transition-colors">
        {name}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
      )}
      {recipeCount !== undefined && (
        <p className="text-sm text-vermelho-bolo font-semibold">
          {recipeCount} {recipeCount === 1 ? 'receita' : 'receitas'}
        </p>
      )}
    </Link>
  )
}
