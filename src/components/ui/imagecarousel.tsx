"use client";
import { useState, useRef, useEffect } from "react";

const classNames = (
  ...classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

interface Person {
  name: string;
  title: string;
  img: string;
}

const persons: Person[] = [
  {
    name: "Aria Rossi",
    title: "Lead Architect",
    img: "https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg",
  },
  {
    name: "Leo Carter",
    title: "Creative Director",
    img: "https://i.pinimg.com/736x/21/16/f7/2116f71f9d51d875e44d809f074ff079.jpg",
  },
  {
    name: "Mia Chen",
    title: "Senior Developer",
    img: "https://i.pinimg.com/1200x/fe/c2/0d/fec20d2958059b8463bffb138d4eaac6.jpg",
  },
  {
    name: "Kai Tanaka",
    title: "UX/UI Designer",
    img: "https://i.pinimg.com/736x/84/dc/62/84dc62de850a34a9d420c97f3a2d58f4.jpg",
  },
  {
    name: "Zoe Williams",
    title: "Project Manager",
    img: "https://i.pinimg.com/1200x/be/c3/7e/bec37e2c43e703f922f887db2578ce2e.jpg",
  },
  {
    name: "Ethan Hunt",
    title: "Marketing Head",
    img: "https://i.pinimg.com/736x/47/dd/47/47dd47b0d66c2fa641e03e370bcb5433.jpg",
  },
  {
    name: "Chloe Garcia",
    title: "Data Scientist",
    img: "https://i.pinimg.com/736x/05/01/bc/0501bcd327d9df915e83154bbf9456e3.jpg",
  },
  {
    name: "Noah King",
    title: "Brand Strategist",
    img: "https://i.pinimg.com/736x/c1/46/be/c146bebffca026d2c4fa76cc85aac917.jpg",
  },
  {
    name: "Ava Martinez",
    title: "Content Creator",
    img: "https://i.pinimg.com/736x/91/7a/51/917a51df0d444def3cade8d626305a67.jpg",
  },
];

function ImageCarousel() {
  const [activeItem, setActiveItem] = useState(Math.floor(persons.length / 2));
  const wrapperRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="w-full font-sans">
      <div className="w-full max-w-7xl p-4 sm:p-6 md:p-8">
        <ul
          ref={wrapperRef}
          className="flex w-full flex-col gap-2 md:h-[640px] md:flex-row md:gap-[1.5%]"
        >
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative group cursor-pointer transition-all duration-500 ease-in-out",
                "md:w-[8%]",
                "md:[&[aria-current='true']]:w-[48%]",
                "md:[transition:width_var(--transition,300ms_ease_in)]"
              )}
              key={person.name}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10 transform-gpu">
                <img
                  className={classNames(
                    "absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-500 ease-in-out",
                    activeItem === index
                      ? "scale-105 grayscale-0"
                      : "scale-100 grayscale"
                  )}
                  src={person.img}
                  alt={person.name}
                  width="590"
                  height="640"
                />
                <div
                  className={classNames(
                    "absolute inset-0 transition-opacity duration-500",
                    activeItem === index ? "opacity-100" : "opacity-0",
                    "bg-gradient-to-t from-black/70 via-black/30 to-transparent",
                    "md:absolute"
                  )}
                />
                <div
                  className={classNames(
                    "absolute bottom-0 left-0 w-full p-6 text-white transition-[transform,opacity] duration-700 ease-in-out md:p-8",
                    activeItem === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  )}
                >
                  <p className="text-sm font-light uppercase tracking-widest text-gray-200 md:text-base">
                    {person.title}
                  </p>
                  <p
                    className="text-2xl font-bold tracking-tight md:text-5xl"
                    style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
                  >
                    {person.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageCarousel;
