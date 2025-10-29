import { Header } from "@/components/header"
import { IntroSection } from "@/components/intro-section"
import { ProjectsSection } from "@/components/projects-section"
import { PurposeSection } from "@/components/purpose-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        <IntroSection />
        <ProjectsSection />
        <PurposeSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
