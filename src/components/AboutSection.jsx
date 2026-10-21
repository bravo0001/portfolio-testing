import { motion } from 'framer-motion';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <h2 className="about-main-title">About Me</h2>

        <div className="about-grid">
          {/* Pegboard Column */}
          <div className="about-visual-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pegboard-wrapper"
            >
              <img
                src="/assets/23_bY6wXmmU9i0EYJxNQslIXCFLbVQ.png"
                alt="Thibaut's studio pegboard with Commodore 64, headphones, polaroids and stickers"
                className="pegboard-img"
              />

              {/* Vertical Dot-Matrix Screen with animated social icons video */}
              <div className="pegboard-screen-container">
                <video
                  src="/assets/jJH3J93BQGGSlmJabCJgBZ72RNI.webm"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="pegboard-matrix-video"
                />

                {/* 4 Interactive click zones over Twitter, Instagram, Behance, Email */}
                <a
                  href="https://twitter.com/tibolasticot"
                  target="_blank"
                  rel="noreferrer"
                  className="pegboard-hotspot hotspot-twitter"
                  title="Twitter"
                />
                <a
                  href="https://www.instagram.com/tcrepelle/"
                  target="_blank"
                  rel="noreferrer"
                  className="pegboard-hotspot hotspot-insta"
                  title="Instagram"
                />
                <a
                  href="https://www.behance.net/tcrepelle"
                  target="_blank"
                  rel="noreferrer"
                  className="pegboard-hotspot hotspot-behance"
                  title="Behance"
                />
                <a
                  href="mailto:thibautcrepelle@gmail.com"
                  className="pegboard-hotspot hotspot-email"
                  title="Email"
                />
              </div>
            </motion.div>
          </div>

          {/* Bio Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-text-col"
          >
            <p className="bio-name">
              My name is Thibaut Crépelle pronounced <span className="phonetic">/tee.bow: cray.pel/</span>
            </p>

            <p className="bio-paragraph">
              I'm a 27-year-old self-taught motion designer generalist with a passion for 80's products and a love for Italo-disco.
            </p>

            <p className="bio-paragraph">
              Based in the north of France, I make 3D objects dance (it rhymes).
            </p>

            <p className="bio-paragraph">
              My work mainly focus on 3D animation, camera motion and music syncing, to produce beautifully handcrafted &amp; thoughtful motion that bounces.
            </p>

            <p className="bio-paragraph">
              I've also honed my skills to model, texture, and render sleek product shots, heroes, and assets for webpages with Cinema4d, Octane and Plasticity. I also like to tinker with Rive, Spline and ThreeJS to create interactive projects for the worldwide interweb.
            </p>

            <p className="bio-paragraph highlight">
              If you're working on something that needs some magic sparks, feel free to reach out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
