import { SectionWrapper } from '../shared/SectionWrapper';
import { AnimatedSection } from '../shared/AnimatedSection';

const PROJECTS = [
  {
    title: 'Chitra Vilasa Garden City',
    description: 'We offer well planned and budget-friendly variations giving the independent decision to the investor to select.',
    image: '/images/projects/chitra-vilasa-1.jpg',
  },
  {
    title: 'Integral\'s SUNRISE CITY - TYPICAL FLOOR PLAN',
    description: 'We offer well planned and budget-friendly variations giving the independent decision to the investor to select.',
    image: '/images/projects/sunrise-city.jpg',
  },
  {
    title: 'Chitra Vilasa Garden City',
    description: 'We offer well planned and budget-friendly variations giving the independent decision to the investor to select.',
    image: '/images/projects/chitra-vilasa-2.jpg',
  },
];

const STATS = [
  { value: '100+', label: 'Happy Clients' },
  { value: '50+', label: 'Project Complete' },
  { value: '25+', label: 'Team Members' },
  { value: '10+', label: 'Awards Winning' },
];

/**
 * Projects section showing featured projects and company stats.
 */
export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <AnimatedSection>
        <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold text-center flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-brand-gold inline-block" />
          Royal Reality Groups
          <span className="w-8 h-0.5 bg-brand-gold inline-block" />
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold text-center mb-4">
          Projects
        </h2>
        <p className="font-body text-white/80 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Royal Reality Groups specializes in developing exceptional residential and
          commercial projects that redefine luxury living. Our meticulously planned projects
          are designed to offer unmatched quality, spacious layouts, and modern amenities.
          We are committed to creating thriving communities that cater to the discerning
          tastes of our customers.
        </p>
      </AnimatedSection>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {PROJECTS.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.1}>
            <div className="rounded-lg overflow-hidden border-2 border-brand-gold/30 hover:border-brand-gold transition-colors duration-300">
              <div className="h-48 bg-brand-dark-card overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="p-5 bg-brand-dark-card">
                <h3 className="font-heading text-lg text-brand-gold font-bold mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Stats */}
      <AnimatedSection delay={0.3}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-heading text-3xl md:text-4xl text-brand-gold font-bold">
                {stat.value}
              </span>
              <p className="font-body text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
