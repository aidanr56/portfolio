"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home", exact: true },
  // { href: "/projects", label: "Projects" },
  // { href: "/papers", label: "Papers" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const prevIndexRef = useRef(-2);

  const [bar, setBar] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    tx: 0,
    animated: false,
  });

  const activeIndex = navLinks.findIndex((link) =>
    link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(link.href + "/")
  );

  useEffect(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    const getPos = (i: number) => {
      const el = linkRefs.current[i];
      const container = containerRef.current;
      if (!el || !container) return null;
      const elRect = el.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      return { left: elRect.left - cRect.left, width: elRect.width };
    };

    if (activeIndex === -1) {
      setBar((b) => ({ ...b, opacity: 0, animated: true }));
      prevIndexRef.current = -1;
      return;
    }

    const pos = getPos(activeIndex);
    if (!pos) return;

    const prevIndex = prevIndexRef.current;

    if (prevIndex === -2 || prevIndex === activeIndex) {
      setBar({ left: pos.left, width: pos.width, opacity: 1, tx: 0, animated: false });
    } else {
      const direction = prevIndex === -1 || activeIndex > prevIndex ? 1 : -1;
      const slide = 20;

      setBar((b) => ({ ...b, opacity: 0, tx: slide * direction, animated: true }));

      const t1 = setTimeout(() => {
        setBar({ left: pos.left, width: pos.width, opacity: 0, tx: -slide * direction, animated: false });

        const t2 = setTimeout(() => {
          setBar({ left: pos.left, width: pos.width, opacity: 1, tx: 0, animated: true });
        }, 30);
        timersRef.current.push(t2);
      }, 180);
      timersRef.current.push(t1);
    }

    prevIndexRef.current = activeIndex;

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [pathname]);

  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div ref={containerRef} className="relative max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            ref={(el) => { linkRefs.current[i] = el; }}
            className={`text-xl transition-colors ${
              i === 0 ? "font-semibold" : ""
            } ${
              activeIndex === i ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <span
          style={{
            position: "absolute",
            bottom: 6,
            height: 2,
            borderRadius: 1,
            backgroundColor: "#18181b",
            left: bar.left,
            width: bar.width,
            opacity: bar.opacity,
            transform: `translateX(${bar.tx}px)`,
            transition: bar.animated ? "opacity 0.18s ease, transform 0.18s ease" : "none",
          }}
        />
      </div>
    </nav>
  );
}
