import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the GitGud challenge and who is it for?",
    answer: "GitGud is an interactive, hands-on workshop and challenge designed for developers of all skill levels. It helps you master version control (Git & GitHub), team collaboration workflows, and event operations, preparing you to tackle real-world development conflicts with confidence."
  },
  {
    id: 2,
    question: "Do I need prior experience with Git to participate?",
    answer: "Not at all! While basic familiarity with programming and terminal commands is helpful, we cover everything from core concepts (staging, commits, branching) to advanced workflows (interactive rebasing, cherry-picking, and resolving merge conflicts)."
  },
  {
    id: 3,
    question: "What are the key technical requirements to attend?",
    answer: "You only need a laptop with Git installed, a text editor (like VS Code), and a free GitHub account. We'll guide you through configuring your SSH keys, repository authorization, and checking out the workshop codebases."
  },
  {
    id: 4,
    question: "Can I participate individually or do I need a team?",
    answer: "You can participate in both ways! While the initial learning modules can be done individually, the GitGud challenge is designed to be completed in teams of 3-4 developers to simulate real-world team collaboration and code conflict resolution."
  },
  {
    id: 5,
    question: "What kind of topics will the workshop cover?",
    answer: "We cover Git essentials, standard pull request workflows, conflict resolution strategies, how to clean up commit history with git rebase, team communication best practices, and release coordination."
  },
  {
    id: 6,
    question: "Is there a certificate or recognition after completion?",
    answer: "Yes! All participants who complete and merge their team's final pull request during the GitGud challenge will receive a digital GitGud badge and exclusive stickers/swag to showcase their achievement."
  }
];

export default function FAQ() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());
  const [openIdSingle, setOpenIdSingle] = useState<number | null>(faqData[0].id); // Open first by default
  const [isAccordionMode, setIsAccordionMode] = useState<boolean>(true); // Default: single-open

  const handleToggleMode = (mode: boolean) => {
    setIsAccordionMode(mode);
    if (mode) {
      // If switching to single-open mode, keep at most one item open
      if (openIds.size > 0) {
        const firstOpen = Array.from(openIds)[0];
        setOpenIdSingle(firstOpen);
      } else {
        setOpenIdSingle(null);
      }
    } else {
      // If switching to multi-open mode, sync the single open item
      const newOpenIds = new Set<number>();
      if (openIdSingle !== null) {
        newOpenIds.add(openIdSingle);
      }
      setOpenIds(newOpenIds);
    }
  };

  const toggleItem = (id: number) => {
    if (isAccordionMode) {
      setOpenIdSingle((prev) => (prev === id ? null : id));
    } else {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }
  };

  const isItemOpen = (id: number) => {
    return isAccordionMode ? openIdSingle === id : openIds.has(id);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-brand/10 text-brand text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
          Got Questions?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          Everything you need to know about the GitGud workshop, prerequisites, and challenge logistics.
        </p>

        {/* Mode Switcher Control */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Accordion Behavior:
          </span>
          <div className="bg-slate-100/80 p-1 rounded-xl inline-flex border border-slate-200/60 backdrop-blur-sm">
            <button
              onClick={() => handleToggleMode(true)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                isAccordionMode
                  ? "bg-white text-brand shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-950"
              }`}
              title="Only allow one question open at a time"
            >
              Single Open (Default)
            </button>
            <button
              onClick={() => handleToggleMode(false)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                !isAccordionMode
                  ? "bg-white text-brand shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-950"
              }`}
              title="Allow multiple questions open simultaneously"
            >
              Multiple Open
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {faqData.map((item) => {
            const isOpen = isItemOpen(item.id);
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-brand bg-brand/[0.01] shadow-md shadow-brand/[0.02]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-bold text-base md:text-lg transition-colors duration-200 pr-4 ${
                      isOpen ? "text-brand" : "text-slate-800 group-hover:text-slate-950"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-brand/10 border-brand/20 text-brand"
                        : "bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Animated content wrapper using CSS Grid height transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-slate-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
