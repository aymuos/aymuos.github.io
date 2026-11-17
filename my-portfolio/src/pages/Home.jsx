import { Button, Card, CardBody, Chip } from '@heroui/react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Command, GitBranch, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects, profileLinks } from '../data/portfolio';

const metrics = [
  { value: '01', label: 'Curious mind', detail: 'always learning' },
  { value: '04', label: 'Focus areas', detail: 'one connected craft' },
  { value: '∞', label: 'Ideas to build', detail: 'starting with why' },
];

export default function Home() {
  return (
    <>
      <section className="hero-section page-container">
        <div className="hero-copy">
          <motion.div className="availability-pill" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span className="status-dot" /> Machine learning & generative AI
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.55 }}>
            Turning complex ideas into <span className="gradient-text">intelligent systems.</span>
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            I&apos;m Soumya Mukherjee — an ML &amp; GenAI engineer exploring causal AI, agentic workflows, and the craft of building useful things.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}>
            <Button as={Link} to="/projects" className="button-primary" endContent={<ArrowRight size={16} />}>Explore projects</Button>
            <Button as="a" href={profileLinks.scholar} target="_blank" rel="noreferrer" variant="bordered" className="button-secondary" startContent={<Braces size={15} />}>View research</Button>
          </motion.div>
          <motion.div className="hero-social-proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}>
            <a href={profileLinks.github} target="_blank" rel="noreferrer"><GitBranch size={15} /> github.com/aymuos <ArrowUpRight size={12} /></a>
            <span className="hero-social-divider" />
            <span><span className="status-dot" /> Open to meaningful problems</span>
          </motion.div>
        </div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.28, duration: 0.7 }}>
          <div className="art-glow" />
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
          <div className="art-core"><span className="art-core-glow" /><Sparkles size={34} strokeWidth={1.2} /></div>
          <span className="art-node node-one"><Braces size={17} /></span>
          <span className="art-node node-two"><Workflow size={17} /></span>
          <span className="art-node node-three"><Command size={17} /></span>
          <Card className="art-code-card"><CardBody>
            <div className="code-card-heading"><span className="code-dots"><i /><i /><i /></span><span>thinking.py</span><span className="code-lang">PY</span></div>
            <div className="code-line"><span>01</span><code><b>model</b> = build(<em>“with intent”</em>)</code></div>
            <div className="code-line"><span>02</span><code><b>system</b>.make_it_useful()</code></div>
            <div className="code-line"><span>03</span><code><i># intelligent by design</i></code></div>
          </CardBody></Card>
          <span className="art-label label-left">human-centered</span>
          <span className="art-label label-right">machine intelligence</span>
        </motion.div>
        <a href="#selected-work" className="scroll-cue"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="metrics-section">
        <div className="metrics-grid page-container">
          {metrics.map((metric, index) => (
            <div className="metric-item" key={metric.label}>
              <span className="metric-index">0{index + 1}</span>
              <div><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.detail}</small></div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-projects section-space page-container" id="selected-work">
        <div className="section-topline">
          <SectionHeading eyebrow="A few things I’m exploring" title="Selected work." description="Experiments in making machine intelligence more capable, more grounded, and more human." />
          <Button as={Link} to="/projects" variant="light" className="text-link">All projects <ArrowUpRight size={15} /></Button>
        </div>
        <div className="projects-grid featured-grid">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} featured onOpen={() => { window.location.hash = '#/projects'; }} />)}
        </div>
      </section>

      <section className="home-cta-section page-container">
        <div className="home-cta-card">
          <Chip size="sm" variant="bordered" className="cta-chip"><span className="status-dot" /> OPEN TO COLLABORATION</Chip>
          <h2>Have a good problem<br /><span className="gradient-text">worth solving?</span></h2>
          <p>Let&apos;s make something thoughtful, useful, and a little bit ambitious.</p>
          <Button as={Link} to="/about" className="button-primary" endContent={<ArrowUpRight size={15} />}>Start a conversation</Button>
        </div>
      </section>
    </>
  );
}
