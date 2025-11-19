import StatCard from './stat-card'
import Image from 'next/image'
import sideImage from '../app/assets/image.png'

export default function AboutHero() {
  const stats = [
    { number: '200+', label: 'We deliver great always', icon: 'briefcase' },
    { number: '10+', label: 'Experience you can count on', icon: 'briefcase' },
    { number: '20+', label: 'Award-Winning, Trusted Results', icon: 'award' },
    { number: '5K+', label: 'We have happy Clients worldwide', icon: 'users' },
  ]

  return (
    <section className="w-full py-4 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Hero Section */}
        <span className='font-bold underline underline-offset-8 '> 👀About Us</span>
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Who We Are. Learn About us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={sideImage}
                alt="Professional woman in office setting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-border">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                More About Us
              </button>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-muted-foreground">Get free Quote</p>
                  <p className="font-semibold text-foreground">22 (00) 356 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
