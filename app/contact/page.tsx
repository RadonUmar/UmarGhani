import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-4">
            <h1 className="font-mono text-4xl font-bold text-foreground">get in touch</h1>
            <p className="font-mono text-lg leading-relaxed text-muted-foreground">
              email me at <span className="text-primary">umarghani [at] berkeley [dot] edu</span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
