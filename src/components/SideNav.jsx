import { motion } from 'framer-motion';
import './SideNav.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Contact' }
];

export default function SideNav({ activeSection }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="side-nav">
      <div className="nav-container">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              <div className="dot-wrapper">
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="nav-active-dot"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
