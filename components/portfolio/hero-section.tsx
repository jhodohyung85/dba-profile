"use client"

import { useMemo } from "react"
import { Database, Cloud, Server } from "lucide-react"

function calculateExperience() {
  const startDate = new Date(2012, 1, 1) // February 2012
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - startDate.getTime())
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffYears)
}

export function HeroSection() {
  const yearsOfExperience = useMemo(() => calculateExperience(), [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background with PostgreSQL blue and MySQL orange */}
      <div className="absolute inset-0 bg-gradient-to-br from-postgresql/10 via-background to-mysql/10 opacity-50" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-postgresql/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-mysql/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Experience badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="font-mono text-postgresql">{yearsOfExperience}+</span>
          <span className="text-muted-foreground text-sm">Years of Experience</span>
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
          조도형
        </h1>
        
        {/* Title */}
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground mb-4">
          <span className="text-postgresql">Senior DBA</span>
          <span className="text-muted-foreground mx-3">|</span>
          <span className="text-mysql">Cloud Database Migration Expert</span>
        </p>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto text-pretty">
          {yearsOfExperience}+ Years of Expertise in MySQL, MariaDB, and PostgreSQL
        </p>

        {/* Icons */}
        <div className="flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-xl bg-card border border-border group-hover:border-postgresql/50 transition-colors">
              <Database className="w-6 h-6 text-postgresql" />
            </div>
            <span className="text-xs font-mono">DBMS</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-xl bg-card border border-border group-hover:border-mysql/50 transition-colors">
              <Cloud className="w-6 h-6 text-mysql" />
            </div>
            <span className="text-xs font-mono">Cloud</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-xl bg-card border border-border group-hover:border-foreground/50 transition-colors">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono">HA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
