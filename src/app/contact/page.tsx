import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Send, ExternalLink, ArrowRight, Check, Clock, MessageCircle, Lightbulb, Image, Sparkles, Rocket, Users, Code } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    { platform: 'Twitter / X', handle: '@thealxlabs', desc: 'DMs open', url: 'https://twitter.com/thealxlabs', icon: Send },
    { platform: 'GitHub', handle: '@thealxlabs', desc: 'Follow for code', url: 'https://github.com/thealxlabs', icon: ExternalLink },
    { platform: 'Instagram', handle: '@alexedgraphy', desc: 'Photography', url: 'https://www.instagram.com/alexedgraphy', icon: Image },
  ];

  const openTo = [
    { label: 'Collaborations', icon: Users },
    { label: 'Open Source', icon: ExternalLink },
    { label: 'Community', icon: Users },
    { label: 'Hack Club', icon: Sparkles },
    { label: 'Just chatting', icon: MessageCircle },
    { label: 'Freelance projects', icon: Rocket },
    { label: 'Pair programming', icon: Code },
    { label: 'Mentorship', icon: Lightbulb },
  ];

  const faqs = [
    { q: 'Do you take client work?', a: 'Not currently. But always happy to chat about ideas and collaborations.' },
    { q: 'Can I contribute to your projects?', a: 'Yes! All our projects are open source. Fork away.' },
    { q: 'Where are you based?', a: 'Toronto, Ontario, Canada. 2026.' },
    { q: 'How do I collaborate?', a: 'Reach out on Twitter or GitHub. We\'re always open to cool ideas.' },
  ];

  const whatToExpect = [
    { icon: Clock, title: 'Fast Response', desc: 'Usually reply within 24 hours' },
    { icon: MessageCircle, title: 'Real Conversation', desc: 'Not automated responses' },
    { icon: Lightbulb, title: 'Open to Ideas', desc: 'No idea is too weird' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, paddingTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          
          {/* Header */}
          <section style={{ padding: '100px 0 80px' }}>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px', letterSpacing: '0.05em' }}>CONTACT</div>
            <h1 style={{ fontSize: '72px', fontWeight: '600', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Let's talk.
            </h1>
            <p style={{ color: '#666', maxWidth: '480px', lineHeight: 1.6, fontSize: '16px' }}>
               Open to collaborations and select client work, but always down to chat about cool projects or collabs.
            </p>
           </section>

           {/* Contact Form */}
           <section style={{ marginBottom: '80px' }}>
             <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '32px', letterSpacing: '0.1em' }}>SEND A MESSAGE</h2>
             <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
               <input type="text" placeholder="Name" style={{ padding: '16px', background: '#000', border: '1px solid #333', color: '#fff', fontSize: '14px', borderRadius: '4px' }} />
               <input type="email" placeholder="Email" style={{ padding: '16px', background: '#000', border: '1px solid #333', color: '#fff', fontSize: '14px', borderRadius: '4px' }} />
               <textarea placeholder="Message" rows={5} style={{ padding: '16px', background: '#000', border: '1px solid #333', color: '#fff', fontSize: '14px', borderRadius: '4px', resize: 'vertical' }} />
               <button type="submit" style={{ padding: '16px 32px', background: '#fff', color: '#000', border: 'none', fontSize: '14px', fontWeight: '500', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s' }} className="hover-lift">
                 Send Message
               </button>
             </form>
           </section>

           {/* Contact Cards */}
          <section style={{ marginBottom: '80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a key={c.platform} href={c.url} target="_blank" style={{ background: '#000', padding: '40px', display: 'block', transition: 'all 0.3s' }} className="hover-lift">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <Icon size={20} color="#666" />
                      <span style={{ fontSize: '12px', color: '#666', letterSpacing: '0.1em' }}>{c.platform.toUpperCase()}</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{c.handle}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>{c.desc}</div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Open to */}
          <section style={{ marginBottom: '80px', padding: '48px', border: '1px solid #1a1a1a' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '32px', letterSpacing: '0.1em' }}>OPEN TO</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#1a1a1a' }}>
              {openTo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{ background: '#000', padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }} className="hover-glow">
                    <Icon size={16} style={{ opacity: 0.6 }} />
                    <span style={{ fontSize: '13px' }}>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '40px', letterSpacing: '0.1em' }}>FAQ</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
              {faqs.map((f) => (
                <div key={f.q} style={{ background: '#000', padding: '32px' }} className="hover-lift">
                  <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>{f.q}</div>
                  <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* What to expect */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '12px', color: '#666', marginBottom: '40px', letterSpacing: '0.1em' }}>WHAT TO EXPECT</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a', border: '1px solid #1a1a1a' }}>
              {whatToExpect.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} style={{ background: '#000', padding: '40px', textAlign: 'center' }} className="hover-lift">
                    <Icon size={24} style={{ marginBottom: '20px', opacity: 0.6 }} />
                    <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{item.title}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Location */}
          <section style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '48px 0', borderTop: '1px solid #1a1a1a', marginBottom: '40px' }}>
            <div style={{ fontSize: '32px', fontWeight: '600' }}>Toronto</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Based in Toronto, Ontario<br />Available for remote work worldwide</div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}