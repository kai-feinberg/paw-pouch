import { createFileRoute } from '@tanstack/react-router'
import { Highlighter } from '@/components/magicui/highlighter'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact: Paw Pouch',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <Highlighter action="highlight" color='#BDF5E6'>Contact Us</Highlighter>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Have a suggestion or feature request?
          </p>
          <a
            href="mailto:kaifeinberg2025@u.northwestern.edu"
            className="text-blue-600 hover:text-blue-800 hover:underline text-lg"
          >
            Email us: kaifeinberg2025@u.northwestern.edu
          </a>
        </div>
        <div className="lg:w-1/2 text-center">
          <figure>
            <img
              src="/how-it-works.jpg"
              alt="Paw pouch parts breakdown"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}