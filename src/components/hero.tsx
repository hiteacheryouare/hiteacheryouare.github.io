import { useState, useEffect, useRef } from 'react';
import { socialLinks, techStack } from '../utils/socialContacts'
import { EMAIL_REGEX } from '../utils/EMAIL_REGEX';

const HERO_NAME = 'Ryan Mullin';
const NON_BREAKING_SPACE = '\u00A0';

const getNodeCount = () => {
	if (typeof window === 'undefined') return 220;
	if (window.innerWidth < 768) return 80;
	if (window.innerWidth < 1280) return 150;
	return 220;
};
const CONNECTION_DISTANCE = 110;
const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
const NODE_SPEED = 0.7;
const TARGET_FPS = 45;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

export default (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];
    let cssWidth = 0;
    let cssHeight = 0;

    const sizeCanvas = () => {
      cssWidth = window.innerWidth;
      cssHeight = window.innerHeight;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedNodes = (count: number) => {
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * cssWidth,
        y: Math.random() * cssHeight,
        vx: (Math.random() - 0.5) * NODE_SPEED,
        vy: (Math.random() - 0.5) * NODE_SPEED,
      }));
    };

    sizeCanvas();
    seedNodes(getNodeCount());

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      sizeCanvas();
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const target = getNodeCount();
        if (nodes.length !== target) seedNodes(target);
      }, 250);
    };
    window.addEventListener('resize', onResize);

    let running = true;
    const onVisibility = () => {
      running = !document.hidden;
      if (running) lastFrame = performance.now();
    };
    document.addEventListener('visibilitychange', onVisibility);

    let animationFrameId = 0;
    let lastFrame = performance.now();

    // Spatial grid bucketing: only check neighbors in same/adjacent cells.
    // Reduces O(n^2) connection scan to ~O(n).
    const cellSize = CONNECTION_DISTANCE;

    const draw = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx = -n.vx; }
        else if (n.x > cssWidth) { n.x = cssWidth; n.vx = -n.vx; }
        if (n.y < 0) { n.y = 0; n.vy = -n.vy; }
        else if (n.y > cssHeight) { n.y = cssHeight; n.vy = -n.vy; }
      }

      const cols = Math.max(1, Math.ceil(cssWidth / cellSize));
      const rows = Math.max(1, Math.ceil(cssHeight / cellSize));
      const grid: number[][] = new Array(cols * rows);
      for (let i = 0; i < nodes.length; i++) {
        const cx = Math.min(cols - 1, Math.max(0, Math.floor(nodes[i].x / cellSize)));
        const cy = Math.min(rows - 1, Math.max(0, Math.floor(nodes[i].y / cellSize)));
        const idx = cy * cols + cx;
        (grid[idx] || (grid[idx] = [])).push(i);
      }

      ctx.lineWidth = 1;
      // Bucket connections by opacity tier so we can render distance-based
      // fade with only OPACITY_BUCKETS stroke calls instead of one per line.
      const OPACITY_BUCKETS = 6;
      const buckets: number[][] = [];
      for (let i = 0; i < OPACITY_BUCKETS; i++) buckets.push([]);
      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const bucket = grid[cy * cols + cx];
          if (!bucket) continue;
          for (let dy = 0; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dy === 0 && dx < 0) continue;
              const nx = cx + dx, ny = cy + dy;
              if (nx < 0 || nx >= cols || ny >= rows) continue;
              const other = grid[ny * cols + nx];
              if (!other) continue;
              for (let a = 0; a < bucket.length; a++) {
                const ia = bucket[a];
                const startB = (dx === 0 && dy === 0) ? a + 1 : 0;
                for (let b = startB; b < other.length; b++) {
                  const ib = other[b];
                  const ddx = nodes[ia].x - nodes[ib].x;
                  const ddy = nodes[ia].y - nodes[ib].y;
                  const dsq = ddx * ddx + ddy * ddy;
                  if (dsq < CONNECTION_DISTANCE_SQ) {
                    const t = 1 - Math.sqrt(dsq) / CONNECTION_DISTANCE;
                    let bi = Math.floor(t * OPACITY_BUCKETS);
                    if (bi >= OPACITY_BUCKETS) bi = OPACITY_BUCKETS - 1;
                    const arr = buckets[bi];
                    arr.push(nodes[ia].x, nodes[ia].y, nodes[ib].x, nodes[ib].y);
                  }
                }
              }
            }
          }
        }
      }
      for (let bi = 0; bi < OPACITY_BUCKETS; bi++) {
        const arr = buckets[bi];
        if (arr.length === 0) continue;
        const opacity = ((bi + 0.5) / OPACITY_BUCKETS) * 0.5;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        for (let k = 0; k < arr.length; k += 4) {
          ctx.moveTo(arr[k], arr[k + 1]);
          ctx.lineTo(arr[k + 2], arr[k + 3]);
        }
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        ctx.moveTo(nodes[i].x + 3, nodes[i].y);
        ctx.arc(nodes[i].x, nodes[i].y, 3, 0, Math.PI * 2);
      }
      ctx.fill();
    };

    if (reduceMotion) {
      draw();
    } else {
      const animate = (now: number) => {
        animationFrameId = requestAnimationFrame(animate);
        if (!running) return;
        const elapsed = now - lastFrame;
        if (elapsed < FRAME_INTERVAL) return;
        lastFrame = now - (elapsed % FRAME_INTERVAL);
        draw();
      };
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <style>{`
        /* ===== MESH GRADIENT HERO ===== */
        .mesh-gradient-bg {
          position: relative;
          overflow: hidden;
        }
        /* Static brand-color wheel: six gradient-bar colors in a conic.
           Brand-purple fallback fill on the parent so blurred edges
           never reveal page bg. Two conics in the SAME hue order
           (second offset 30°, lower opacity) with NORMAL alpha
           compositing soften the spokes; movement comes from the
           particle canvas on top, not from the gradient. */
        .mesh-gradient-bg {
          background: var(--grad-purple);
        }
        .mesh-gradient-bg::before,
        .mesh-gradient-bg::after {
          content: "";
          position: absolute;
          left: -25%;
          top: -25%;
          right: -25%;
          bottom: -25%;
        }
        .mesh-gradient-bg::before {
          background: conic-gradient(
            from 0deg at 50% 50%,
            var(--grad-yellow) 0%,
            var(--grad-orange) 16.66%,
            var(--grad-red)    33.33%,
            var(--grad-purple) 50%,
            var(--grad-blue-1) 66.66%,
            var(--grad-blue-2) 83.33%,
            var(--grad-yellow) 100%
          );
          filter: blur(140px);
        }
        .mesh-gradient-bg::after {
          background: conic-gradient(
            from 30deg at 50% 50%,
            var(--grad-yellow) 0%,
            var(--grad-orange) 16.66%,
            var(--grad-red)    33.33%,
            var(--grad-purple) 50%,
            var(--grad-blue-1) 66.66%,
            var(--grad-blue-2) 83.33%,
            var(--grad-yellow) 100%
          );
          filter: blur(140px);
          opacity: 0.5;
        }

        /* ===== INTERACTIVE TEXT ===== */
        .hero-title {
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          font-size: clamp(4rem, 12vw, 10rem);
        }
        .hero-name {
          display: inline-block;
          background: none !important;
          background-image: none !important;
          -webkit-background-clip: unset !important;
          background-clip: unset !important;
          -webkit-text-fill-color: #ffffff !important;
          color: #ffffff !important;
          cursor: default;
        }
        
        .name-char {
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .name-char:hover {
          transform: translateY(-15px) scale(1.2);
          text-shadow: 0 8px 20px rgba(255, 255, 255, 0.5);
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 300;
          color: #1a1a2e;
          letter-spacing: 0.02em;
        }

        .hero-tagline {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          color: #ffffff;
          max-width: 600px;
          line-height: 1.6;
        }

        .role-pill {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          font-size: clamp(0.875rem, 1.5vw, 1.125rem);
          font-weight: 500;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .role-pill:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: #ffffff;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 30px -5px rgba(255, 255, 255, 0.4);
        }
        .role-pill.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: #ffffff;
          box-shadow: 0 5px 20px -5px rgba(255, 255, 255, 0.3);
        }

        .hero-btn-primary {
          background: white;
          color: #1a1a2e;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border: 2px solid white;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px -10px rgba(255, 255, 255, 0.5);
        }
        
        .hero-btn-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          border: 2px solid rgba(255, 255, 255, 0.6);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          backdrop-filter: blur(12px);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
        .hero-btn-secondary:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px -10px rgba(255, 255, 255, 0.4);
        }

        .social-link-hero {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          backdrop-filter: blur(12px);
        }
        .social-link-hero:hover {
          border-color: white;
          color: white;
          transform: translateY(-5px) scale(1.15);
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.4);
        }
        /* ===== REST OF PAGE STYLES ===== */
        .whimsy-text {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .whimsy-text:hover { transform: rotate(-2deg) scale(1.05); }

        .image-transition { transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out; }
        .image-scale { animation: subtleFloat 3s ease-in-out infinite; }
        @keyframes subtleFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        @media (max-width: 768px) {
          .hero-title { font-size: clamp(3rem, 15vw, 5rem); }
          .hero-subtitle { font-size: 1.125rem; }
          .hero-tagline { font-size: 1rem; }
          .role-pill { font-size: 0.875rem; padding: 0.4rem 1rem; }
          .social-link-hero {
            width: 2rem;
            height: 2rem;
            font-size: 0.875rem;
          }
        }
      `}</style>

      {/* ===== NEW HERO SECTION ===== */}
      <section className="mesh-gradient-bg min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />
        
        {/* Mesh Network Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
        
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 py-20 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Main Title - Front and Center with Character Animation */}
            <div className="space-y-4">
              
              <h1 className="hero-title text-white">
                <span className="hero-name" style={{ color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' }}>
                  {HERO_NAME.split('').map((char, index) => (
                    <span
                      key={index}
                      className="name-char"
                    >
                      {char === ' ' ? NON_BREAKING_SPACE : char}
                    </span>
                  ))}
                </span>
              </h1>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#work" className="hero-btn-primary no-rainbow">
                Explore My Work
              </a>
              <a href="#contact" className="hero-btn-secondary no-rainbow hover:text-white">
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4 justify-center pt-4 px-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-hero no-rainbow"
                  aria-label={link.text}
                >
                  <i className={`bi bi-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-24 ">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold">
                HI!!!
              </h2>
              <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
                I like to build cool things using cool tools, and sometimes I make things that make me laugh. I hope you do too.
              </p>
              <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
                I'm a sophomore at Northeastern doing the combined CS &amp; Business program (Khoury + D'Amore-McKim), concentrating in FinTech. Two-time Dean's List, 4.0 right now. Outside of class I'm shipping software, running corporate sponsorship at Northeastern Electric Racing, and head-guarding at Larchmont Swim Club.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-mono hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="https://avatars.githubusercontent.com/u/82683251" alt="Ryan Mullin" className="max-w-full h-auto rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary border border-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">Some of my faves</h2>
              <p className="text-lg text-gray-600 dark:text-neutral-200 max-w-2xl">
                Some are for clients, some I built because I like it.
              </p>
            </div>
            <div className="grid gap-8">
              {props.children}
            </div>
            <div className="text-center pt-8">
              <a 
                href="https://github.com/hiteacheryouare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-neutral-300 hover:text-primary transition-colors font-medium"
              >
                <i className="bi bi-github"></i>
                View more projects on GitHub
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">Want to chat?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
                  Looking for a co-op? Have freelance work? We both know you have something to say!
                </p>
                <a
                  href="mailto:rpmullin17@gmail.com"
                  className="inline-flex items-center gap-3 text-lg group no-rainbow"
                >
                  <i className="bi bi-envelope-fill fs-4"></i>
                  <span className="group-hover:translate-x-1 transition-transform">rpmullin17@gmail.com</span>
                </a>
              </div>
              <form className="space-y-6">
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label text-sm font-mono text-gray-600">Name</label>
                  <input
                    id="nameInput"
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label text-sm font-mono text-gray-600">Email</label>
                  <input
                    id="emailInput"
                    type="email"
                    className={`form-control ${email ? (EMAIL_REGEX.test(email) ? 'is-valid' : 'is-invalid') : ''}`}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="messageInput" className="form-label text-sm font-mono text-gray-600">Message</label>
                  <textarea
                    id="messageInput"
                    rows={4}
                    className="form-control"
                    placeholder="Tell me about your project or opportunity..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <a 
                  href={`mailto:rpmullin17@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`} 
                  className="btn btn-primary w-100"
                >
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}