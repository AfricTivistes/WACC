"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

interface ContactSectionProps {
  dict: {
    contact: {
      title: string
      description: string
      form: {
        name: string
        email: string
        subject: string
        message: string
        send: string
      }
      address: string
      phone: string
      join: {
        title: string
        description: string
        cta: string
      }
    }
  }
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pourriez ajouter la logique pour envoyer le formulaire
    console.log("Form submitted:", formData)
    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Merci pour votre message ! Nous vous contacterons bientôt.")
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="container relative z-10">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{dict.contact.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.contact.description}</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement animation="fade-in" delay={300}>
            <div className="glass dark:glass-dark rounded-lg p-8 shadow-md card-hover">
              <h3 className="text-2xl font-bold mb-6">{dict.contact.form.send}</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {dict.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={dict.contact.form.name}
                    required
                    className="transition-all duration-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {dict.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="transition-all duration-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    {dict.contact.form.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={dict.contact.form.subject}
                    required
                    className="transition-all duration-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {dict.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={dict.contact.form.message}
                    rows={5}
                    required
                    className="transition-all duration-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button type="submit" className="w-full btn-hover-effect">
                  {dict.contact.form.send}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </AnimatedElement>

          <div className="space-y-6">
            <AnimatedElement
              animation="fade-up"
              delay={400}
              className="glass dark:glass-dark rounded-lg p-6 shadow-md card-hover"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.contact.address}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Dakar, Sénégal</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-up"
              delay={500}
              className="glass dark:glass-dark rounded-lg p-6 shadow-md card-hover"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:info@africtivistes.org"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors hover-underline"
                  >
                    info@africtivistes.org
                  </a>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-up"
              delay={600}
              className="glass dark:glass-dark rounded-lg p-6 shadow-md card-hover"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.contact.phone}</h3>
                  <a
                    href="tel:+221338673080"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors hover-underline"
                  >
                    +221 33 867 30 80
                  </a>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement
              animation="fade-up"
              delay={700}
              className="bg-primary text-white rounded-lg p-6 shadow-md card-hover"
            >
              <h3 className="text-xl font-bold mb-4">{dict.contact.join.title}</h3>
              <p className="mb-4">{dict.contact.join.description}</p>
              <Button variant="secondary" className="btn-hover-effect">
                {dict.contact.join.cta}
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
}
