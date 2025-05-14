import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroInner}>
        <img src="/img/icon.png" alt="Beamify Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome to Beamify Documentation</h1>
        <p className={styles.subtitle}>
          The next-generation platform for creators, communities, and live streaming.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/introduction"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresHeader}>
        <h2 className={styles.featuresTitle}>What Makes Beamify Special?</h2>
        <p className={styles.featuresSubtitle}>
          Explore the powerful features that make Beamify the next-generation platform for creators, communities, and audiences.
        </p>
      </div>
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🎥</span>
          <h3>Live Streaming</h3>
          <p>Ultra-low latency, high-quality video streaming for creators and audiences.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>💬</span>
          <h3>Interactive Chat</h3>
          <p>Real-time chat with reactions, moderation tools, and community engagement.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>👥</span>
          <h3>Community Spaces</h3>
          <p>Join or create communities, follow topics, and connect with like-minded people.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>💸</span>
          <h3>Creator Monetization</h3>
          <p>Subscriptions, tips, and tools to help creators grow and earn.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📊</span>
          <h3>Analytics & Insights</h3>
          <p>Powerful dashboards and analytics for creators and admins.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🛡️</span>
          <h3>Advanced Moderation</h3>
          <p>Comprehensive tools to keep your community safe and positive.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📱</span>
          <h3>Mobile Friendly</h3>
          <p>Enjoy Beamify on any device with a seamless mobile experience.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>😃</span>
          <h3>Custom Emotes & Stickers</h3>
          <p>Personalize your chat and streams with custom emotes and stickers.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📅</span>
          <h3>Event Scheduling</h3>
          <p>Plan, promote, and manage live events for your audience.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🗂️</span>
          <h3>Content Archiving</h3>
          <p>Save and replay past streams and content for your community.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🔌</span>
          <h3>Third-Party Integrations</h3>
          <p>Connect with Discord, Twitter, and other platforms for a unified experience.</p>
        </div>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>♿</span>
          <h3>Accessibility Features</h3>
          <p>Designed for everyone, including screen reader support and high-contrast modes.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Beamify Documentation"
      description="Documentation for the Beamify platform"
    >
      <HeroSection />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
