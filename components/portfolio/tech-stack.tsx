"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

interface TechSkill {
  name: string
  level: number
  category: "dbms" | "cloud" | "tools" | "specialty"
  tooltip: string
  color?: string
}

const techSkills: TechSkill[] = [
  // DBMS
  { name: "MySQL", level: 98, category: "dbms", tooltip: "MySQL 8.4 기술 검토 및 컴파일 설치 경험", color: "mysql" },
  { name: "MariaDB", level: 95, category: "dbms", tooltip: "엔터프라이즈급 MariaDB 운영 및 최적화", color: "mysql" },
  { name: "PostgreSQL", level: 90, category: "dbms", tooltip: "PostgreSQL 전용 모니터링 스크립트 구축", color: "postgresql" },
  { name: "Oracle", level: 85, category: "dbms", tooltip: "OCP/OCA 자격 보유, 대규모 운영 경험", color: "postgresql" },
  { name: "MongoDB", level: 70, category: "dbms", tooltip: "NoSQL 데이터 모델링 및 운영", color: "mysql" },
  // Cloud
  { name: "AWS RDS", level: 92, category: "cloud", tooltip: "AWS 기반 인프라 운영 및 모니터링 자동화", color: "mysql" },
  { name: "AWS EC2", level: 88, category: "cloud", tooltip: "EC2 기반 DB 서버 구축 및 관리", color: "mysql" },
  { name: "NCP CDB", level: 85, category: "cloud", tooltip: "NCP InnoDB Cluster 구축 경험", color: "postgresql" },
  // Tools
  { name: "Python", level: 85, category: "tools", tooltip: "모니터링 자동화 봇 및 스크립트 개발", color: "postgresql" },
  { name: "Shell Script", level: 92, category: "tools", tooltip: "MySQL/MariaDB 통합 점검 자동화 스크립트", color: "postgresql" },
  { name: "Percona Xtrabackup", level: 95, category: "tools", tooltip: "백업/복구 솔루션 비교 검증 및 DR 시나리오", color: "mysql" },
  { name: "PMM", level: 90, category: "tools", tooltip: "Percona Monitoring & Management 환경 구축", color: "postgresql" },
  { name: "Orchestrator", level: 88, category: "tools", tooltip: "HA orchestrator 구축 및 운영", color: "mysql" },
  // Specialty
  { name: "HA Architecture", level: 95, category: "specialty", tooltip: "고가용성 아키텍처 설계 및 구현", color: "postgresql" },
  { name: "Data Migration", level: 98, category: "specialty", tooltip: "9개 국립병원 대규모 데이터 이관 프로젝트", color: "mysql" },
  { name: "Query Tuning", level: 95, category: "specialty", tooltip: "Query Latency 50% 절감 달성", color: "postgresql" },
]

const categories = [
  { id: "dbms", label: "DBMS" },
  { id: "cloud", label: "Cloud" },
  { id: "tools", label: "Tools & Languages" },
  { id: "specialty", label: "Specialty" },
]

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredSkills = activeCategory === "all" 
    ? techSkills 
    : techSkills.filter(skill => skill.category === activeCategory)

  return (
    <section className="py-16 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-mysql" />
          Tech Stack
        </h2>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              activeCategory === "all"
                ? "bg-postgresql text-background"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-postgresql text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill, index) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div 
                    className="group p-4 rounded-xl bg-card border border-border hover:border-postgresql/30 transition-all cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-medium">{skill.name}</span>
                      <span className={`font-mono text-sm ${skill.color === "mysql" ? "text-mysql" : "text-postgresql"}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="bg-card border border-border text-foreground font-mono text-sm max-w-xs"
                >
                  <p>{skill.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
