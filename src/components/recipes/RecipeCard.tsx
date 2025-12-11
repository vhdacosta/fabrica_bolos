import Image from 'next/image'
import Link from 'next/link'
import { FiClock, FiUsers } from 'react-icons/fi'

interface RecipeCardProps {
  slug: string
  title: string
  imageUrl?: string
  prepTime: number
  cookTime: number
  servings: number
  difficulty: 'facil' | 'medio' | 'avancado'
  tags: string[]
  highlight?: boolean
}

export default function RecipeCard({
  slug,
  title,
  imageUrl,
  prepTime,
  cookTime,
  servings,
  difficulty,
  tags,
  highlight
}: RecipeCardProps) {
  const totalTime = prepTime + cookTime
  
  const difficultyMap = {
    facil: 'Fácil',
    medio: 'Médio',
    avancado: 'Avançado'
  }

  return (
    <Link href={`/receitas/${slug}`} className="card group">
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-rosa-bolo">
            <span className="text-4xl">🍰</span>
          </div>
        )}
        
        {highlight && (
          <div className="absolute top-2 right-2 bg-vermelho-bolo text-white px-3 py-1 rounded-full text-xs font-semibold">
            Em Destaque
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-playfair text-xl font-semibold mb-2 text-cinza-texto group-hover:text-vermelho-bolo transition-colors line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <FiClock className="w-4 h-4" />
            <span>{totalTime} min</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiUsers className="w-4 h-4" />
            <span>{servings} porções</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded-full ${
            difficulty === 'facil' ? 'bg-green-100 text-green-700' :
            difficulty === 'medio' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {difficultyMap[difficulty]}
          </span>

          {tags.length > 0 && (
            <div className="flex gap-1">
              {tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
