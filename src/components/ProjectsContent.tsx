'use client';

import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Star, GitFork, Folder, ArrowRight, Sparkles, Rocket, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./ScrollAnimation";
import { AnimatedCounter } from "./AnimatedCounter";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

function getLangColor(lang: string | null) {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3572A5',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Shell: '#89e051',
  };
  return colors[lang || ''] || '#666';
}

export function ProjectsContent({ 
  repos, 
  totalStars, 
  languages, 
  featured, 
  recent
}: { 
  repos: Repo[];
  totalStars: number;
  languages: string[];
  featured: Repo[];
  recent: Repo[];
}) {
  const highlights = [
    { icon: Sparkles, number: repos.length.toString(), label: 'Projects' },
    { icon: Star, number: totalStars.toString(), label: 'Stars' },
    { icon: GitFork, number: repos.reduce((a, r) => a + r.forks_count, 0).toString(), label: 'Forks' },
    { icon: Layers, number: languages.length.toString(), label: 'Languages' },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, paddingTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          
          {/* Header */}
          <ScrollAnimation>
            <section style={{ padding: '100px 0 80px' }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px', letterSpacing: '0.05em' }}>PROJECTS</div>
              <h1 style={{ fontSize: '72px', fontWeight: '600', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Built in 2026.
              </h1>
              <p style={{ color: '#666', maxWidth: '480px', lineHeight: 1.6, fontSize: '16px' }}>
                Everything we've built. Live from GitHub — updated every time you load.
              </p>
            </section>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#1a1a1a', marginBottom: '80px', border: '1px solid #1a1a1a' }}>
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} style={{ background: '#000', padding: '40px', textAlign: 'center' }} className="hover-lift">
                    <Icon size={20} style={{ marginBottom: '16px', opacity: 0.6 }} />
                    <div style={{ fontSize: '48px', fontWeight: '600', marginBottom: '8px' }}>
                      {h.label === 'Projects' && <AnimatedCounter value={repos.length} />}
                      {h.label === 'Stars' && <AnimatedCounter value={totalStars} />}
                      {h.label === 'Forks' && <AnimatedCounter value={repos.reduce((a, r) => a + r.forks_count, 0)} />}
                      {h.label === 'Languages' && <AnimatedCounter value={languages.length} />}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h.label}</div>
                  </div>
                );
              })}
            </section>
          </ScrollAnimation>

          {/* Featured */}
          <ScrollAnimation>
            <section style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '24px', letterSpacing: '0.1em' }}>FEATURED</h2>
              <motion.div 
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {featured.map((p) => (
                  <motion.div key={p.name} variants={itemVariants}>
                    <a href={p.html_url} target="_blank" style={{ background: '#000', padding: '40px', display: 'block' }} className="hover-lift">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <span style={{ fontSize: '20px', fontWeight: '600' }}>{p.name}</span>
                        {p.stargazers_count > 0 && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#666' }}>
                            <Star size={12} /> {p.stargazers_count}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>{p.description || 'No description'}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: getLangColor(p.language) }} />
                        <span style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>{p.language || 'Code'}</span>
                        <span style={{ fontSize: '12px', color: '#333' }}>•</span>
                        <span style={{ fontSize: '12px', color: '#666' }}>Updated {new Date(p.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </ScrollAnimation>

          {/* All repos */}
          <ScrollAnimation>
            <section style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '24px', letterSpacing: '0.1em' }}>ALL PROJECTS</h2>
              <motion.div 
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {recent.map((p) => (
                  <motion.div key={p.name} variants={itemVariants}>
                    <a href={p.html_url} target="_blank" style={{ background: '#000', padding: '32px', display: 'block' }} className="hover-lift">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '15px', fontWeight: '500' }}>{p.name}</span>
                        {p.stargazers_count > 0 && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#666' }}>
                            <Star size={12} /> {p.stargazers_count}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: 1.5 }}>{p.description || 'No description'}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>
                        {p.language || 'Code'}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </ScrollAnimation>

          {/* Languages */}
          <ScrollAnimation>
            <section style={{ padding: '32px', border: '1px solid #1a1a1a', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '24px', letterSpacing: '0.1em' }}>LANGUAGES USED</h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {languages.map((lang) => (
                  <span key={lang} style={{ fontSize: '13px', padding: '10px 20px', border: '1px solid #1a1a1a', transition: 'all 0.2s' }} className="hover-glow">{lang}</span>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation>
            <section style={{ textAlign: 'center', padding: '80px 0', borderTop: '1px solid #1a1a1a', marginBottom: '40px' }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>View all repositories on GitHub</p>
              <a href="https://github.com/thegreatalxx" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', transition: 'all 0.2s' }} className="hover-glow">
                GitHub <ArrowRight size={14} />
              </a>
            </section>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </div>
  );
}
