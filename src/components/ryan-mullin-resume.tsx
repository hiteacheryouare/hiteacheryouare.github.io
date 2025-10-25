import React from 'react';

export default () => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">RYAN MULLIN</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <span>Mt. Laurel, NJ (Philadelphia Area)</span>
          <span>•</span>
          <span>rpmullin17@gmail.com</span>
          <span>•</span>
          <span>linkedin.com/in/rpmullin06</span>
          <span>•</span>
          <span>github.com/hiteacheryouare</span>
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
            <p className="text-gray-800 italic">Bachelor of Science in Computer Science & Business Administration (Combined Major)</p>
            <span className="text-sm text-gray-700">Expected May 2029</span>
          </div>
          <p className="text-gray-800">Khoury College of Computer Sciences & D'Amore-McKim School of Business</p>
          <p className="text-gray-800">Concentration: Financial Technology (FinTech)</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">TECHNICAL SKILLS</h2>
        <div className="space-y-1">
          <p><span className="font-semibold">Languages:</span> JavaScript, TypeScript, HTML/CSS, Python, Pyret</p>
          <p><span className="font-semibold">Frameworks & Libraries:</span> React, Next.js, Astro, Svelte, TailwindCSS, Bootstrap</p>
          <p><span className="font-semibold">Tools & Platforms:</span> Git, GitHub, Vercel, Netlify, Firebase, Capacitor</p>
          <p><span className="font-semibold">Design & Media:</span> Canva, Adobe Photoshop, Photopea, Kdenlive, Adobe Premiere Pro</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">EXPERIENCE</h2>
        
        {/* NER */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Finance Team Member, Sponsorship Outreach</h3>
            <span className="text-sm text-gray-700">Sep 2024 – Present</span>
          </div>
          <p className="italic text-gray-800 mb-2">Northeastern Electric Racing, Boston, MA</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Support corporate sponsorship efforts for a 400+ student Formula SAE Electric team by conducting outreach to engineering, EV, and technology companies</li>
            <li>Identify prospective partners, draft inquiry emails, and initiate contact with industry stakeholders to explore sponsorship opportunities</li>
            <li>Assist the Finance Team in building relationships with companies including Rivian, Tesla, Shield AI, and other industry players</li>
            <li>Help expand the team's network of corporate supporters that provide funding and technical resources for competitive electric vehicle development</li>
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
            <li>Designed and deployed modern, responsive web applications for diverse clients including nonprofits and community organizations</li>
            <li>Built mission-driven sites like The Book Nook Project (connecting underprivileged youth with books) and Tritons Swim (team website with registration and record management)</li>
            <li>Delivered full-stack solutions using React, Next.js, Astro, and Svelte, managing entire project lifecycles from client consultation through deployment on Vercel and Netlify</li>
            <li>Maintained direct client relationships, translating stakeholder needs into technical specifications and user-friendly interfaces</li>
          </ul>
        </div>

        {/* Senior Lifeguard */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Senior Lifeguard</h3>
            <span className="text-sm text-gray-700">Jun 2023 – Present (Seasonal)</span>
          </div>
          <p className="italic text-gray-800 mb-2">Larchmont Swim Club, Mt. Laurel, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Promoted to senior role with expanded operational and leadership responsibilities at a private swim facility managing 1,400+ daily guests</li>
            <li>Trained and mentored junior lifeguards on safety protocols, emergency response procedures, and facility standards</li>
            <li>Handled pool chemistry management and sanitation compliance, ensuring safe water quality across five pools</li>
            <li>Performed one documented rescue and maintained emergency readiness while serving as a trusted liaison between members, guests, and facility management</li>
            <li>Recognized annually with "Guard of the Week" honors for consistent performance and reliability</li>
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
            <li>Led admissions operations and student ambassador initiatives, managing a team of 10 students to execute high-impact recruitment events and prospective family engagement</li>
            <li>Directed end-to-end planning for the 2025 Fall Open House, including logistics coordination, promotional strategy, signage design, and program delivery</li>
            <li>Delivered student panel presentations to prospective families and served as primary liaison between students, parents, and school leadership</li>
            <li>Contributed to enrollment growth during the 2025 cycle</li>
          </ul>
        </div>

        {/* Marketing & Media */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Marketing & Media Intern</h3>
            <span className="text-sm text-gray-700">Jun 2022 – Jun 2024</span>
          </div>
          <p className="italic text-gray-800 mb-2">Camden Catholic High School, Cherry Hill, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Drove digital engagement and brand visibility by managing multi-platform social media strategy across Instagram, TikTok, and Twitter, growing the school's following to 5,000+ followers</li>
            <li>Created content calendars, designed promotional materials, and developed campaigns that strengthened community connection and showcased student life</li>
            <li>Collaborated directly with the Admissions Director to align marketing initiatives with enrollment goals and school priorities</li>
          </ul>
        </div>

        {/* Junior Lifeguard */}
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Junior Lifeguard</h3>
            <span className="text-sm text-gray-700">Jun 2021 – Aug 2022</span>
          </div>
          <p className="italic text-gray-800 mb-2">Larchmont Swim Club, Mt. Laurel, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Ensured patron safety across a high-volume, member-based facility serving up to 1,400 guests daily across five pools</li>
            <li>Monitored pool activity, enforced safety protocols, and provided emergency response including first aid and water rescues</li>
            <li>Collaborated within a 70-person team operating with lean daily crews of 16 guards, requiring strong situational awareness and rapid response capabilities</li>
            <li>Earned "Guard of the Week" recognition for consistent performance and reliability</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">PROJECTS</h2>
        
        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">The Book Nook Project</h3>
            <span className="text-sm text-gray-700 italic">Astro, HTML, TailwindCSS, Netlify</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Responsive nonprofit website featuring donation information, mission statement, and contact forms</li>
            <li>Implemented modern design with optimized performance and mobile-first approach</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Tritons Swim</h3>
            <span className="text-sm text-gray-700 italic">Astro, React, Svelte, TailwindCSS, Bootstrap, Netlify</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Full-featured swim team website with member registration system and swim record management database</li>
            <li>Built reusable components across multiple frameworks for maintainability and scalability</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">SmartCarbon</h3>
            <span className="text-sm text-gray-700 italic">Next.js, React, TypeScript, TailwindCSS</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Interactive travel carbon footprint calculator with data visualization using real emissions data</li>
            <li>Features trip planning tools and personalized reduction strategy recommendations</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Launchpad</h3>
            <span className="text-sm text-gray-700 italic">Next.js, React, TailwindCSS, Vercel</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Customizable link-in-bio card generator with real-time preview and export functionality</li>
            <li>No backend required - all data stored client-side for privacy and simplicity</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">UADetect & (de)Motivator.js</h3>
            <span className="text-sm text-gray-700 italic">TypeScript, JavaScript, npm</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Published open-source npm packages with full TypeScript support and comprehensive documentation</li>
            <li>UADetect provides type-safe Navigator API access; (de)Motivator.js offers randomized content generation</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Ongoing Academic Projects</h3>
            <span className="text-sm text-gray-700 italic">Pyret, Python, JavaScript</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Data analysis applications examining urban infrastructure including MBTA and Bluebikes systems</li>
            <li>Coursework projects in CS1800 (Discrete Structures) and CS2100 (Foundations of Computer Science)</li>
          </ul>
        </div>
      </section>

      {/* Volunteer */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">VOLUNTEER EXPERIENCE</h2>
        <div className="mb-3">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-bold text-gray-900">Volunteer Swim Instructor</h3>
            <span className="text-sm text-gray-700">Jun 2022 – Aug 2024</span>
          </div>
          <p className="italic text-gray-800 mb-2">Larchmont Barracudas Pre-Team, Mt. Laurel, NJ</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>Coached children ages 4-12 in foundational and intermediate swimming techniques, with focus on preparing older swimmers for competitive team placement</li>
            <li>Provided individualized instruction on stroke mechanics, endurance building, and water confidence across three summer seasons</li>
          </ul>
        </div>
      </section>

      {/* Additional */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">ADDITIONAL</h2>
        <p className="text-gray-800"><span className="font-semibold">Interests:</span> Podcast production (Between Bells Season 2), swimming, roller coaster enthusiast (56 ridden to date)</p>
        <p className="text-gray-800"><span className="font-semibold">Certifications:</span> American Red Cross Lifeguard, CPR/AED, First Aid</p>
      </section>
    </div>
  );
}