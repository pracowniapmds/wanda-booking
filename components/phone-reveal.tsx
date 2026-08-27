"use client"

import { Check, Copy, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

type PhoneRevealProps = {
  phone: string
}

export function PhoneReveal({ phone }: PhoneRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(phone)
    setIsCopied(true)
    window.setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={isRevealed ? `tel:${phone.replace(/\s/g, "")}` : undefined}
        onClick={() => setIsRevealed(true)}
        className="inline-flex items-center gap-2 text-gray-300 font-semibold transition-colors hover:text-white"
        aria-label={isRevealed ? `Zadzwoń pod numer ${phone}` : "Kliknij, aby odsłonić numer telefonu"}
      >
        <Phone className="size-4" aria-hidden="true" />
        <span>{isRevealed ? phone : `${phone.slice(0, 3)} ••• •••`}</span>
      </a>
      {isRevealed && (
        <Button type="button" variant="outline" size="sm" onClick={handleCopy} className="border-gray-600 bg-transparent text-gray-200 hover:bg-gray-700 hover:text-white">
          {isCopied ? <Check data-icon="inline-start" aria-hidden="true" /> : <Copy data-icon="inline-start" aria-hidden="true" />}
          {isCopied ? "Skopiowano" : "Kopiuj numer"}
        </Button>
      )}
    </div>
  )
}
