import { useMemo, useState } from 'react';
import { Button, Chip } from '@heroui/react';
import { ArrowDown, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectDialog from '../components/ProjectDialog';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

const categories = ['All work', 'Generative AI & Agents', 'Causal ML & Optimization', 'Production Systems'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = useMemo(
    () => activeCategory === categories[0] ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="page-container subpage projects-page">
      <div className="page-intro">
        <SectionHeading eyebrow="Selected explorations" title={<>Ideas into <span className="gradient-text">experiments.</span></>} description="A growing collection of explorations across machine learning, generative AI, and the engineering that makes them useful." />
        <div className="page-intro-aside"><span className="intro-aside-icon"><SlidersHorizontal size={17} /></span><span>Curiosity-led<br />engineering</span></div>
      </div>

      <div className="filter-toolbar">
        <div className="filter-label">BROWSE BY FOCUS <ArrowDown size={12} /></div>
        <div className="filter-chips" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              radius="full"
              variant={activeCategory === category ? 'solid' : 'bordered'}
              className={`filter-chip${activeCategory === category ? ' filter-chip-active' : ''}`}
              aria-pressed={activeCategory === category}
              onPress={() => setActiveCategory(category)}
            >
              {category}<span className="filter-count">{category === categories[0] ? projects.length : projects.filter((project) => project.category === category).length}</span>
            </Button>
          ))}
        </div>
        <span className="filter-result-count"><Chip size="sm" variant="flat">{filteredProjects.length} projects</Chip></span>
      </div>

      <div className="projects-grid projects-all-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="project-grid-item" style={{ '--card-index': index }}>
            <ProjectCard project={project} onOpen={setSelectedProject} />
          </div>
        ))}
      </div>

      <div className="project-footnote"><span className="status-dot" /> Concepts and explorations · Details open on selection <ArrowUpRight size={14} /></div>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
