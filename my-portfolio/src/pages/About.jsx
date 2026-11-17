import { useState } from 'react';
import { Button, Card, CardBody, Chip } from '@heroui/react';
import { ArrowDown, ArrowUpRight, Check, Copy, GitBranch, GraduationCap, Mail, MessageSquareText, Terminal, UsersRound } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profileLinks } from '../data/portfolio';

const terminalLines = [
  { prompt: 'soumya@studio ~ %', command: 'whoami', output: 'Machine learning & generative AI engineer.' },
  { prompt: 'soumya@studio ~ %', command: 'focus --now', output: 'causal-ai  ·  agentic-systems  ·  useful-products' },
  { prompt: 'soumya@studio ~ %', command: 'status', output: 'Curious. Building. Always learning.', status: true },
];

const socialLinks = [
  { label: 'GitHub', detail: '@aymuos', href: profileLinks.github, icon: GitBranch },
  { label: 'LinkedIn', detail: 'Find me on LinkedIn', href: profileLinks.linkedin, icon: UsersRound },
  { label: 'Google Scholar', detail: 'Explore research', href: profileLinks.scholar, icon: GraduationCap },
];

export default function About() {
  const [terminalCommand, setTerminalCommand] = useState('');
  const [terminalResponse, setTerminalResponse] = useState(null);
  const [copied, setCopied] = useState(false);

  const runTerminalCommand = (event) => {
    event.preventDefault();
    const command = terminalCommand.trim().toLowerCase();
    if (!command) return;

    const responses = {
      help: 'Available commands: whoami, focus, status, resume.',
      whoami: 'Machine learning & generative AI engineer.',
      focus: 'causal-ai  ·  agentic-systems  ·  useful-products',
      status: 'Curious. Building. Always learning.',
      resume: 'Current focus: systems engineering, applied ML, and generative AI.',
    };

    setTerminalResponse({
      command,
      output: responses[command] || `command not found: ${command}. Try help.`,
    });
    setTerminalCommand('');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileLinks.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error('Unable to copy the email address.', error);
    }
  };

  return (
    <div className="page-container subpage about-page">
      <div className="page-intro">
        <SectionHeading eyebrow="A little context" title={<>Engineer by craft.<br /><span className="gradient-text">Curious by default.</span></>} description="The person behind the models, the prototypes, and all those little questions about how things work." />
        <span className="about-stamp">SM<br /><span>AI / ML</span></span>
      </div>

      <div className="about-layout">
        <section className="about-story">
          <span className="section-kicker">THE SHORT VERSION <span className="kicker-line" /></span>
          <h2>Hello, I&apos;m Soumya<span className="gradient-text">.</span></h2>
          <p className="about-lead">I work at the intersection of machine learning, software, and real-world problems.</p>
          <p>I&apos;m drawn to the moment an interesting research idea starts becoming something people can actually use. That means caring about the full picture: the data, the assumptions, the model, the interface, and what happens after deployment.</p>
          <p>My approach is grounded in first principles. Understand the problem before reaching for a technique, stay honest about uncertainty, and make every system easier to question, evaluate, and improve.</p>
          <div className="interest-chips">
            {['Causal AI', 'Generative systems', 'Human-centered tools', 'Responsible engineering'].map((interest) => <Chip key={interest} size="sm" variant="bordered" className="interest-chip">{interest}</Chip>)}
          </div>
          <div className="about-note"><MessageSquareText size={17} /><span><b>Always happy to talk</b><br />about good questions, thoughtful teams, and useful technology.</span></div>
        </section>

        <aside className="about-side">
          <Card className="terminal-card">
            <CardBody>
              <div className="terminal-topbar"><div className="terminal-dots"><i /><i /><i /></div><span><Terminal size={13} /> soumya — zsh</span><ArrowDown size={13} /></div>
              <div className="terminal-content" aria-label="Interactive terminal-style profile summary">
                {terminalLines.map((line) => (
                  <div className="terminal-row" key={line.command}>
                    <div><span className="terminal-prompt">{line.prompt}</span> <code>{line.command}</code></div>
                    <p className={line.status ? 'terminal-status' : ''}>{line.status && <span className="status-dot" />}{line.output}</p>
                  </div>
                ))}
                {terminalResponse && (
                  <div className="terminal-row terminal-response" aria-live="polite">
                    <div><span className="terminal-prompt">soumya@studio ~ %</span> <code>{terminalResponse.command}</code></div>
                    <p>{terminalResponse.output}</p>
                  </div>
                )}
                <form className="terminal-command-form" onSubmit={runTerminalCommand}>
                  <label className="terminal-prompt" htmlFor="terminal-command">soumya@studio ~ %</label>
                  <input
                    id="terminal-command"
                    aria-label="Enter a terminal command"
                    autoComplete="off"
                    value={terminalCommand}
                    onChange={(event) => setTerminalCommand(event.target.value)}
                    placeholder="try help, status, or resume"
                  />
                  <button type="submit" aria-label="Run terminal command"><ArrowUpRight size={14} /></button>
                </form>
              </div>
            </CardBody>
          </Card>
          <div className="connect-card">
            <span className="section-kicker">FIND ME AROUND THE WEB <span className="kicker-line" /></span>
            {socialLinks.map(({ label, detail, href, icon: Icon }) => (
              <a className="contact-link" href={href} target="_blank" rel="noreferrer" key={label}>
                <span className="contact-icon"><Icon size={17} /></span><span><b>{label}</b><small>{detail}</small></span><ArrowUpRight size={15} />
              </a>
            ))}
            <div className="contact-link">
              <span className="contact-icon"><Mail size={17} /></span>
              <span><b>Email</b><small>{profileLinks.email || 'Add your address in portfolio.js'}</small></span>
              <Button isIconOnly size="sm" variant="flat" className="copy-button" onPress={copyEmail} isDisabled={!profileLinks.email} aria-label="Copy email address">{copied ? <Check size={15} /> : <Copy size={15} />}</Button>
            </div>
            <p className="contact-hint"><span className="status-dot" />The fastest way to reach me is through GitHub.</p>
          </div>
        </aside>
      </div>

      <div className="about-bottom-line"><span>GOOD SYSTEMS START WITH GOOD QUESTIONS.</span><span>THANKS FOR STOPPING BY <ArrowUpRight size={13} /></span></div>
    </div>
  );
}
