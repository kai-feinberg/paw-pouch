import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/testimonials" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link 
            to="/order" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            Order
          </Link>
        </div>
      </nav>
    </header>
  )
}
