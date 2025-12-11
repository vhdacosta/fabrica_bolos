interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-vermelho-bolo text-white',
    secondary: 'bg-rosa-bolo text-cinza-texto',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700'
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  )
}
