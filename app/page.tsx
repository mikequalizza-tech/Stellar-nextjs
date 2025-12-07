import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header - Open-Pro Style */}
      <header className="border-b border-gray-800">
        <nav className="open-pro-container py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Stellar<span className="text-blue-500">Next</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
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

      {/* Hero Section - Open-Pro Main Theme */}
      <section className="open-pro-section">
        <div className="open-pro-container text-center">
          <h1 className="open-pro-heading">
            Build Your SaaS Product with
            <br />
            <span className="text-blue-500">tCredex Base</span> and{" "}
            <span className="text-purple-500">Open-Pro</span>
          </h1>
          <p className="open-pro-subheading max-w-3xl mx-auto">
            A powerful Next.js boilerplate combining tCredex infrastructure,
            Open-Pro as the main theme, and unique Stellar components for a
            complete SaaS solution.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Building
            </button>
            <button className="px-6 py-3 border border-gray-700 text-white rounded-lg hover:border-gray-600 transition-colors font-medium">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Open-Pro Style with Stellar Cards */}
      <section className="open-pro-section bg-gray-900/50">
        <div className="open-pro-container">
          <div className="text-center mb-16">
            <h2 className="open-pro-heading">
              Everything You Need to Launch
            </h2>
            <p className="open-pro-subheading">
              Built on tCredex base with Open-Pro theme and Stellar enhancements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Open-Pro Features */}
            <div className="stellar-card">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Open-Pro Theme
              </h3>
              <p className="text-gray-400">
                Sleek, modern dark theme built with Tailwind CSS. Perfect for
                SaaS products and startups.
              </p>
            </div>

            <div className="stellar-card">
              <div className="text-purple-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                tCredex Infrastructure
              </h3>
              <p className="text-gray-400">
                Built on solid foundations with PostgreSQL, Prisma, NextAuth,
                and Stripe integration.
              </p>
            </div>

            {/* Stellar Unique Feature */}
            <div className="stellar-card border-2 border-blue-500/50">
              <div className="text-yellow-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stellar Components
              </h3>
              <p className="text-gray-400">
                Unique hand-drawn illustrations and components that make your
                product stand out from the crowd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section - Stellar Style */}
      <section className="open-pro-section">
        <div className="open-pro-container">
          <div className="text-center mb-16">
            <h2 className="open-pro-heading">Built With Modern Tech</h2>
            <p className="open-pro-subheading">
              Leveraging the best tools and frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Next.js 15", color: "text-white" },
              { name: "React 19", color: "text-blue-400" },
              { name: "Tailwind CSS", color: "text-cyan-400" },
              { name: "TypeScript", color: "text-blue-500" },
              { name: "PostgreSQL", color: "text-blue-300" },
              { name: "Prisma", color: "text-purple-400" },
              { name: "NextAuth", color: "text-green-400" },
              { name: "Stripe", color: "text-purple-500" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <div className={`text-2xl font-bold ${tech.color} mb-2`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Open-Pro Style */}
      <footer className="border-t border-gray-800 py-12">
        <div className="open-pro-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © 2024 Stellar Next.js. Built with tCredex Base, Open-Pro Theme,
              and Stellar Components.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
