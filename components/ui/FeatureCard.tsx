'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  colorTheme: string
}

export function FeatureCard({ icon: Icon, title, description, colorTheme }: FeatureCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  // Map color themes to Tailwind classes
  const colorMap: Record<string, string> = {
    green: 'border-green-400 text-green-600',
    blue: 'border-blue-400 text-blue-600',
    orange: 'border-orange-400 text-orange-600',
    purple: 'border-purple-400 text-purple-600',
  }
  const themeClass = colorMap[colorTheme] || 'border-slate-400 text-slate-600'

  return (
    <div
      className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 transition-all duration-300 cursor-pointer hover:shadow-xl flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
      }}
    >
      {/* Icon container */}
      <div className="mb-6">
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-colors duration-300 bg-white dark:bg-slate-900 ${themeClass}`}>
          <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-[1.1rem] font-bold text-slate-900 dark:text-white mb-3 leading-snug">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed flex-grow">{description}</p>

      {/* Mini UI preview - decorative skeletal lines matching image */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50">
        <div className="space-y-2">
          <div className="h-1.5 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 rounded-full w-full" />
          <div className="h-1.5 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 rounded-full w-10/12" />
          <div className="h-1.5 bg-gradient-to-r from-slate-100 to-transparent dark:from-slate-800 rounded-full w-full" />
        </div>
      </div>
    </div>
  )
}
