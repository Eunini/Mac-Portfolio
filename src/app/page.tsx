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
        <div className={styles.navBrand}>ALM.</div>
        <div className={styles.navLinks}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.cta}>Contact</a>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContent}>
          <h2 className="text-gradient">Let's Create<br />Something Iconic</h2>
          <p>Currently accepting new projects and creative collaborations.</p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" className="glass" />
              <input type="email" placeholder="Email" className="glass" />
            </div>
            <textarea placeholder="Message" className="glass"></textarea>
            <button type="submit" className={styles.primaryButton}>Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>ALM.</div>
          <div className={styles.socials}>
            <a href="#">Dribbble</a>
            <a href="#">Behance</a>
            <a href="#">Instagram</a>
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

