interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200'
  
  const variants = {
    primary: 'bg-vermelho-bolo text-white hover:bg-red-800',
    secondary: 'bg-white text-vermelho-bolo border-2 border-vermelho-bolo hover:bg-rosa-bolo'
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
