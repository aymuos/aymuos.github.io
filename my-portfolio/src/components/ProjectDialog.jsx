import { Button, Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import { ArrowUpRight, ExternalLink, GitBranch, Layers3 } from 'lucide-react';

export default function ProjectDialog({ project, onClose }) {
  return (
    <Modal isOpen={Boolean(project)} onClose={onClose} size="2xl" scrollBehavior="inside" classNames={{ base: 'project-modal' }}>
      <ModalContent>
        {(close) => project && (
          <>
            <ModalHeader className="modal-header">
              <span className="eyebrow"><span className="eyebrow-dot" />{project.category}</span>
              <h2>{project.title}</h2>
            </ModalHeader>
            <ModalBody>
              <p className="modal-description">{project.details}</p>
              <div className="modal-section-label"><Layers3 size={15} /> Architecture notes</div>
              <div className="architecture-list">
                {project.architecture.map((step, index) => (
                  <div key={step} className="architecture-step"><span>0{index + 1}</span>{step}</div>
                ))}
              </div>
              <div className="modal-section-label">Technology</div>
              <div className="project-tags modal-tags">
                {project.stack.map((technology) => <Chip key={technology} size="sm" variant="bordered" className="tech-chip">{technology}</Chip>)}
              </div>
              <div className="benchmark-note"><span className="status-dot" />{project.metric}</div>
            </ModalBody>
            <ModalFooter className="modal-footer">
              <Button as="a" href={project.repo} target="_blank" rel="noreferrer" variant="bordered" className="modal-link">
                <GitBranch size={16} /> Repository <ArrowUpRight size={14} />
              </Button>
              <Button as="a" href={project.demo} target="_blank" rel="noreferrer" className="modal-primary">
                <ExternalLink size={15} /> {project.demoLabel}
              </Button>
              <Button variant="light" onPress={close}>Close</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
