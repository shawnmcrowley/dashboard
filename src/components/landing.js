import Header from './header'
import Footer from './footer'

export default function Landing({ children, title, description }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {title && (
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  )
}
