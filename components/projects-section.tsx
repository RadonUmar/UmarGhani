import Link from "next/link"

const projects = [
  {
    name: "Dryst AI",
    description: "real-life memory store built with smart glasses",
    href: "#",
  },
  {
    name: "Terra Intelligence",
    description: "drone-based agricultural data insights",
    href: "#",
  },
  {
    name: "O Positive",
    description: "app connecting blood donors and recipients",
    href: "#",
  },
  {
    name: "Truthstake",
    description: "transparent web3 staking analytics",
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <section className="mb-24 animate-fade-in animate-delay-200">
      <h2 className="mb-8 font-mono text-lg text-muted-foreground">things i've built:</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Link key={index} href={project.href} className="group block transition-all hover:translate-x-1">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-primary">→</span>
              <div className="flex-1">
                <h3 className="inline font-mono text-base text-foreground transition-colors group-hover:text-primary">
                  {project.name}
                </h3>
                <span className="ml-3 text-sm text-muted-foreground">{project.description}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
