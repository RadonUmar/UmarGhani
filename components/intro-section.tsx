export function IntroSection() {
  return (
    <section className="mb-24 animate-fade-in animate-delay-100">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-mono text-xl text-foreground md:text-2xl">hey, i&apos;m umar.</h1>
          <p className="font-mono text-lg text-muted-foreground md:text-xl">@ uc berkeley, building new ideas.</p>
        </div>

        <div className="max-w-2xl space-y-4 leading-relaxed">
          <p className="text-sm text-foreground/90 md:text-base">
i started building because i grew up watching the internet connect the world. today, machine intelligence is capable of perception and reasoning at a level where it can act alongside humans, fundamentally changing what it means to <em>build</em>. interested in seeing where this goes and how it can improve people's lives, and being part of it.
          </p>
        </div>
      </div>
    </section>
  )
}
