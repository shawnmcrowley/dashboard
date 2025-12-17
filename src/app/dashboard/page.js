import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Dashboard() {
  const projects = [
    {
      title: 'AI Workflow Automation',
      description: 'View and Manage Automated AI Workflows',
      href: '/workflow_automation',
      icon: '📊'
    },
    {
      title: 'AI Document Processing (RAG)',
      description: 'AI Driven Document Processing and Analysis',
      href: '/document_processing',
      icon: '🗄️'
    },
    {
      title: 'Snowflake Data Integration',
      description: 'Update & Query Snowflake Data Warehouse via API Integration',
      href: '/responsive_forms',
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
            <a key={project.href} href={project.href}>
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
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
