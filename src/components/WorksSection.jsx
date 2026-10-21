import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WorksSection.css';

const RETRO_PROJECTS = [
  {
    id: 'macintosh',
    title: 'MacIntosh 128k',
    meta: 'Personal Project • Summer 2021',
    vimeoId: '563184334',
    breakdownLabel: 'MacIntosh Breakdown',
    breakdownUrl: 'https://www.behance.net/gallery/121563959/Macintosh-128k-Motion-Design'
  },
  {
    id: 'konica',
    title: 'Konica Pop',
    meta: 'Personal Project • Winter 2020',
    vimeoId: '520289367',
    breakdownLabel: 'Konica Pop Breakdown',
    breakdownUrl: 'https://www.behance.net/gallery/114853471/Konica-Pop-Motion-Design'
  },
  {
    id: 'walkman',
    title: 'Walkman WM-22',
    meta: 'Personal Project • Summer 2022',
    youtubeId: 'eaLXoluSqo0',
    breakdownLabel: 'Walkman Breakdown',
    breakdownUrl: 'https://www.behance.net/gallery/111812895/Sony-Walkman-WM-22-Motion-Design'
  }
];

const SPECIFY_VARIANTS = [
  {
    id: 'web',
    title: 'Specify - Web Design',
    meta: 'Work Experience • 2021 - 2024',
    paragraphs: [
      'From 2021 to 2024, I have been a Motion Designer at Specify, where I was brought on to develop a 3D identity and promote new feature launches.',
      'As the sole 3D nerd on the team, I built an extensive library of highly customizable assets and created an optimized render pipeline to distribute these assets across web pages, social media, and the product itself, in the fastest way possible.',
      'This role taught me to excel under tight deadlines.',
      'I also contributed to the website, refining my ability to craft cool looking and innovative assets. During this time, I gained extensive experience with tools like Figma, Spline, Lottie, Rive, React Three Fiber and Framer.',
      'Heck, we even had a framer award for this page.'
    ]
  },
  {
    id: 'launch',
    title: 'Specify - Launch',
    meta: 'Commercial Work • Winter 2021',
    paragraphs: [
      'To celebrate the official public launch of Specify, I directed and animated the hero reveal video and interactive launch week assets.',
      'This included complex 3D token visualizations, exploding UI components, and high-energy camera choreography synchronised to electronic beats.'
    ]
  },
  {
    id: 'notion',
    title: 'Specify - Notion',
    meta: 'Commercial Work • Summer 2023',
    paragraphs: [
      'Promotional launch assets for the official Specify × Notion integration, translating design tokens automatically into Notion databases.',
      'Crafted tactile 3D Notion-inspired pods, clay-textured isometric blocks, and seamless loop animations for Product Hunt.'
    ]
  }
];

export default function WorksSection() {
  const [retroIndex, setRetroIndex] = useState(0);
  const [specifyIndex, setSpecifyIndex] = useState(0);

  const currentRetro = RETRO_PROJECTS[retroIndex];
  const currentSpecify = SPECIFY_VARIANTS[specifyIndex];

  const handleNextRetro = () => {
    setRetroIndex((prev) => (prev + 1) % RETRO_PROJECTS.length);
  };

  const handleNextSpecify = () => {
    setSpecifyIndex((prev) => (prev + 1) % SPECIFY_VARIANTS.length);
  };

  return (
    <section id="works" className="works-section">
      <div className="works-inner">
        {/* Section Title */}
        <h2 className="works-main-title">Cool stuff I've done</h2>

        {/* ================= PROJECT 1: Retro Tech Carousel ================= */}
        <div className="project-card project-card-1">
          <div className="project-shelf-col">
            <div className="mac-shelf-glow" />
            <img
              src="/assets/13_7WNcAq4su9bTQjZvse2RD4Jab0A.png"
              alt="MacIntosh, Walkman, Konica shelf"
              className="shelf-img relative-z"
            />
          </div>

          <div className="project-info-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRetro.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="project-meta-box"
              >
                <h3 className="project-title">{currentRetro.title}</h3>
                <p className="project-meta">{currentRetro.meta}</p>
              </motion.div>
            </AnimatePresence>

            {/* Video embed container with authentic player */}
            <div className="video-card-wrapper">
              {currentRetro.vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${currentRetro.vimeoId}?autoplay=1&loop=1&muted=1&background=1`}
                  title={currentRetro.title}
                  className="project-embed-frame"
                  allow="autoplay; fullscreen"
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${currentRetro.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${currentRetro.youtubeId}`}
                  title={currentRetro.title}
                  className="project-embed-frame"
                  allow="autoplay; fullscreen"
                />
              )}
            </div>

            {/* Buttons row */}
            <div className="project-actions-row">
              <a
                href={currentRetro.breakdownUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-bordered"
              >
                {currentRetro.breakdownLabel} <span className="btn-arrow">→</span>
              </a>
              <button className="btn-pill-white" onClick={handleNextRetro}>
                Next Project <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROJECT 2: The Nostalgia Alphabet ================= */}
        <div className="project-card project-card-2">
          <div className="project-info-col">
            <div className="project-meta-box">
              <h3 className="project-title">The Nostalgia Alphabet</h3>
              <p className="project-meta">Personal Project • Winter / Spring 2024</p>
            </div>

            {/* Authentic YouTube Embed for Nostalgia Alphabet */}
            <div className="video-card-wrapper">
              <iframe
                src="https://www.youtube.com/embed/M3n33ChXmFc?autoplay=1&mute=1&loop=1&playlist=M3n33ChXmFc"
                title="The Nostalgia Alphabet"
                className="project-embed-frame"
                allow="autoplay; encrypted-media; fullscreen"
              />
            </div>

            <div className="project-actions-row">
              <a
                href="https://www.behance.net/gallery/196350623/The-Nostalgia-Alphabet-Motion-Design"
                target="_blank"
                rel="noreferrer"
                className="btn-pill-bordered"
              >
                The Nostalgia Alphabet Breakdown <span className="btn-arrow">→</span>
              </a>
              <a
                href="https://thibaut.cool"
                target="_blank"
                rel="noreferrer"
                className="btn-pill-white"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: 6 }}>
                  <path d="M 0 0 L 14 0 L 14 2 L 16 2 L 16 16 L 0 16 Z M 12 2 L 10 2 L 10 6 L 4 6 L 4 2 L 2 2 L 2 14 L 4 14 L 4 10 L 12 10 L 12 14 L 14 14 L 14 4 L 12 4 Z M 10 12 L 10 14 L 6 14 L 6 12 Z" />
                </svg>
                Download Plasticity Files <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="project-shelf-col">
            <img
              src="/assets/14_5roe231xcoeXdqih8T8kmTXeQQ.png"
              alt="The Nostalgia Alphabet shelf"
              className="shelf-img"
            />
          </div>
        </div>

        {/* ================= PROJECT 3: Specify - Web Design ================= */}
        <div className="project-card project-card-3">
          <div className="project-shelf-col">
            <div className="specify-laptop-wrapper">
              <img
                src="/assets/15_fl4b9z1nO8W3Gq5iuNFQCDxbjE.png"
                alt="Specify laptop and 3D token pods"
                className="shelf-img"
              />
              {/* Laptop screen video */}
              <div className="specify-laptop-screen">
                <video
                  src="/assets/l1ksee6gASTfFcS4SZV5NrOZR8.webm"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="specify-screen-video"
                />
              </div>
            </div>
          </div>

          <div className="project-info-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpecify.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-meta-box">
                  <h3 className="project-title">{currentSpecify.title}</h3>
                  <p className="project-meta">{currentSpecify.meta}</p>
                </div>

                <div className="specify-story-block">
                  {currentSpecify.paragraphs.map((p, idx) => (
                    <p key={idx} className="specify-story-body">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="project-actions-row justify-end">
              <button className="btn-pill-white" onClick={handleNextSpecify}>
                Next Specify Project <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROJECT 4: iMac G3 - Motion & Web ================= */}
        <div className="project-card project-card-4">
          <div className="project-info-col">
            <div className="project-meta-box">
              <h3 className="project-title">iMac G3 - Web and Motion</h3>
              <p className="project-meta">Personal Project • Summer 2025</p>
            </div>

            <p className="imac-desc">
              For this year cool personal project, I worked on a revival of the classic iMac G3. I only planned to do a video, as I often do, but I eventually decided to make a full parody-like website, that uses Apple's current UI layout with some Aqua elements here and there. Im really proud of this page because I was able to go quite deep with Rive animations and custom ThreeJs shaders. For the Apple nerds reading this, I had to cut some historically accurate details to both show the Aqua UI and the original iMac G3. Go take a look and let me know what you think on Instagram!
            </p>
            <p className="imac-notice">
              Keep in mind that the experience is better on desktop!
            </p>

            <div className="project-actions-row">
              <a
                href="https://www.thibaut.cool/g3"
                target="_blank"
                rel="noreferrer"
                className="btn-pill-white"
              >
                Go to the dedicated page <span className="btn-arrow">→</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=oi_4BwpcZks"
                target="_blank"
                rel="noreferrer"
                className="btn-pill-bordered"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
                  <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                </svg>
                Take a look at the video
              </a>
            </div>
          </div>

          <div className="project-shelf-col imac-shelf-col">
            <div className="imac-wrapper">
              <img
                src="/assets/21_asNcHhSbmCEKPPMf6dFVNhmxPw.png"
                alt="iMac G3 Bondi Blue"
                className="shelf-img imac-img"
              />
              {/* Video fitted into the translucent iMac CRT bezel */}
              <div className="imac-screen-inner">
                <video
                  src="/assets/DSmIK4pCNEzKE18RhxaxtsBw0wE.webm"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="imac-screen-video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
