"use client"

import { Building2, Calendar, ChevronRight } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  duration?: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    company: "데이타뱅크",
    role: "Senior Database Engineer (Open Source DB Specialist)",
    period: "2026.01 ~ 현재",
    achievements: [
      "멀티 DBMS 기술 지원 및 유지보수: MySQL, MariaDB, PostgreSQL 전반 운영 안정화",
      "엔터프라이즈급 DB 인프라 구축: 고객사 요구사항 최적화 및 HA 구성 지원",
      "서비스 안정성 검점(Health Check): 신규 서비스 오픈 전 성능 병목 탐색 및 장애 방지",
      "MySQL/MariaDB 통합 점검 자동화 스크립트 개발",
      "PostgreSQL 전용 유지보수 및 모니터링 스크립트 구축",
      "데이터 보호 전략 수립: 백업/복구 솔루션 비교 검증 및 DR 시나리오 확보",
    ],
  },
  {
    company: "개인사업자/프리랜서",
    role: "Senior DBA / Cloud Migration Specialist",
    period: "2022.01 ~ 2025.12",
    duration: "4년",
    achievements: [
      "이지케어텍 Private Cloud 구축: HA orchestrator 및 PMM 모니터링 환경 구축",
      "설치 자동화 스크립트 개발로 배포 시간 단축",
      "차세대 국립병원 정보시스템(MEDIRO) 데이터 이관: 9개 국립병원 프로젝트 참여",
      "DB 아키텍처 구성 및 데이터 정합성 검증 수행",
      "AWS/NCP 기반 의료 계열 Cloud DB 운영",
      "Python 활용 모니터링 자동화 봇 개발",
    ],
  },
  {
    company: "사람인 DA팀",
    role: "Senior DBA",
    period: "2012.02 ~ 2021.12",
    duration: "9년 11개월 근속",
    achievements: [
      "서비스 전반의 DB 모델 설계 및 표준 관리 (META#)",
      "이기종 간 DB 마이그레이션 수행 (MSSQL → MySQL 등)",
      "대규모 직무 개편 프로젝트 메인 DBA 참여",
      "데이터 마이그레이션 스크립트 개발",
      "ISMS 심사 대응 및 DB 보안/접근제어 솔루션 정책 수립",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-postgresql" />
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card border border-border overflow-hidden hover:border-postgresql/30 transition-all"
            >
              {/* IDE-style header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-mysql/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                </div>
                <span className="font-mono text-sm text-muted-foreground ml-2">
                  experience_{index + 1}.sql
                </span>
              </div>

              {/* Content area styled like code */}
              <div className="p-6 font-mono text-sm">
                {/* Comment style header */}
                <div className="text-muted-foreground mb-4">
                  <span className="text-postgresql">{"/*"}</span>
                  <span className="ml-2">@company: {exp.company}</span>
                  <span className="text-postgresql ml-2">{"*/"}</span>
                </div>

                {/* Company info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-foreground">
                    <Building2 className="w-4 h-4 text-mysql" />
                    <span className="font-semibold">{exp.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    {exp.duration && (
                      <span className="px-2 py-0.5 rounded bg-postgresql/20 text-postgresql text-xs">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Achievements styled as SQL comments */}
                <div className="space-y-2 pl-4 border-l-2 border-postgresql/30">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <ChevronRight className="w-4 h-4 text-mysql mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
