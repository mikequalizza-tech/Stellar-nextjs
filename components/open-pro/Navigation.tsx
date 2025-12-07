// Open-Pro Navigation Component
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="border-b border-gray-800">
      <nav className="open-pro-container py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Stellar<span className="text-blue-500">Next</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
