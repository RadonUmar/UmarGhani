import Link from "next/link"

export function Header() {
  return (
    <header className="animate-fade-in border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="font-mono text-base font-semibold text-foreground transition-colors hover:text-primary sm:text-lg"
          >
            UMAR GHANI
          </Link>

          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="https://github.com/RadonUmar"
              target="_blank"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              github
            </Link>
            <Link
              href="https://www.linkedin.com/in/umarghani1/"
              target="_blank"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              linkedin
            </Link>
            <Link
              href="/api/resume"
              target="_blank"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              resume
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
