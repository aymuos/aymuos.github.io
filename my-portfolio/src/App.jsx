import { Suspense, lazy } from 'react';
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const About = lazy(() => import('./pages/About'));
const Articles = lazy(() => import('./pages/Articles'));

function PageTransition({ children }) {
  return (
    <motion.main
      className="page-shell"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

function RouteFallback() {
  return <main className="route-fallback" aria-label="Loading page"><span className="status-dot" /> Loading portfolio...</main>;
}

function PageBreadcrumbs({ pathname }) {
  const pageNames = {
    '/projects': 'Projects',
    '/experience': 'Experience',
    '/articles': 'Articles',
    '/about': 'About',
  };
  const currentPage = pageNames[pathname];

  if (!currentPage) return null;

  return (
    <nav className="page-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{currentPage}</span>
    </nav>
  );
}

function PortfolioLayout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <Navbar />
      <PageBreadcrumbs pathname={location.pathname} />
      <Suspense fallback={<RouteFallback />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/articles" element={<PageTransition><Articles /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <PortfolioLayout />
    </HashRouter>
  );
}

export default App;
