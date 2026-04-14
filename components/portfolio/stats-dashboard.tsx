"use client"

import { useEffect, useState, useRef } from "react"
import { Activity, Zap, Clock, TrendingUp } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
  prefix?: string
  delay?: number
}

function StatCard({ icon, label, value, suffix, prefix = "", delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          setTimeout(() => {
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0
            
            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setDisplayValue(value)
                clearInterval(timer)
              } else {
                setDisplayValue(Math.floor(current * 10) / 10)
              }
            }, duration / steps)

            return () => clearInterval(timer)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, delay, hasAnimated])

  return (
    <div
      ref={ref}
      className="relative group p-6 rounded-xl bg-card border border-border hover:border-postgresql/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-postgresql/5 to-mysql/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-secondary text-postgresql">
            {icon}
          </div>
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-mono">{label}</span>
        </div>
        <div className="font-mono text-3xl md:text-4xl font-bold">
          {prefix}
          <span className="text-postgresql">{displayValue.toFixed(suffix === "%" ? 1 : 0)}</span>
          <span className="text-mysql">{suffix}</span>
        </div>
      </div>
    </div>
  )
}

export function StatsDashboard() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-postgresql" />
          Key Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Activity className="w-5 h-5" />}
            label="System Uptime"
            value={99.9}
            suffix="%"
            delay={0}
          />
          <StatCard
            icon={<Zap className="w-5 h-5" />}
            label="Query Latency"
            value={50}
            suffix="% 절감"
            delay={200}
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label="Migration Projects"
            value={9}
            suffix="+ 병원"
            delay={400}
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Total Career"
            value={14}
            suffix="년+"
            delay={600}
          />
        </div>
      </div>
    </section>
  )
}
