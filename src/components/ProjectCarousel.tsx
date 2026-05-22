'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, Project } from '@/data/projects';

const PEEK = 70;
const GAP = 16;
const DURATION = 350;

export default function ProjectCarousel() {
  const n = projects.length;

  // Track has clones on each end: [last_clone, 0, 1, ..., n-1, first_clone]
  const trackItems = [projects[n - 1], ...projects, projects[0]];

  // trackPos 1..n corresponds to the real cards
  const [trackPos, setTrackPos] = useState(1);
  const [animated, setAnimated] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const jumping = useRef(false);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.offsetWidth);
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cardWidth = Math.max(0, containerWidth - 2 * PEEK - 2 * GAP);
  const translateX = -(trackPos * (cardWidth + GAP)) + PEEK + GAP;

  const activeIndex = ((trackPos - 1) % n + n) % n;

  const go = (pos: number) => {
    if (jumping.current) return;
    setAnimated(true);
    setTrackPos(pos);
  };

  const prev = () => go(trackPos - 1);
  const next = () => go(trackPos + 1);

  const onTransitionEnd = () => {
    if (trackPos === 0) {
      // landed on left clone → jump to real last
      jumping.current = true;
      setAnimated(false);
      setTrackPos(n);
      requestAnimationFrame(() => {
        jumping.current = false;
        setAnimated(true);
      });
    } else if (trackPos === n + 1) {
      // landed on right clone → jump to real first
      jumping.current = true;
      setAnimated(false);
      setTrackPos(1);
      requestAnimationFrame(() => {
        jumping.current = false;
        setAnimated(true);
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-800 transition-colors bg-white"
          aria-label="Previous project"
        >
          <ChevronLeft size={18} />
        </button>

        <div ref={containerRef} className="flex-1 overflow-hidden">
          <div
            onTransitionEnd={onTransitionEnd}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: animated && containerWidth > 0
                ? `transform ${DURATION}ms ease-in-out`
                : 'none',
            }}
          >
            {trackItems.map((project, i) => (
              <div
                key={i}
                style={{
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                  opacity: i === trackPos ? 1 : 0.45,
                  transition: `opacity ${DURATION}ms ease-in-out`,
                }}
              >
                <CarouselCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-800 transition-colors bg-white"
          aria-label="Next project"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimated(true); setTrackPos(i + 1); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 bg-zinc-700' : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-400 transition-colors group"
    >
      <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 h-48" />
      <div className="p-6">
        <h2 className="text-zinc-900 font-medium mb-2 group-hover:underline underline-offset-4">
          {project.title}
        </h2>
        <p className="text-sm text-zinc-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
