import { ArrowUpRight, GitBranch, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link to="/" className="footer-brand"><span className="brand-mark">s<span>.</span></span> soumya mukherjee</Link>
        <p><Sparkles size={14} /> Thoughtful AI, built for the real world.</p>
        <a href={profileLinks.github} target="_blank" rel="noreferrer"><GitBranch size={13} /> GitHub <ArrowUpRight size={13} /></a>
        <span className="footer-copyright">© {new Date().getFullYear()} · Built with intention</span>
      </div>
    </footer>
  );
}
