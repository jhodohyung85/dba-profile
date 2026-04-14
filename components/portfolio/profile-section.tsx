"use client"

import { Mail, Phone, MapPin, Hash } from "lucide-react"

export function ProfileSection() {
  return (
    <section className="py-16 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-postgresql" />
          Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Info */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-mono text-lg font-semibold mb-6 text-postgresql">인적 사항</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">이름</p>
                  <p className="font-medium">조도형 (1985년생)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">직무</p>
                  <p className="font-medium">Senior Database Administrator (DBA)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">연락처</p>
                  <p className="font-medium font-mono">010-4025-0714</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">이메일</p>
                  <p className="font-medium font-mono">jhodohyung@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-mono text-lg font-semibold mb-6 text-mysql">핵심 키워드</h3>
            
            <div className="flex flex-wrap gap-2">
              {[
                { label: "MySQL", color: "mysql" },
                { label: "MariaDB", color: "mysql" },
                { label: "PostgreSQL", color: "postgresql" },
                { label: "AWS RDS", color: "mysql" },
                { label: "Cloud Migration", color: "postgresql" },
                { label: "Performance Tuning", color: "mysql" },
                { label: "HA Architecture", color: "postgresql" },
                { label: "Query Optimization", color: "mysql" },
              ].map((keyword) => (
                <span
                  key={keyword.label}
                  className={`px-3 py-1.5 rounded-lg font-mono text-sm border ${
                    keyword.color === "mysql"
                      ? "border-mysql/30 bg-mysql/10 text-mysql"
                      : "border-postgresql/30 bg-postgresql/10 text-postgresql"
                  }`}
                >
                  {keyword.label}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                14년 이상의 DBA 경력을 바탕으로 대규모 데이터베이스 운영, 
                클라우드 마이그레이션, 성능 최적화 분야에서 전문성을 발휘하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
