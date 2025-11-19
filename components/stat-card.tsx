interface StatCardProps {
  number: string
  label: string
  icon: string
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase':
        return (
          <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.728 0-7.333-.57-10.759-1.697m0 0a23.97 23.97 0 003.015-5.348m0 0a24.015 24.015 0 005.832-2.3M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case 'award':
        return (
          <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case 'users':
        return (
          <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 8.048M15 21H3v-2a6 6 0 0112 0v2zm6-11.5a3 3 0 110 6 3 3 0 010-6z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0">{getIcon(icon)}</div>
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{number}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </div>
  )
}
