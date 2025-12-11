import Link from 'next/link'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import SearchBarWrapper from '@/components/search/SearchBarWrapper'
import CategoryCard from '@/components/categories/CategoryCard'
import RecipeCard from '@/components/recipes/RecipeCard'
import Button from '@/components/ui/Button'
import { getCategories, getHighlightedRecipes } from '@/lib/data'

export default async function HomePage() {
  const categories = await getCategories()
  const featuredRecipes = await getHighlightedRecipes(3)

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vermelho-bolo to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Bolos caseiros da nossa cozinha para a sua mesa
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Receitas tradicionais com sabor de memória afetiva e muito carinho
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/receitas">
                <Button variant="secondary" className="bg-white text-vermelho-bolo hover:bg-gray-100">
                  Ver todas as receitas
                </Button>
              </Link>
              <Link href="/receitas/bolo-laranja-simples">
                <Button variant="secondary" className="bg-transparent border-white hover:bg-white hover:text-vermelho-bolo">
                  Bolo do dia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-cinza-texto">
              O que você quer preparar hoje?
            </h2>
            <SearchBarWrapper />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-cinza-texto">
            Categorias em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-cinza-texto">
              Receitas em Destaque
            </h2>
            <Link href="/receitas" className="text-vermelho-bolo hover:underline font-semibold">
              Ver todas →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
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
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-creme-baunilha">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold mb-6 text-cinza-texto">
                  Nossa História
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Cada receita aqui tem um pouco da nossa história e muito amor envolvido. 
                  Começamos na cozinha de casa, com receitas passadas de geração em geração.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Hoje compartilhamos esses sabores especiais com você, para que possa criar 
                  suas próprias memórias afetivas em família.
                </p>
                <Link href="/sobre">
                  <Button variant="primary">Conheça nossa história</Button>
                </Link>
              </div>
              <div className="relative h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  👵🍰
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-cinza-texto">
              Dicas e Novidades
            </h2>
            <Link href="/blog" className="text-vermelho-bolo hover:underline font-semibold">
              Ver blog →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Como fazer bolo fofinho', date: '10 dez 2025' },
              { title: 'Segredos da cobertura perfeita', date: '8 dez 2025' },
              { title: 'Receitas para festas juninas', date: '5 dez 2025' },
            ].map((post, i) => (
              <div key={i} className="card p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="font-playfair text-xl font-semibold text-cinza-texto hover:text-vermelho-bolo">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-vermelho-bolo text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Comece pela nossa receita mais famosa
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            O Bolo de Laranja Simples da Vó é campeão de acessos e perfeito para iniciantes!
          </p>
          <Link href="/receitas/bolo-laranja-simples">
            <Button variant="secondary" className="bg-white text-vermelho-bolo hover:bg-gray-100">
              Ver receita completa
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
