import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Zap, Code, Globe, Microscope, MapPin, ArrowRight, ExternalLink, Sparkles, Rocket, Layers, Boxes } from "lucide-react";

export default function AboutPage() {
  const stack = [
    { category: 'Languages', items: ['TypeScript', 'Python', 'JavaScript'], icon: Code },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'], icon: Layers },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Prisma'], icon: Boxes },
    { category: 'AI & ML', items: ['Claude', 'GPT-4o', 'Gemini', 'OpenAI'], icon: Sparkles },
    { category: 'DevOps', items: ['Vercel', 'Railway', 'Docker'], icon: Rocket },
    { category: 'Tools', items: ['Cursor', 'VS Code', 'Git'], icon: Code },
  ];

  const timeline = [
    { year: 'Jan', event: 'Started Dirac', status: 'done' },
    { year: 'Feb', event: 'Launched Conductor', status: 'done' },
    { year: 'Mar', event: 'LocalCode v1', status: 'done' },
    { year: 'Apr', event: 'thealxlabs.ca', status: 'done' },
    { year: 'May', event: 'Shipping in progress', status: 'now' },
  ];

  const values = [
    { title: 'Ship Fast', desc: "We'd rather ship something imperfect than perfect nothing.", icon: Rocket },
    { title: 'Open Source', desc: 'Everything we build is free and open.', icon: Globe },
    { title: 'TypeScript', desc: 'Type safety matters. Always.', icon: Code },
    { title: 'Experiments', desc: "Sometimes we build weird stuff because it's cool.", icon: Microscope },
  ];

  const skills = [
    'Full-stack development',
    'AI integration',
    'API design',
    'Database architecture',
    'CLI tools',
    'Chrome Extensions',
    'Automation',
    'UI/UX',
    'DevOps',
    'Technical writing',
  ];

  const facts = [
    { number: '2026', label: 'Year started' },
    { number: '3', label: 'Products shipped' },
    { number: '100%', label: 'Open source' },
    { number: 'Toronto', label: 'Location' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, paddingTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          
          {/* Hero */}
          <section style={{ padding: '100px 0 80px' }}>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px', letterSpacing: '0.05em' }}>ABOUT US</div>
            <h1 style={{ fontSize: '72px', fontWeight: '600', marginBottom: '24px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Building in<br />
              <span style={{ background: 'linear-gradient(270deg, #fff, #666)', backgroundSize: '400% 400%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient 4s ease infinite' }}>
                Toronto, 2026.
              </span>
            </h1>
            <p style={{ color: '#666', maxWidth: '480px', lineHeight: 1.6, fontSize: '16px' }}>
              Toronto software lab building AI tools, developer utilities, and open-source experiments
            </p>
          </section>

          {/* Facts */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#1a1a1a', marginBottom: '80px', border: '1px solid #1a1a1a' }}>
            {facts.map((f) => (
              <div key={f.label} style={{ background: '#000', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: '600', marginBottom: '8px' }}>{f.number}</div>
                <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{f.label}</div>
              </div>
            ))}
          </section>

          {/* Currently */}
          <section style={{ marginBottom: '80px', padding: '48px', border: '1px solid #1a1a1a' }} className="animate-scanline">
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '32px', letterSpacing: '0.1em' }}>CURRENTLY BUILDING</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a' }}>
              <div style={{ background: '#000', padding: '32px' }} className="hover-lift">
                <Sparkles size={20} style={{ marginBottom: '16px', opacity: 0.6 }} />
                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Dirac</div>
                <div style={{ fontSize: '14px', color: '#666' }}>AI email client</div>
              </div>
              <div style={{ background: '#000', padding: '32px' }} className="hover-lift">
                <Zap size={20} style={{ marginBottom: '16px', opacity: 0.6 }} />
                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Conductor</div>
                <div style={{ fontSize: '14px', color: '#666' }}>AI integration hub</div>
              </div>
              <div style={{ background: '#000', padding: '32px' }} className="hover-lift">
                <Code size={20} style={{ marginBottom: '16px', opacity: 0.6 }} />
                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>LocalCode</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Terminal AI assistant</div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '40px', letterSpacing: '0.1em' }}>2026 TIMELINE</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
              {timeline.map((t) => (
                <div key={t.year} style={{ background: '#000', padding: '32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }} className="hover-glow">
                  <div style={{ fontSize: '12px', color: t.status === 'now' ? '#fff' : t.status === 'soon' ? '#444' : '#666', marginBottom: '12px', fontWeight: '600' }}>
                    {t.year}
                    {t.status === 'now' && <span style={{ marginLeft: '8px', fontSize: '8px', padding: '2px 6px', background: '#fff', color: '#000' }}>NOW</span>}
                  </div>
                  <div style={{ fontSize: '14px', color: t.status === 'now' ? '#fff' : t.status === 'soon' ? '#333' : '#999' }}>{t.event}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '40px', letterSpacing: '0.1em' }}>THE STACK</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
              {stack.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.category} style={{ background: '#000', padding: '32px' }} className="hover-lift">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <Icon size={18} style={{ opacity: 0.6 }} />
                      <div style={{ fontSize: '12px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.category}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {s.items.map((item) => (
                        <span key={item} style={{ fontSize: '14px', color: '#666' }}>{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Skills */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '24px', letterSpacing: '0.1em' }}>SKILLS</h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {skills.map((skill) => (
                <span key={skill} style={{ fontSize: '13px', padding: '10px 20px', border: '1px solid #1a1a1a', transition: 'all 0.2s' }} className="hover-glow">{skill}</span>
              ))}
            </div>
          </section>

          {/* Values */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '40px', letterSpacing: '0.1em' }}>VALUES</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} style={{ background: '#000', padding: '32px' }} className="hover-lift">
                    <Icon size={20} style={{ marginBottom: '20px', opacity: 0.6 }} />
                    <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>{v.title}</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{v.desc}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Community */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '24px', letterSpacing: '0.1em' }}>COMMUNITY</h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://hackclub.com" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', border: '1px solid #1a1a1a', fontSize: '13px', transition: 'all 0.2s' }} className="hover-glow">
                Hack Club <ExternalLink size={12} />
              </a>
              <a href="https://github.com/Dirac-app" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', border: '1px solid #1a1a1a', fontSize: '13px', transition: 'all 0.2s' }} className="hover-glow">
                Dirac App <ExternalLink size={12} />
              </a>
              <a href="https://github.com/TheLocalCodeTeam" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', border: '1px solid #1a1a1a', fontSize: '13px', transition: 'all 0.2s' }} className="hover-glow">
                LocalCode Team <ExternalLink size={12} />
              </a>
              <a href="https://github.com/thealxlabs" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', border: '1px solid #1a1a1a', fontSize: '13px', transition: 'all 0.2s' }} className="hover-glow">
                TheAlxLabs <ExternalLink size={12} />
              </a>
            </div>
          </section>

          {/* Location */}
          <section style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '48px 0', borderTop: '1px solid #1a1a1a', marginBottom: '40px' }}>
            <MapPin size={24} color="#666" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '24px', fontWeight: '600' }}>Toronto, Ontario</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Eastern Time Zone • Remote-first</div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}