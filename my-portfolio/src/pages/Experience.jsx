import { useState } from 'react';
import { Card, CardBody } from '@heroui/react';
import { ArrowUpRight, Brain, Braces, ChevronDown, Cloud, Code2, Layers, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { skillGroups, timeline } from '../data/portfolio';

const icons = { sparkles: Sparkles, layers: Layers, rocket: Rocket };
const skillIcons = { brain: Brain, sparkles: Sparkles, server: Cloud, code: Code2 };

export default function Experience() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="page-container subpage experience-page">
      <div className="page-intro">
        <SectionHeading eyebrow="The craft behind the code" title={<>A systems <span className="gradient-text">mindset.</span></>} description="An evolving path across intelligent systems, software engineering, and the questions that connect them." />
        <span className="experience-index">01 <span>—</span> 03<br /><small>HOW I WORK</small></span>
      </div>

      <div className="experience-layout">
        <section className="timeline-section">
          <div className="section-kicker">THE JOURNEY <span className="kicker-line" /></div>
          <div className="roadmap-accordion">
            {timeline.map((item, index) => {
              const Icon = icons[item.icon];
              const isOpen = openItem === index;
              return (
                <article className={`roadmap-card${isOpen ? ' open' : ''}`} key={item.title}>
                  <button
                    className="roadmap-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                  >
                    <span className="roadmap-period">{item.period}</span>
                    <span className="roadmap-heading">
                      <span className="roadmap-org">{item.organization}</span>
                      <h3><Icon size={16} />{item.title}</h3>
                    </span>
                    <ChevronDown className="roadmap-chevron" size={18} />
                  </button>
                  {isOpen && (
                    <div className="roadmap-panel">
                      <span className="timeline-subtitle">{item.subtitle}</span>
                      <p>{item.description}</p>
                      <div className="roadmap-details">
                        <div>
                          <small>CORE TOPICS</small>
                          <div className="roadmap-tags">{item.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
                        </div>
                        <div>
                          <small>KEY HIGHLIGHTS</small>
                          <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="skills-section">
          <div className="section-kicker">WHAT I BRING <span className="kicker-line" /></div>
          <div className="skill-groups">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[group.icon];
              return (
                <Card className="skill-card" key={group.title}>
                  <CardBody>
                    <div className="skill-card-heading"><span className="skill-icon"><Icon size={16} /></span><span>{group.title}</span><small>0{index + 1}</small></div>
                    <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </section>
      </div>

      <div className="engineering-principles">
        <div><span className="eyebrow"><Braces size={14} /> ENGINEERING PRINCIPLE</span><h2>Make it work.<br /><span className="gradient-text">Understand why.</span></h2></div>
        <p>Start with the problem, not the model. Make assumptions visible, keep feedback close, and build systems that earn their place in someone&apos;s workflow.</p>
        <Link to="/about" className="principle-link">A little more about me <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  );
}
