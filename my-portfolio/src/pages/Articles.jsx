import { ArrowUpRight, BookOpen, GraduationCap, Newspaper, UsersRound } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profileLinks } from '../data/portfolio';

const sources = [
  {
    label: 'Medium',
    detail: '@aymuosmukherjee',
    description: 'Long-form notes on machine learning, generative AI, systems engineering, and lessons from building.',
    href: profileLinks.medium,
    icon: MediumIcon,
    className: 'medium',
  },
  {
    label: 'LinkedIn',
    detail: 'Professional profile',
    description: 'Career updates, technical ideas, collaborations, and practical perspectives on applied AI.',
    href: profileLinks.linkedin,
    icon: UsersRound,
    className: 'linkedin',
  },
  {
    label: 'Google Scholar',
    detail: 'Research publications',
    description: 'Explore publications, citations, and my academic work across machine learning and related fields.',
    href: profileLinks.scholar,
    icon: GraduationCap,
    className: 'scholar',
  },
];

function MediumIcon({ size = 20 }) {
  return <BookOpen size={size} />;
}

export default function Articles() {
  return (
    <div className="page-container subpage articles-page">
      <div className="page-intro">
        <SectionHeading
          eyebrow="Writing & research"
          title={<>Ideas, explored <span className="gradient-text">in public.</span></>}
          description="Essays, field notes, professional updates, and research publications across machine learning and intelligent systems."
        />
        <span className="experience-index">02 <span>—</span> 03<br /><small>READ & FOLLOW</small></span>
      </div>

      <section className="article-sources" aria-label="Writing and research profiles">
        {sources.map(({ label, detail, description, href, icon: Icon, className }) => (
          <a className={`article-source-card ${className}`} href={href} target="_blank" rel="noreferrer" key={label}>
            <div className="article-source-top">
              <span className="article-source-icon"><Icon size={20} /></span>
              <ArrowUpRight size={18} />
            </div>
            <div>
              <span className="article-source-detail">{detail}</span>
              <h2>{label}</h2>
              <p>{description}</p>
            </div>
            <span className="article-source-action">Visit profile <ArrowUpRight size={14} /></span>
          </a>
        ))}
      </section>

      <div className="writing-note">
        <Newspaper size={18} />
        <p><strong>What I write about.</strong> Practical generative AI, causal thinking, useful agent systems, research-to-production workflows, and the decisions behind building intelligent products.</p>
      </div>
    </div>
  );
}
