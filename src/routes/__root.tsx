import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Home: Paw Pouch',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <footer className="text-center p-4">
          <p>
            Thanks to the{' '}
            <a
              href="https://design.northwestern.edu/"
              className="text-blue-600 hover:underline"
            >
              Segal Design Institute
            </a>{' '}
            for their support in this project!
          </p>
        </footer>
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  )
}
