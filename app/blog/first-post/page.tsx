import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function FirstPost() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        <article className="animate-fade-in">
          <Link
            href="/"
            className="mb-8 inline-block font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            ← back
          </Link>
          <h1 className="mb-4 font-mono text-3xl text-foreground md:text-4xl">first post</h1>
          <p className="mb-8 font-mono text-sm text-muted-foreground">coming soon...</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed">
              this is my first post! (i will be writing and uploading here soon)
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
