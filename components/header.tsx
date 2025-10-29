import Link from "next/link"

export function Header() {
  return (
    <header className="animate-fade-in border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-lg font-semibold text-foreground transition-colors hover:text-primary"
          >
            UMAR GHANI
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="https://github.com/RadonUmar"
              target="_blank"
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              github
            </Link>
            <Link
              href="https://www.linkedin.com/in/umarghani1/"
              target="_blank"
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              linkedin
            </Link>
            <Link
              href="/api/resume"
              target="_blank"
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              resume
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
