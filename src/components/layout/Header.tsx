import Link from 'next/link'
import { FiSearch, FiUser } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-playfair font-bold text-vermelho-bolo">
              Fábrica de Bolos
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/receitas" className="text-cinza-texto hover:text-vermelho-bolo transition-colors font-semibold">
              Receitas
            </Link>
            <Link href="/categorias" className="text-cinza-texto hover:text-vermelho-bolo transition-colors font-semibold">
              Categorias
            </Link>
            <Link href="/blog" className="text-cinza-texto hover:text-vermelho-bolo transition-colors font-semibold">
              Blog
            </Link>
            <Link href="/sobre" className="text-cinza-texto hover:text-vermelho-bolo transition-colors font-semibold">
              Sobre
            </Link>
            <Link href="/contato" className="text-cinza-texto hover:text-vermelho-bolo transition-colors font-semibold">
              Contato
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiSearch className="w-5 h-5 text-cinza-texto" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiUser className="w-5 h-5 text-cinza-texto" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
