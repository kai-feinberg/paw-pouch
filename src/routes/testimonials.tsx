import { createFileRoute } from '@tanstack/react-router'
import { Highlighter } from '@/components/magicui/highlighter'

export const Route = createFileRoute('/testimonials')({
  head: () => ({
    meta: [
      {
        title: 'Testimonials: Paw Pouch',
      },
    ],
  }),
  component: TestimonialsPage,
})

function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Prof. Gatchell',
      image: '/jack.jpg',
      alt: 'Prof. Gatchell and Jack',
      testimonial: "Prof. Gatchell's dog Jack went from hating cleaning time to hating it a bit less"
    },
    {
      name: 'Gavin',
      image: '/carson.jpg',
      alt: 'Gavin and Carson',
      testimonial: "Gavin's dog Carson went from biting to belly rubs with the Paw Pouch"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          <Highlighter action="highlight" color='#BDF5E6'>Testimonials</Highlighter>
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gray-100 rounded-lg p-8 text-center max-w-sm mx-auto"
          >
            <article>
              <figure className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="rounded-lg w-full h-48 object-cover mx-auto"
                />
              </figure>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {testimonial.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {testimonial.testimonial}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}