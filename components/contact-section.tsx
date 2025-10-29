"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactSection() {
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
    <section className="mb-24 animate-fade-in animate-delay-400">
      <h2 className="mb-6 font-mono text-base text-muted-foreground md:text-lg">get in touch:</h2>

      <div className="max-w-2xl space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="font-mono text-xs text-foreground md:text-sm">
              name
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="font-mono text-sm"
              placeholder="your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-xs text-foreground md:text-sm">
              email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="font-mono text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-mono text-xs text-foreground md:text-sm">
              message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="font-mono min-h-[150px] text-sm"
              placeholder="tell me about your project..."
            />
          </div>

          <Button type="submit" disabled={status === "sending"} className="font-mono text-sm">
            {status === "idle" && "send message"}
            {status === "sending" && "sending..."}
            {status === "sent" && "sent!"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground md:text-sm">
          or reach out at <span className="text-primary">umarghani [at] berkeley [dot] edu</span>
        </p>
      </div>
    </section>
  )
}
