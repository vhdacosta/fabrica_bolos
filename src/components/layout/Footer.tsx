import Link from 'next/link'
import { FiFacebook, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-cinza-texto text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-creme-baunilha">
              Fábrica de Bolos
            </h3>
            <p className="text-gray-300 text-sm">
              Bolos caseiros da nossa cozinha para a sua mesa. Feito com carinho e tradição.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-creme-baunilha">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/receitas" className="text-gray-300 hover:text-creme-baunilha transition-colors">Receitas</Link></li>
              <li><Link href="/categorias" className="text-gray-300 hover:text-creme-baunilha transition-colors">Categorias</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-creme-baunilha transition-colors">Blog</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-creme-baunilha transition-colors">Sobre</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-creme-baunilha">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categorias/bolos-simples" className="text-gray-300 hover:text-creme-baunilha transition-colors">Bolos Simples</Link></li>
              <li><Link href="/categorias/bolos-recheados" className="text-gray-300 hover:text-creme-baunilha transition-colors">Bolos Recheados</Link></li>
              <li><Link href="/categorias/bolos-festa" className="text-gray-300 hover:text-creme-baunilha transition-colors">Bolos de Festa</Link></li>
              <li><Link href="/categorias/datas-especiais" className="text-gray-300 hover:text-creme-baunilha transition-colors">Datas Especiais</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-creme-baunilha">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-creme-baunilha transition-colors">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-creme-baunilha transition-colors">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-creme-baunilha transition-colors">
                <FiYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-creme-baunilha transition-colors">
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fábrica de Bolos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
