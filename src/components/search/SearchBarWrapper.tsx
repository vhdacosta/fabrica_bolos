'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'

export default function SearchBarWrapper() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.trim()) {
      router.push(`/receitas?q=${encodeURIComponent(value)}`)
    }
  }

  return <SearchBar value={query} onChange={handleSearch} />
}
