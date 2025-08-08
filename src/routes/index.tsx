import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Highlighter } from "@/components/magicui/highlighter";

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [isHeroImageHovered, setIsHeroImageHovered] = useState(false)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                <Highlighter action="highlight" color='#BDF5E6'>Paw Pouch</Highlighter>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                A paw cleaning device your dog won't hate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#how-it-works"
                  className="px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded text-center"
                >
                  How it works
                </a>
                <a
                  href="/order"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded text-center"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <figure>
                <img
                  src="/hero.jpg"
                  alt="Paw Pouch in use"
                  className={`rounded-lg shadow-lg w-full max-w-md mx-auto transition-transform duration-300 ${
                    isHeroImageHovered ? 'scale-110' : 'scale-100'
                  }`}
                  onMouseEnter={() => setIsHeroImageHovered(true)}
                  onMouseLeave={() => setIsHeroImageHovered(false)}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-12 md:py-20" id="how-it-works">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-3/5 order-2 lg:order-1">
            <figure className="text-center">
              <img
                src="/how-it-works.jpg"
                alt="Paw Pouch parts breakdown"
                className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
              />
            </figure>
          </div>
          <div className="lg:w-2/5 order-1 lg:order-2">
            <header className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                How it works
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                Wash. Flip. Clip. Done
              </p>
            </header>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <div>
                  <strong className="block text-gray-900">Wash the paw</strong>
                  <span className="text-gray-700">Clean your dog's dirty paws thoroughly</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <div>
                  <strong className="block text-gray-900">Flip the Paw Pouch inside out</strong>
                  <span className="text-gray-700">Turn it inside out to contain the dirt</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <div>
                  <strong className="block text-gray-900">Clip it to contain the mess</strong>
                  <span className="text-gray-700">Secure it with the built-in clip</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <div>
                  <strong className="block text-gray-900">Done. Give your dog some pets</strong>
                  <span className="text-gray-700">Clean paws, happy dog!</span>
                </div>
              </li>
            </ol>
            <a
              href="/order"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded"
            >
              Order Now!
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}