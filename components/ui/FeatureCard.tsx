'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className="group glassmorphic rounded-2xl p-6 border border-white/10 dark:border-slate-700/30 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-green-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.03) translateY(-8px)' : 'scale(1) translateY(0)',
      }}
    >
      {/* Icon container */}
      <div className="relative mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} p-0.5`}>
          <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
            <Icon className={`w-6 h-6 transition-all ${isHovered ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`} />
          </div>
        </div>
        {isHovered && (
          <div className="absolute inset-0 rounded-xl blur-xl opacity-50" style={{ background: `linear-gradient(135deg, var(--cyan-accent), var(--accent))` }} />
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>

      {/* Mini UI preview - decorative */}
      <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="space-y-2">
          <div className="h-1.5 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 rounded-full" />
          <div className="h-1.5 bg-gradient-to-r from-slate-200 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-700 rounded-full w-3/4" />
        </div>
      </div>
    </div>
  )
}
