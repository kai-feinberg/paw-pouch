import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Highlighter } from '@/components/magicui/highlighter'

export const Route = createFileRoute('/order')({
  head: () => ({
    meta: [
      {
        title: 'Order: Paw Pouch',
      },
    ],
  }),
  component: OrderPage,
})

function OrderPage() {

  // start with 1 paw pouch as default state
  const [quantity, setQuantity] = useState(1)
  const pricePerUnit = 25.99

  const incrementQuantity = () => {
    console.log('incrementQuantity')
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    console.log('decrementQuantity')
    if (quantity - 1 < 0) {
      alert('You cannot order a negative number of paw pouches')
      return
    }
    setQuantity(prev => prev - 1)
  }

  const totalPrice = (quantity * pricePerUnit).toFixed(2)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <section>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              <Highlighter action="highlight" color='#BDF5E6'>Order now</Highlighter>
            </h1>
            <p className="text-lg text-red-600 font-medium">
              Buy now before we run out!
            </p>
          </section>
        </div>
        
        {/* Order/cart section */}
        <div className="lg:w-1/2">
          <section>
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <figure className="mb-0">
                    <img 
                      src="/small-how-it-works.jpg" 
                      alt="Paw Pouch product breakdown" 
                      className="rounded-lg w-20 h-20 object-cover"
                    />
                  </figure>
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    {quantity}x Paw Pouch
                  </h2>
                  <p className="text-lg text-green-600 font-semibold mb-3">
                    ${pricePerUnit} each
                  </p>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button" 
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors rounded text-sm font-medium"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100 rounded text-center min-w-[3rem]">
                      {quantity}
                    </span>
                    <button 
                      type="button" 
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors rounded text-sm font-medium"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-green-600">${totalPrice}</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}