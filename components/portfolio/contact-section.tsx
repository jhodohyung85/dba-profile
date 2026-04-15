"use client"

import { useState } from "react"
import { Mail, Download, Copy, Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "jhodohyung@gmail.com"
  const phone = "010-4025-0714"

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-postgresql" />
          Contact
          <span className="w-8 h-px bg-mysql" />
        </h2>

        <p className="text-2xl md:text-3xl font-light mb-8 text-balance">
          <span className="text-foreground">프로젝트 협업이나 </span>
          <span className="text-postgresql">기술 컨설팅</span>
          <span className="text-foreground">이 필요하신가요?</span>
        </p>

        <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-pretty">
          클라우드 DB 이관, 성능 최적화, HA 아키텍처 설계 등
          데이터베이스 관련 모든 문의를 환영합니다.
        </p>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
            <Mail className="w-4 h-4 text-postgresql" />
            <span className="font-mono text-sm">{email}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
            <Phone className="w-4 h-4 text-mysql" />
            <span className="font-mono text-sm">{phone}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={copyEmail}
            variant="outline"
            className="w-full sm:w-auto gap-2 font-mono border-postgresql/50 hover:bg-postgresql/10 hover:text-postgresql"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                복사 완료!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                이메일 복사
              </>
            )}
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto gap-2 font-mono bg-gradient-to-r from-postgresql to-mysql hover:opacity-90"
          >
            <a href="/jhodohyung_resume.pdf" download>
              <Download className="w-4 h-4" />
              이력서 PDF 다운로드
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm font-mono">
          © {new Date().getFullYear()} 조도형. All rights reserved.
        </p>
      </div>
    </section>
  )
}
