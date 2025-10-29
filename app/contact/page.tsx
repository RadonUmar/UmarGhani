"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus("sent")
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-4">
            <h1 className="font-mono text-4xl font-bold text-foreground">get in touch</h1>
            <p className="font-mono text-lg leading-relaxed text-muted-foreground">
              have a project in mind? want to collaborate? fill out the form below or reach out directly at{" "}
              <span className="text-primary">umarghani [at] berkeley [dot] edu</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="animate-fade-in animate-delay-100 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-sm text-foreground">
                name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="font-mono"
                placeholder="your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-sm text-foreground">
                email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="font-mono"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-sm text-foreground">
                message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="font-mono min-h-[200px]"
                placeholder="tell me about your project..."
              />
            </div>

            <Button type="submit" disabled={status === "sending"} className="font-mono">
              {status === "idle" && "send message"}
              {status === "sending" && "sending..."}
              {status === "sent" && "sent!"}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
