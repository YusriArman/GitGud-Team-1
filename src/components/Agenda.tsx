import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AgendaItem {
  id: number;
  time: string;
  title: string;
  description: string;
  detail: string;
  status: "done" | "current" | "upcoming";
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 1,
    time: "09:00",
    title: "Welcome & Introduction",
    description: "Kick-off, housekeeping, and meet-the-team moment.",
    detail:
      "A warm welcome from the organising team. We'll cover the day's agenda, ground rules, Wi-Fi details, and do a quick round of introductions so everyone feels at home before the learning begins.",
    status: "done",
  },
  {
    id: 2,
    time: "09:30",
    title: "Git Fundamentals",
    description: "Core concepts — repos, commits, branches, and remotes.",
    detail:
      "We'll demystify Git from the ground up: the working tree, staging area, and commit history. Expect live demos of `git init`, `git add`, `git commit`, and `git log` so you can follow along in real time.",
    status: "done",
  },
  {
    id: 3,
    time: "10:30",
    title: "Branching & Merging",
    description: "Feature branches, merge strategies, and resolving conflicts.",
    detail:
      "Learn why branching is Git's superpower. We'll walk through creating feature branches, rebasing vs. merging, and step-by-step conflict resolution so you're never afraid of a merge conflict again.",
    status: "current",
  },
  {
    id: 4,
    time: "11:30",
    title: "Collaboration with Pull Requests",
    description: "Forking workflows, code review, and team etiquette.",
    detail:
      "Everything you need to contribute to a shared repo like a pro — opening a well-described PR, responding to review comments, and using GitHub's diff view to understand exactly what changed.",
    status: "upcoming",
  },
  {
    id: 5,
    time: "13:00",
    title: "Hands-On Challenge",
    description: "Team GitGud challenge — build, commit, and ship a feature.",
    detail:
      "Time to put it all together! Each team will work through the problem statements, practice the Git workflow end-to-end, and open a real pull request. Facilitators will be on hand to help.",
    status: "upcoming",
  },
  {
    id: 6,
    time: "14:30",
    title: "Wrap-Up & Prizes",
    description: "Showcase, retrospective, and award ceremony.",
    detail:
      "Teams present their work, we run a quick retrospective on what went well, and celebrate the winners. Stick around for networking and a Q&A with the facilitation team.",
    status: "upcoming",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface TimelineDotProps {
  status: AgendaItem["status"];
}

function TimelineDot({ status }: TimelineDotProps) {
  if (status === "current") {
    return (
      <span className="relative flex items-center justify-center w-10 h-10 shrink-0 z-10">
        {/* Pulse ring */}
        <span className="absolute inline-flex w-full h-full rounded-full bg-brand opacity-30 animate-ping" />
        <span className="relative inline-flex w-5 h-5 rounded-full bg-brand shadow-lg shadow-brand/40" />
      </span>
    );
  }
  if (status === "done") {
    return (
      <span className="relative flex items-center justify-center w-10 h-10 shrink-0 z-10">
        <span className="inline-flex w-5 h-5 rounded-full bg-brand/30 border-2 border-brand items-center justify-center">
          {/* check mark */}
          <svg
            className="w-3 h-3 text-brand"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6.5L4.5 9L10 3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    );
  }
  // upcoming
  return (
    <span className="relative flex items-center justify-center w-10 h-10 shrink-0 z-10">
      <span className="inline-flex w-5 h-5 rounded-full bg-slate-200 border-2 border-slate-300" />
    </span>
  );
}

interface AgendaCardProps {
  item: AgendaItem;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}

function AgendaCard({ item, isExpanded, onToggle, isLast }: AgendaCardProps) {
  const isCurrent = item.status === "current";
  const isDone = item.status === "done";

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* ── Vertical line ─────────────────────────────────────────────────── */}
      {!isLast && (
        <div
          className={`absolute left-5 top-10 w-0.5 h-full -translate-x-px ${
            isDone ? "bg-brand/40" : "bg-slate-200"
          }`}
        />
      )}

      {/* ── Dot ──────────────────────────────────────────────────────────── */}
      <TimelineDot status={item.status} />

      {/* ── Card ─────────────────────────────────────────────────────────── */}
      <div
        className={`flex-1 mb-8 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer group ${
          isCurrent
            ? "border-brand/50 bg-brand/5 shadow-md shadow-brand/10"
            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
        }`}
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
      >
        <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
          {/* Time badge + text */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
            <span
              className={`shrink-0 inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full ${
                isCurrent
                  ? "bg-brand text-white"
                  : isDone
                  ? "bg-slate-100 text-slate-500"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {item.time}
            </span>
            <div className="min-w-0">
              <h3
                className={`text-base sm:text-lg font-semibold leading-tight truncate ${
                  isCurrent
                    ? "text-brand"
                    : isDone
                    ? "text-slate-500"
                    : "text-slate-800"
                }`}
              >
                {isCurrent && (
                  <span className="mr-2 text-xs font-bold tracking-wide text-brand uppercase">
                    Now ·{" "}
                  </span>
                )}
                {item.title}
              </h3>
              <p
                className={`text-sm mt-0.5 ${
                  isDone ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>

          {/* Chevron toggle */}
          <span
            className={`shrink-0 mt-1 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            } ${isCurrent ? "text-brand" : "text-slate-400"}`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* ── Expandable detail ─────────────────────────────────────────── */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div
            className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t text-sm leading-relaxed text-slate-600 ${
              isCurrent ? "border-brand/20" : "border-slate-100"
            }`}
          >
            <p className="pt-4">{item.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Agenda() {
  const [expandedId, setExpandedId] = useState<number | null>(
    // Default: open the current session
    AGENDA_ITEMS.find((i) => i.status === "current")?.id ?? null
  );

  const handleToggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="agenda" className="py-20 px-6 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-brand uppercase mb-3">
            Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Workshop Agenda
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            A full day of Git mastery — click any session to read more about
            what's covered.
          </p>
        </div>

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        <div>
          {AGENDA_ITEMS.map((item, idx) => (
            <AgendaCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() => handleToggle(item.id)}
              isLast={idx === AGENDA_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
