import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactSection.css';

const KEYS = [
  // Row 1
  {
    id: 'home',
    name: 'Home',
    src: '/assets/31_KtIqmUXTPHsNEBAE4H0fLIOHwI.png',
    alt: 'HOME key',
    top: 77,
    left: 32,
    width: 173,
    height: 108
  },
  {
    id: 'g3',
    name: 'G3',
    src: '/assets/32_THw8mjOGbGntXHS1W97Xlgut4.png',
    alt: 'G3 key',
    top: 77,
    left: 204,
    width: 100,
    height: 108
  },
  {
    id: 'ig',
    name: 'Instagram',
    src: '/assets/33_IFd2dfQSzIj6HFASsLxT3ySPsOs.png',
    alt: 'Instagram key',
    top: 77,
    left: 301,
    width: 100,
    height: 108
  },

  // Row 2
  {
    id: 'email',
    name: 'Email',
    src: '/assets/36_kD0w1LenBDsNsJQqsdqqq51IzXw.png',
    alt: '@ key',
    top: 153,
    left: 29,
    width: 103,
    height: 108
  },
  {
    id: 'hire',
    name: 'Hire Me',
    src: '/assets/34_KCMpUs92v9n5Qsp8M3k7TGjEGxo.png',
    alt: 'HIRE ME key',
    top: 153,
    left: 125,
    width: 173,
    height: 108
  },
  {
    id: 'twitter',
    name: 'Twitter',
    src: '/assets/35_RXuZJ8ocwVgpoAk8kGK9Jvs8o.png',
    alt: 'X key',
    top: 153,
    left: 299,
    width: 100,
    height: 108
  },

  // Row 3
  {
    id: 'call',
    name: 'Call Me',
    src: '/assets/37_mXkpo55AdMspPGiEE6Y7uKftm4.png',
    alt: 'CALL ME key',
    top: 227,
    left: 18,
    width: 178,
    height: 108
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    src: '/assets/38_wMbDmeB4vyNZ7J1SYST9jLHUTXo.png',
    alt: 'DB key',
    top: 227,
    left: 193,
    width: 104,
    height: 108
  },
  {
    id: 'behance',
    name: 'Behance',
    src: '/assets/39_z4pojactJ5SXSFXAYJYz0DOEA.png',
    alt: 'BH key',
    top: 227,
    left: 295,
    width: 104,
    height: 108
  }
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('thibautcrepelle@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleKeyClick = (keyId) => {
    setActiveKey(keyId);
    setTimeout(() => setActiveKey(null), 150);

    switch (keyId) {
      case 'home':
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'g3':
        window.open('https://www.thibaut.cool/g3', '_blank');
        break;
      case 'ig':
        window.open('https://www.instagram.com/tcrepelle/', '_blank');
        break;
      case 'email':
        copyEmail();
        break;
      case 'hire':
        window.open('https://contra.com/thibaut_crepelle_o5gehfow', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/tibolasticot', '_blank');
        break;
      case 'call':
        window.open('https://calendly.com/thibautcrepelle/30min', '_blank');
        break;
      case 'dribbble':
        window.open('https://dribbble.com/tcrepelle', '_blank');
        break;
      case 'behance':
        window.open('https://www.behance.net/tcrepelle7172', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-radial-glow" />

      <div className="contact-inner">
        <h2 className="contact-main-title">Hit me up</h2>

        {/* ================= 1:1 AUTHENTIC CYBERDECK CONSOLE ================= */}
        <div className="cyberdeck-wrapper">
          <div className="cyberdeck-body">
            {/* Left Keyboard Panel */}
            <div className="cyberdeck-left">
              {/* Authentic Panel Background Texture */}
              <img
                src="/assets/28_iT5qW38srTQkWIhfDBKFI7t0c.png"
                alt="Cyberdeck left panel"
                className="cyberdeck-bg-img"
              />

              {/* Status Bar Video: Available For Freelance */}
              <div className="cyberdeck-status-video-wrap">
                <video
                  src="/assets/NTPQwD8OtB7Vx4FSKblgSSFTTL8.mp4"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="cyberdeck-status-video"
                />
              </div>

              {/* Status Bar Bezel Overlay */}
              <img
                src="/assets/29_FhX5JDdQ5h9hI3ExcyblKv0GpY.png"
                alt="Status bar bezel"
                className="cyberdeck-status-bezel"
              />

              {/* Exact 9 Keycaps positioned with Framer coordinates */}
              {KEYS.map((k) => (
                <button
                  key={k.id}
                  className={`cyberdeck-key ${activeKey === k.id ? 'pressed' : ''}`}
                  style={{
                    top: `${k.top}px`,
                    left: `${k.left}px`,
                    width: `${k.width}px`,
                    height: `${k.height}px`
                  }}
                  onClick={() => handleKeyClick(k.id)}
                  aria-label={k.name}
                >
                  <img src={k.src} alt={k.alt} className="cyberdeck-keycap-img" />
                </button>
              ))}
            </div>

            {/* Middle Speaker Grill with authentic fill texture */}
            <div className="cyberdeck-middle">
              <img
                src="/assets/40_SVsHDg5KkIO0FRxYhIesxoF83ps.png"
                alt="Cyberdeck middle speaker grill"
                className="cyberdeck-middle-img"
              />
            </div>

            {/* Right Oscilloscope Panel */}
            <div className="cyberdeck-right">
              {/* Animated CRT Waveform Video */}
              <div className="cyberdeck-crt-wrap">
                <video
                  src="/assets/h3ge2KKuYcGsAjrF289adsZsPN4.mp4"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="cyberdeck-crt-video"
                />
              </div>

              {/* Oscilloscope Bezel Overlay */}
              <img
                src="/assets/41_S0ukfbm1gOMN44Z910yrv8PNXts.png"
                alt="Cyberdeck oscilloscope frame"
                className="cyberdeck-right-bezel"
              />
            </div>
          </div>
        </div>

        {/* ================= AUTHENTIC CTA & SOCIAL LINKS ================= */}
        <div className="contact-text-block">
          <p className="contact-lead-text">
            Want to get in touch with me? The best way to reach out would be to email me!
          </p>

          <div className="contact-cta-row">
            <button className="pixel-action-btn btn-white" onClick={copyEmail}>
              <span className="btn-bracket bracket-left" />
              <span className="btn-label">{copied ? 'Email Copied!' : 'Copy my E-mail'}</span>
              <span className="btn-bracket bracket-right" />
            </button>
          </div>

          <p className="contact-sub-text">
            However you can start the conversation through Twitter, it's the social where I'm the most active!
          </p>

          <div className="contact-social-row">
            <a
              href="https://twitter.com/tibolasticot"
              target="_blank"
              rel="noreferrer"
              className="pixel-action-btn btn-dark"
            >
              <span className="btn-bracket bracket-left" />
              <span className="btn-label">Twitter Profile</span>
              <span className="pixel-arrow">→</span>
              <span className="btn-bracket bracket-right" />
            </a>
          </div>

          <p className="contact-quick-note">
            (I've included Behance and Instagram, but I don't check my DMs as often)
          </p>

          <div className="contact-extra-socials">
            <a
              href="https://www.behance.net/tcrepelle7172"
              target="_blank"
              rel="noreferrer"
              className="pixel-action-btn btn-bordered"
            >
              <span className="btn-bracket bracket-left" />
              <span className="btn-label">Behance</span>
              <span className="btn-bracket bracket-right" />
            </a>
            <a
              href="https://www.instagram.com/tcrepelle/"
              target="_blank"
              rel="noreferrer"
              className="pixel-action-btn btn-bordered"
            >
              <span className="btn-bracket bracket-left" />
              <span className="btn-label">Instagram</span>
              <span className="btn-bracket bracket-right" />
            </a>
          </div>
        </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="toast-copied"
            >
              ✓ Email copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="portfolio-footer">
          <p>© Thibaut Crépelle • Remote 3D Motion Design Freelance based in Lille, France</p>
        </footer>
      </div>
    </section>
  );
}
