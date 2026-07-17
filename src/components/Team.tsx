// 🚧 PROBLEM STATEMENT 2: TEAM / FACILITATORS GRID
// -----------------------------------------------------------------------------
// This section displays a responsive grid of team/facilitator cards.
// Each card includes name, role, bio, gradient initials avatar, and social links.
// -----------------------------------------------------------------------------

interface Facilitator {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  shadowColor: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const facilitators: Facilitator[] = [
  {
    name: "Alex Chen",
    role: "Git & Workflow Lead",
    bio: "Ex-Software Engineer at Git-based DevOps platform. Passionate about teaching branch strategies and resolving complex merge conflicts.",
    initials: "AC",
    gradient: "from-violet-500 to-indigo-600",
    shadowColor: "shadow-indigo-500/20",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    bio: "Managed over 50 large-scale hackathons and tech bootcamps globally. Dedicated to flawless coordination and team synergy.",
    initials: "SJ",
    gradient: "from-pink-500 to-rose-600",
    shadowColor: "shadow-rose-500/20",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Marcus Vance",
    role: "Leadership Coach",
    bio: "Specializes in team dynamics, developer communication, and public speaking. Emphasizes soft skills as the root of engineering success.",
    initials: "MV",
    gradient: "from-emerald-400 to-teal-600",
    shadowColor: "shadow-teal-500/20",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Elena Rostova",
    role: "UI/UX & Frontend Lead",
    bio: "Designer turned front-end enthusiast. Believes beautiful code is useless without intuitive design and collaborative team design systems.",
    initials: "ER",
    gradient: "from-amber-400 to-orange-500",
    shadowColor: "shadow-orange-500/20",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand/10 text-brand text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
            Guiding Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Meet Our Facilitators
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Industry professionals and community leaders dedicated to helping you master the developer tools and soft skills needed to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilitators.map((member) => (
            <div
              key={member.name}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-brand/35 hover:-translate-y-1.5 transition-all duration-300 ease-out"
            >
              <div>
                {/* Avatar Initial Circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} ${member.shadowColor} shadow-md flex items-center justify-center text-white text-2xl font-bold tracking-wider transform group-hover:scale-105 transition-transform duration-300`}
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand tracking-wide uppercase mt-1">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm mt-4 leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center items-center gap-4 mt-6 pt-4 border-t border-slate-100">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
