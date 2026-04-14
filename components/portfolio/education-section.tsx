"use client"

import { GraduationCap, Award, FileText } from "lucide-react"

export function EducationSection() {
  return (
    <section className="py-16 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-mysql" />
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-postgresql/20">
                <GraduationCap className="w-5 h-5 text-postgresql" />
              </div>
              <h3 className="font-mono text-lg font-semibold">학력</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">순천향대학교 대학원</p>
                <p className="text-muted-foreground text-sm">컴퓨터학과 석사 졸업</p>
                <p className="text-postgresql font-mono text-sm mt-1">GPA: 4.38 / 4.5</p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-mysql mt-1" />
                  <div>
                    <p className="text-sm font-medium">논문</p>
                    <p className="text-muted-foreground text-sm">
                      데이터베이스 응용을 위한 통합 객체지향 분석·설계 방법론
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-mysql/20">
                <Award className="w-5 h-5 text-mysql" />
              </div>
              <h3 className="font-mono text-lg font-semibold">자격증 & 수상</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {["OCP (Oracle)", "OCA", "SCJP", "SCSA"].map((cert) => (
                  <div
                    key={cert}
                    className="px-3 py-2 rounded-lg bg-secondary text-center font-mono text-sm"
                  >
                    {cert}
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-mysql/10 to-postgresql/10 border border-mysql/30">
                  <div>
                    <p className="font-medium text-sm">순천향대 공학대학 학술제</p>
                    <p className="text-muted-foreground text-xs">2009년</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-mysql/20 text-mysql font-mono text-sm font-bold">
                    금상
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
