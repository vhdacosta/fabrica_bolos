import { notFound } from 'next/navigation'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiClock, FiUsers, FiPrinter, FiBookmark } from 'react-icons/fi'
import { getRecipeBySlug, getCategoryBySlug, getRelatedRecipes, getAllRecipes } from '@/lib/data'

// Gerar todos os slugs das receitas para exportação estática
export async function generateStaticParams() {
  const recipes = await getAllRecipes()
  
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default async function ReceitaPage({ params }: { params: { slug: string } }) {
  const recipe = await getRecipeBySlug(params.slug)

  if (!recipe) {
    notFound()
  }

  const category = await getCategoryBySlug(recipe.categoryId)
  const relatedRecipes = await getRelatedRecipes(recipe, 3)

  const difficultyMap = {
    facil: 'Fácil',
    medio: 'Médio',
    avancado: 'Avançado'
  }

  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{category?.name || 'Categoria'}</Badge>
            <Badge variant={recipe.difficulty === 'facil' ? 'success' : recipe.difficulty === 'medio' ? 'warning' : 'primary'}>
              {difficultyMap[recipe.difficulty]}
            </Badge>
            {recipe.tags.map((tag: string) => (
              <Badge key={tag} variant="info">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-5xl font-playfair font-bold mb-4 text-cinza-texto">
            {recipe.title}
          </h1>

          {recipe.subtitle && (
            <p className="text-xl text-gray-600 mb-6">{recipe.subtitle}</p>
          )}

          <div className="flex flex-wrap gap-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <FiClock className="w-5 h-5" />
              <span><strong>Tempo total:</strong> {totalTime} min</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiUsers className="w-5 h-5" />
              <span><strong>Porções:</strong> {recipe.servings}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button variant="primary" className="flex items-center gap-2">
              <FiPrinter /> Imprimir
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <FiBookmark /> Salvar
            </Button>
          </div>
        </header>

        {/* Image */}
        <div className="relative h-96 bg-gradient-to-br from-creme-baunilha to-rosa-bolo rounded-2xl overflow-hidden mb-12">
          {recipe.imageUrl ? (
            <Image src={recipe.imageUrl} alt={recipe.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-9xl">
              🍊🍰
            </div>
          )}
        </div>

        {/* Ingredients */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-cinza-texto">
            Ingredientes
          </h2>
          {recipe.ingredients.map((section: any, idx: number) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-vermelho-bolo">
                {section.section}
              </h3>
              <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                {section.items.map((item: any, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-vermelho-bolo mr-2">•</span>
                    <span>
                      {item.quantity} {item.unit} de {item.name}
                      {item.notes && <span className="text-gray-600 text-sm ml-2">({item.notes})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-cinza-texto">
            Modo de Preparo
          </h2>
          <ol className="space-y-4">
            {recipe.steps.map((step: any) => (
              <li key={step.order} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-vermelho-bolo text-white rounded-full flex items-center justify-center font-bold">
                  {step.order}
                </span>
                <p className="flex-1 pt-1">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        {recipe.tips && (
          <section className="mb-12">
            <div className="bg-creme-baunilha p-6 rounded-lg border-l-4 border-vermelho-bolo">
              <h2 className="text-2xl font-playfair font-bold mb-4 text-cinza-texto flex items-center gap-2">
                💡 Dicas da Vó
              </h2>
              <p className="text-gray-700">{recipe.tips}</p>
            </div>
          </section>
        )}

        {/* Related Recipes */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-6 text-cinza-texto">
            Receitas Relacionadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRecipes.map((related) => (
              <a key={related.id} href={`/receitas/${related.slug}`} className="card p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">🍰</div>
                <p className="font-semibold">{related.title}</p>
              </a>
            ))}
          </div>
        </section>
      </article>
    </MainLayout>
  )
}
