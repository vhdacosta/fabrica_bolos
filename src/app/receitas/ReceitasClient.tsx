'use client'

import { useState, useMemo } from 'react'
import SearchBar from '@/components/search/SearchBar'
import RecipeGrid from '@/components/recipes/RecipeGrid'
import type { Recipe } from '@/types'

interface ReceitasClientProps {
  initialRecipes: Recipe[]
}

export default function ReceitasClient({ initialRecipes }: ReceitasClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'facil' | 'medio' | 'avancado'>('all')

  const filteredRecipes = useMemo(() => {
    let recipes = initialRecipes

    // Filtro por busca
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      recipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerQuery) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        recipe.occasions.some(occ => occ.toLowerCase().includes(lowerQuery))
      )
    }

    // Filtro por categoria
    if (selectedCategory !== 'all') {
      recipes = recipes.filter(recipe => recipe.categoryId === selectedCategory)
    }

    // Filtro por dificuldade
    if (selectedDifficulty !== 'all') {
      recipes = recipes.filter(recipe => recipe.difficulty === selectedDifficulty)
    }

    return recipes
  }, [initialRecipes, searchQuery, selectedCategory, selectedDifficulty])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-playfair font-bold mb-4 text-cinza-texto">
          Todas as Receitas
        </h1>
        <p className="text-xl text-gray-600">
          Explore nossa coleção completa de receitas caseiras
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 flex justify-center">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-vermelho-bolo focus:outline-none"
        >
          <option value="all">Todas as categorias</option>
          <option value="bolos-simples">Bolos Simples</option>
          <option value="bolos-recheados">Bolos Recheados</option>
          <option value="bolos-festa">Bolos de Festa</option>
          <option value="datas-especiais">Datas Especiais</option>
          <option value="saudaveis">Saudáveis</option>
        </select>

        <select 
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value as any)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-vermelho-bolo focus:outline-none"
        >
          <option value="all">Todas as dificuldades</option>
          <option value="facil">Fácil</option>
          <option value="medio">Médio</option>
          <option value="avancado">Avançado</option>
        </select>
      </div>

      {/* Results */}
      <RecipeGrid recipes={filteredRecipes} />
      
      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhuma receita encontrada com os filtros selecionados.</p>
        </div>
      )}
    </div>
  )
}
