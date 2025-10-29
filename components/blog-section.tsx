import Link from "next/link"

export function BlogSection() {
  return (
    <section className="mb-24 animate-fade-in animate-delay-400">
      <h2 className="mb-8 font-mono text-xl text-foreground md:text-2xl">blog</h2>
      <div className="space-y-6">
        <Link
          href="/blog/first-post"
          className="group block border-l-2 border-muted pl-4 transition-all hover:border-accent"
        >
          <div className="space-y-1">
            <h3 className="font-mono text-lg text-foreground transition-colors group-hover:text-accent">first post</h3>
            <p className="text-sm text-muted-foreground">
              this is my first post! (i will be writing and uploading here soon)
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
