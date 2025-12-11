import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fábrica de Bolos - Receitas caseiras com amor',
  description: 'Bolos caseiros da nossa cozinha para a sua mesa. Receitas tradicionais com sabor de memória afetiva.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
