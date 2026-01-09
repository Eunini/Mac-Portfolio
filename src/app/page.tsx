import CustomCursor from "@/components/Cursor";
import TextCycle from "@/components/TextCycle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="creative-layout">
      <CustomCursor />

      {/* Background Decor */}
      <div className={styles.backgroundDecor}>
        <div className={styles.gradientCircle1} />
        <div className={styles.gradientCircle2} />
      </div>

      {/* Nav */}
      <nav className={`${styles.nav} glass`}>
        <div className={styles.navBrand}>
          <img src="/logo.jpeg" alt="ALM Logo" className={styles.logoImg} />
          <span>ALM.</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in">
            <span className={styles.designation}>Abraham Lincoln Macbeth</span><br />
            <TextCycle />
          </h1>
          <p className={`${styles.heroSub} animate-fade-in`} style={{ animationDelay: "0.2s" }}>
            Hailing from the prestigious <strong>University of Ibadan</strong>, I blend
            technical precision with artistic intuition to build the future of design.
          </p>
          <div className={`${styles.heroActions} animate-fade-in`} style={{ animationDelay: "0.4s" }}>
            <a href="#work" className={styles.primaryButton}>Explore Projects</a>
            <div className={styles.scrollIndicator}>
              <span>Scroll</span>
              <div className={styles.line} />
            </div>
          </div>
        </div>

        <div className={styles.floatingAsset}>
          <div className={`${styles.assetCard} glass`}>
            <div className={styles.assetInner}>
              <div className={styles.circle} />
              <div className={styles.rect} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutText} animate-fade-in`}>
              <h2 className="text-gradient">About Me</h2>
              <p>
                I am <strong>Abraham Lincoln Macbeth</strong>, a visionary UI Designer and Visual Artist
                currently honing my craft at the <strong>University of Ibadan</strong>.
                My work is a fusion of technical precision and artistic intuition.
              </p>
              <p>
                As a student of the prestigious UI, I am deeply influenced by the intersection of
                traditional visual arts and modern digital interfaces. Whether it's crafting
                a brand identity, designing a seamless user experience, or editing high-impact
                motion graphics, my goal is to build the future of design.
              </p>
              <div className={styles.skillsTag}>
                <span>UI/UX</span>
                <span>Visual Arts</span>
                <span>Graphic Design</span>
                <span>Video Editing</span>
                <span>Motion Graphics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className={styles.portfolio}>
        <div className={styles.sectionHeader}>
          <h2>Selected Work</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          <div className={`${styles.projectCard} glass`}>
            <div className={styles.projectImage}>
              <img src="/brand.png" alt="Brand Identity" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Brand Identity</h3>
              <p>2023 • Digital Design</p>
            </div>
          </div>
          <div className={`${styles.projectCard} glass`}>
            <div className={styles.projectImage}>
              <img src="/render.png" alt="3D Motion" />
            </div>
            <div className={styles.projectInfo}>
              <h3>3D Motion</h3>
              <p>2024 • Animation</p>
            </div>
          </div>
          <div className={`${styles.projectCard} glass`}>
            <div className={styles.projectImage}>
              <img src="/uiux.png" alt="UI/UX Design" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Fintech App</h3>
              <p>2024 • User Interface</p>
            </div>
          </div>
          <div className={`${styles.projectCard} glass`}>
            <div className={styles.projectImage}>
              <img src="/poster.png" alt="Art Poster" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Art Poster</h3>
              <p>2024 • Visual Arts</p>
            </div>
          </div>
          <div className={`${styles.projectCard} glass`}>
            <div className={styles.projectImage}>
              <img src="/magazine.png" alt="Editorial Design" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Magazine Layout</h3>
              <p>2024 • Typography</p>
            </div>
          </div>
          <div className={`${styles.projectCard} glass`}>
            <div className={styles.projectImage}>
              <img src="/package.png" alt="Packaging Design" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Luxury Packaging</h3>
              <p>2025 • Product Design</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <img src="/logo.jpeg" alt="ALM Logo" className={styles.logoImg} />
            <span>ALM.</span>
          </div>
          <div className={styles.socials}>
            <a href="#">LinkedIn</a>
            <a href="https://www.instagram.com/humanfromearth03?igsh=YnR3YXBnN2lmNWh5" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/+2347032239783" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 Abraham Lincoln Macbeth. All rights reserved.</p>
          <p>University of Ibadan • Designer</p>
        </div>
      </footer>
    </main>
  );
}

