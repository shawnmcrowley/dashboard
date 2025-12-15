import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Dashboard() {
  const projects = [
    {
      title: 'AdaptiveWorks',
      description: 'View and manage AdaptiveWorks milestones with real-time data',
      href: '/adaptiveworks',
      icon: '📊'
    },
    {
      title: 'NoSQL Database',
      description: 'Access MongoDB data store with advanced filtering',
      href: '/mongodb',
      icon: '🗄️'
    },
    {
      title: 'Snowflake',
      description: 'Query Snowflake data warehouse analytics',
      href: '/snowflake',
      icon: '❄️'
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Application Dashboard</h1>
          <p className="text-muted-foreground">Manage and Monitor your Data Integrations and Workflows</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.href} href={project.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary font-medium">View Details →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
