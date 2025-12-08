"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("https://formspree.io/f/mgvnjbkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 rounded-3xl p-8 md:p-12">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Formularz kontaktowy</h3>
      <p className="text-gray-300 text-center mb-8">
        Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white text-lg">
              Imię <span className="text-[#60A5FA]">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#60A5FA] focus:ring-[#60A5FA]"
              placeholder="Twoje imię"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white text-lg">
              Nazwisko <span className="text-[#60A5FA]">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#60A5FA] focus:ring-[#60A5FA]"
              placeholder="Twoje nazwisko"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white text-lg">
            E-mail <span className="text-[#60A5FA]">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#60A5FA] focus:ring-[#60A5FA]"
            placeholder="twoj@email.pl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white text-lg">
            Wiadomość <span className="text-[#60A5FA]">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#60A5FA] focus:ring-[#60A5FA] resize-none"
            placeholder="Opisz swoje wydarzenie, datę koncertu i inne szczegóły..."
          />
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-500/20 border border-green-500 text-green-100 px-4 py-3 rounded-lg">
            Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded-lg">
            Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#2563EB] text-white py-6 text-lg font-bold rounded-full shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </form>
    </div>
  )
}
