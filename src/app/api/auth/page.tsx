import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const features = [
    {
      title: 'Streamlined Documentation',
      description: 'Efficiently create and manage medical records with our intuitive interface.',
      icon: '/icon-document.svg',
    },
    {
      title: 'Secure & Compliant',
      description: 'HIPAA-compliant platform ensuring the highest level of data security and privacy.',
      icon: '/icon-security.svg',
    },
    {
      title: 'Collaborative Platform',
      description: 'Easily share and collaborate on medical documentation with your team.',
      icon: '/icon-collaboration.svg',
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Streamline Your Medical Documentation
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                EduDoc helps healthcare professionals manage medical documentation efficiently and securely.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild size="lg">
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={64}
                        height={64}
                        className="text-primary"
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 EduDoc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}