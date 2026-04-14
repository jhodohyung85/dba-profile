"use client"

import { useState, useEffect, useMemo } from "react"
import { Database, Menu, X } from "lucide-react"

function calculateExperience() {
  const startDate = new Date(2012, 1, 1)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - startDate.getTime())
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffYears)
}

const navItems = [
  { label: "About", href: "#hero" },
  { label: "Stats", href: "#stats" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const yearsOfExperience = useMemo(() => calculateExperience(), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 font-mono font-bold"
          >
            <Database className="w-5 h-5 text-postgresql" />
            <span>조도형</span>
            <span className="hidden sm:inline text-xs text-muted-foreground ml-2 px-2 py-0.5 rounded bg-secondary">
              {yearsOfExperience}+ Years DBA
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors font-mono text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
