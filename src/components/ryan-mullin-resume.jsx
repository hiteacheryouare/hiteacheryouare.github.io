export default () => (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 font-fancySerif">Ryan Mullin</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <span>Boston, MA</span>
          <span>|</span>
          <span>Philadelphia, PA</span>
          <span>|</span>
          <span><a href="mailto:rpmullin17@gmail.com">rpmullin17@gmail.com</a></span>
          <span>|</span>
          <span><a href="https://linkedin.com/in/ryanpmullin">linkedin.com/in/ryanpmullin</a></span>
          <span>|</span>
          <span><a href="https://github.com/hiteacheryouare">github.com/hiteacheryouare</a></span>
        </div>
      </header>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">EDUCATION</h2>
        <div className="mb-3">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Northeastern University</h3>
            <span className="text-sm text-gray-700">Boston, MA</span>
          </div>
          <div className="flex justify-between items-baseline">
            <p className="text-gray-800 italic">Bachelor of Science in Computer Science &amp; Business Administration (Combined Major)</p>
            <span className="text-sm text-gray-700">Expected May 2029</span>
          </div>
          <p className="text-gray-800">Khoury College of Computer Sciences &amp; D'Amore-McKim School of Business</p>
          <p className="text-gray-800"><span className="font-semibold">Concentration:</span> Financial Technology (FinTech)</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">TECHNICAL SKILLS</h2>
        <div className="space-y-1">
          <p><span className="font-semibold">Languages:</span> JavaScript, TypeScript, HTML/CSS, Python</p>
          <p><span className="font-semibold">Frameworks &amp; Libraries:</span> Next.js, React, TailwindCSS, Bootstrap, JSON, Astro, Svelte</p>
          <p><span className="font-semibold">Tools &amp; Platforms:</span> Git, GitHub, Vercel, Netlify, Firebase, Capacitor</p>
          <p><span className="font-semibold">Design &amp; Media:</span> Canva, Adobe Photoshop, Photopea, Kdenlive, Adobe Premiere Pro</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">EXPERIENCE</h2>

        {/* Admissions Ambassador */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Admissions Ambassador</h3>
            <span className="text-sm text-gray-700">Jan 2026 – Present</span>
          </div>
          <p className="italic text-gray-800 mb-2">Northeastern University, Boston, MA</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Represent Northeastern University to prospective students and families, showcasing the experiential learning model and co-op program</li>
            <li>Conduct campus tours, information sessions, and panel discussions for diverse audiences, including high school students and transfer applicants</li>
            <li>Provide authentic student perspectives on academic programs, student life, and the combined major experience</li>
          </ul>
        </div>

        {/* Freelance */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Freelance Web Developer</h3>
            <span className="text-sm text-gray-700">Jun 2023 – Present</span>
          </div>
          <p className="italic text-gray-800 mb-2">Self-Employed, Remote</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Designed and deployed modern, responsive web applications for diverse clients, including nonprofits and community organizations.</li>
            <li>Built mission-driven sites like The Book Nook Project (connecting underprivileged youth with books) and Tritons Swim (team website with registration and record management)</li>
            <li>Delivered full-stack solutions using React, Next.js, Astro, and Svelte, managing entire project lifecycles from client consultation through deployment on Vercel and Netlify</li>
            <li>Maintained direct client relationships, translating stakeholder needs into technical specifications and user-friendly interfaces</li>
          </ul>
        </div>

        {/* NER */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Sponsorship &amp; Fundraising Head</h3>
            <span className="text-sm text-gray-700">Sep 2024 – Present</span>
          </div>
          <p className="italic text-gray-800 mb-2">Northeastern Electric Racing, Boston, MA</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Lead the Sponsorship and Fundraising subteams for a 400+ student Formula SAE Electric team, managing outreach strategy and day-to-day team operations while reporting directly to the CFO</li>
            <li>Identify prospective partners, direct inquiry campaigns, and build relationships with companies including Rivian, Tesla, Shield AI, and other engineering and EV industry players</li>
            <li>Oversee fundraising initiatives alongside corporate sponsorship efforts to support the team's full competition season</li>
          </ul>
        </div>

        {/* Head Lifeguard */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Head Lifeguard</h3>
            <span className="text-sm text-gray-700">Apr 2026 – Present (Seasonal)</span>
          </div>
          <p className="italic text-gray-800 mb-2">Larchmont Swim Club, Mt. Laurel, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Promoted to Head Lifeguard after four seasons at the facility, progressing from Junior Guard (2021) through Senior Guard (2023) to current role</li>
            <li>Oversee daily operations for 1,400+ guests across a private facility with five pools; manage staff scheduling and serve as primary liaison between facility management and front-line staff</li>
            <li>Onboard and train junior lifeguards on safety protocols and emergency response; own pool chemistry and sanitation compliance across all five pools</li>
            <li>Execute boots-on-the-ground operational duties while supporting the property manager's strategic priorities; recognized annually with "Guard of the Week" honors for consistent performance</li>
          </ul>
        </div>

        {/* Admissions PM */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Admissions Project Manager</h3>
            <span className="text-sm text-gray-700">Jun 2024 – Jun 2025</span>
          </div>
          <p className="italic text-gray-800 mb-2">Camden Catholic High School, Cherry Hill, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Led admissions operations and student ambassador initiatives, managing a team of 10 to execute high-impact recruitment events; built on two prior years of marketing and media experience at the institution, including growing the school's social following to 5,000+</li>
            <li>Directed end-to-end planning for the 2025 Fall Open House, including logistics coordination, promotional strategy, signage design, and program delivery</li>
            <li>Delivered student panel presentations to prospective families and served as primary liaison between students, parents, and school leadership</li>
            <li>Contributed to enrollment growth during the 2025 cycle</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">PROJECTS</h2>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">ArenaSwap</h3>
            <span className="text-sm text-gray-700 italic">WXT, TypeScript, Turborepo</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Cross-browser extension (Chrome, Edge, Firefox) that automatically switches the active tab to whichever live sports game is most exciting in the moment</li>
            <li>Designed PowerScore, a custom scoring algorithm ranking live games on score differential, time remaining, scoring runs, and league-specific signals</li>
            <li>Architected as a Turborepo monorepo with the algorithm isolated from the extension shell; built on WXT for a single codebase across three browser stores</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">(de)Motivator</h3>
            <span className="text-sm text-gray-700 italic">Svelte, TypeScript, Firebase, Turborepo</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Long-running multi-platform side project: web app, PWA build, and Firebase-backed account system tracking user-level interaction counts</li>
            <li>Continuously maintained since 2021 across a Turborepo monorepo of web, mobile, and shared engine packages</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">The Book Nook Project</h3>
            <span className="text-sm text-gray-700 italic">Astro, HTML, TailwindCSS, Netlify</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Website for a nonprofit providing books to underprivileged children</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Tritons Swim</h3>
            <span className="text-sm text-gray-700 italic">Astro, React, Svelte, TailwindCSS, Bootstrap, Netlify</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Website for Deerwood Tritons swim team with registration and record management features</li>
          </ul>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">VOLUNTEER EXPERIENCE</h2>
        <div className="mb-3">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Assistant Coach</h3>
            <span className="text-sm text-gray-700">Jun 2026 – Present (Seasonal)</span>
          </div>
          <p className="italic text-gray-800 mb-2">Larchmont Barracudas, Mt. Laurel, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Transitioned from competitive swimmer to assistant coach, drawing on three prior seasons of volunteer instruction with the program's pre-team group</li>
            <li>Coach swimmers ages 4–12 on stroke mechanics, endurance, and competitive preparation, providing individualized feedback and race-day support</li>
          </ul>
        </div>
      </section>

      {/* Additional */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">ADDITIONAL</h2>
        <p className="text-gray-800"><span className="font-semibold">Interests:</span> Swimming, roller coaster enthusiast (56 ridden to date)</p>
        <p className="text-gray-800"><span className="font-semibold">Certifications:</span> American Red Cross Lifeguard, CPR/AED, First Aid</p>
      </section>
    </div>
  );
