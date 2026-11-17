import { Button, Card, CardBody, Chip } from '@heroui/react';
import { ArrowUpRight, ChartNoAxesColumnIncreasing, GitBranch, ScanEye, Sparkles, Workflow } from 'lucide-react';

const icons = {
  sparkles: Sparkles,
  chart: ChartNoAxesColumnIncreasing,
  scan: ScanEye,
  workflow: Workflow,
};

export default function ProjectCard({ project, onOpen, featured = false }) {
  const Icon = icons[project.icon] || Sparkles;

  return (
    <Card isPressable onPress={() => onOpen?.(project)} className={`project-card project-card-${project.color}${featured ? ' featured-card' : ''}`}>
      <CardBody className="project-card-body">
        <div className="project-card-top">
          <span className="project-number">{project.number} <span>/ 04</span></span>
          <span className="project-icon"><Icon size={19} strokeWidth={1.7} /></span>
        </div>
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.stack.slice(0, featured ? 3 : 4).map((technology) => (
            <Chip key={technology} size="sm" variant="bordered" className="tech-chip">{technology}</Chip>
          ))}
        </div>
        <div className="project-card-bottom">
          <span className="project-metric"><GitBranch size={13} /> {project.metric}</span>
          <Button isIconOnly size="sm" variant="light" className="project-arrow" aria-label={`View ${project.title} details`}>
            <ArrowUpRight size={17} />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
