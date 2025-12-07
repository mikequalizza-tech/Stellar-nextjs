import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              Stellar
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/intake" className="text-gray-600 hover:text-gray-900 transition-colors">
                Intake
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-gray-900 transition-colors">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Stellar
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A unified platform combining Open-Pro components with Mosaic admin console
          </p>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Open-Pro Components</h3>
              <p className="text-gray-600">
                Rich marketing and public-facing components for building dynamic pages
              </p>
              <Link 
                href="/intake" 
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Intake →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Mosaic Admin Console</h3>
              <p className="text-gray-600">
                Complete admin dashboard with user management and settings
              </p>
              <Link 
                href="/admin" 
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Go to Admin →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Best of Both</h3>
              <p className="text-gray-600">
                Stellar fills the gaps, providing a complete solution for your needs
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 flex gap-4 justify-center">
            <Link 
              href="/intake"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started with Intake
            </Link>
            <Link 
              href="/admin"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Access Admin Console
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 Stellar. Combining Open-Pro and Mosaic.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
