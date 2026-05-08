'use client';

import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight, Code, Globe, Star, GitFork, Folder, Microscope, Sparkles, Rocket, Layers, Boxes, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./ScrollAnimation";
import { AnimatedCounter } from "./AnimatedCounter";
import { Typewriter } from "./Typewriter";

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

export function HomeContent({ 
  repos, 
  totalStars, 
  totalForks, 
  languages, 
  featured 
}: { 
  repos: Repo[];
  totalStars: number;
  totalForks: number;
  languages: string[];
  featured: Repo[];
}) {
  const services = [
    { icon: Sparkles, title: 'AI Tools', desc: 'Integrations connecting Claude, GPT-4o, and Gemini to everyday services.' },
    { icon: Code, title: 'Developer Utilities', desc: 'CLI tools, session managers, and productivity boosters.' },
    { icon: Globe, title: 'Open Source', desc: 'Everything we build is free and open to the community.' },
    { icon: Microscope, title: 'Experiments', desc: "We build weird stuff because it's cool." },
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
          
          {/* Hero */}
          <section style={{ padding: '140px 0 120px', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', right: 0, width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', transform: 'translateY(-50%)', animation: 'float 8s ease-in-out infinite' }} />
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px', letterSpacing: '0.05em' }}>TORONTO, 2026</div>
              <h1 style={{ fontSize: '80px', fontWeight: '600', marginBottom: '24px', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                We build<br />
                <span style={{ background: 'linear-gradient(270deg, #fff, #666, #fff)', backgroundSize: '400% 400%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient 4s ease infinite' }}>
                  <Typewriter words={["weird things", "AI tools", "experiments", "the future"]} />
                </span>
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '480px', lineHeight: 1.6, marginBottom: '40px' }}>
                Software lab building AI tools, developer utilities, and open-source experiments.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://github.com/thegreatalxx" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', background: '#fff', color: '#000', fontWeight: '500', fontSize: '13px', transition: 'all 0.3s' }} className="hover-lift">
                  GH
                </a>
                <Link href="/about" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', border: '1px solid #333', fontSize: '13px', transition: 'all 0.3s' }} className="hover-glow">
                  About <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <motion.div 
              style={{ position: 'relative', width: '280px', height: '350px', marginTop: '60px', marginLeft: '-40px', flexShrink: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/mascot.png" alt="Mascot" width={280} height={350} style={{ objectFit: 'contain', animation: 'float 6s ease-in-out infinite' }} />
            </motion.div>
          </section>

          {/* Stats */}
          <ScrollAnimation>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a', marginBottom: '120px', border: '1px solid #1a1a1a' }}>
              <div style={{ background: '#000', padding: '40px' }} className="hover-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Folder size={16} color="#666" />
                  <span style={{ fontSize: '12px', color: '#666', letterSpacing: '0.1em' }}>REPOSITORIES</span>
                </div>
                <div style={{ fontSize: '56px', fontWeight: '600', marginBottom: '4px', lineHeight: 1 }}>
                  <AnimatedCounter value={repos.length} />
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>On GitHub</div>
              </div>
              <div style={{ background: '#000', padding: '40px' }} className="hover-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Star size={16} color="#666" />
                  <span style={{ fontSize: '12px', color: '#666', letterSpacing: '0.1em' }}>TOTAL STARS</span>
                </div>
                <div style={{ fontSize: '56px', fontWeight: '600', marginBottom: '4px', lineHeight: 1 }}>
                  <AnimatedCounter value={totalStars} />
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>Earned</div>
              </div>
              <div style={{ background: '#000', padding: '40px' }} className="hover-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <GitFork size={16} color="#666" />
                  <span style={{ fontSize: '12px', color: '#666', letterSpacing: '0.1em' }}>TOTAL FORKS</span>
                </div>
                <div style={{ fontSize: '56px', fontWeight: '600', marginBottom: '4px', lineHeight: 1 }}>
                  <AnimatedCounter value={totalForks} />
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>Across repos</div>
              </div>
            </section>
          </ScrollAnimation>

           {/* Repos */}
          <ScrollAnimation>
            <section style={{ marginBottom: '120px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '12px', color: '#666', letterSpacing: '0.1em' }}>RECENT PROJECTS</h2>
                {repos.length > 0 && (
                  <Link href="/projects" style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} className="hover-glow">
                    All projects <ArrowRight size={12} />
                  </Link>
                )}
              </div>
              {repos.length === 0 ? (
                <div style={{ padding: '32px', border: '1px solid #1a1a1a', textAlign: 'center', color: '#666' }}>
                  Unable to load repositories right now
                </div>
              ) : (
                <motion.div 
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {featured.map((p) => (
                    <motion.div key={p.name} variants={itemVariants}>
                      <a href={p.html_url} target="_blank" style={{ background: '#000', padding: '32px', display: 'block', transition: 'all 0.3s' }} className="hover-lift">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <span style={{ fontSize: '16px', fontWeight: '500' }}>{p.name}</span>
                          {p.stargazers_count > 0 && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#666' }}>
                              <Star size={12} /> {p.stargazers_count}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: 1.5 }}>{p.description || 'No description'}</p>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', color: '#666' }}>
                          <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.language || 'Code'}</span>
                          <span style={{ color: '#333' }}>•</span>
                          <span>Updated {new Date(p.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </section>
          </ScrollAnimation>

          {/* Services */}
          <ScrollAnimation>
            <section style={{ marginBottom: '120px' }}>
              <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '40px', letterSpacing: '0.1em' }}>WHAT WE DO</h2>
              <motion.div 
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.div key={s.title} variants={itemVariants}>
                      <div style={{ background: '#000', padding: '40px' }} className="hover-lift">
                        <Icon size={24} style={{ marginBottom: '24px', opacity: 0.6 }} />
                        <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>{s.title}</div>
                        <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{s.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          </ScrollAnimation>

          {/* Languages */}
          <ScrollAnimation>
            <section style={{ marginBottom: '120px', padding: '32px', border: '1px solid #1a1a1a' }}>
              <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '24px', letterSpacing: '0.1em' }}>LANGUAGES</h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {languages.map((lang) => (
                  <span key={lang} style={{ fontSize: '13px', padding: '10px 20px', border: '1px solid #1a1a1a', transition: 'all 0.2s' }} className="hover-glow">{lang}</span>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation>
            <section style={{ textAlign: 'center', padding: '100px 0', borderTop: '1px solid #1a1a1a' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '600', marginBottom: '16px' }}>Let's build something.</h2>
              <p style={{ color: '#666', marginBottom: '32px', fontSize: '16px' }}>Have an idea? Want to collaborate?</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 28px', border: '1px solid #fff', fontWeight: '500', fontSize: '14px', transition: 'all 0.3s' }} className="hover-lift">
                Say hello <ArrowRight size={16} />
              </Link>
            </section>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </div>
  );
}
