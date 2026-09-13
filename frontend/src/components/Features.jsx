import React from "react";

const capabilities = [
  {
    number: "01",
    title: "Roads & Streets",
    description:
      "Report potholes, damaged surfaces, broken sidewalks, and other road maintenance problems.",
    label: "Infrastructure",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4 19l4-14m8 0l4 14M8 15h8M7 10h10"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Waste & Cleanliness",
    description:
      "Flag overflowing bins, missed collections, illegal dumping, and public cleanliness concerns.",
    label: "Environment",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M5 7h14M10 11v6m4-6v6M9 7V4h6v3m-8 0l1 13h8l1-13"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Water & Utilities",
    description:
      "Report leaks, damaged utility infrastructure, electrical concerns, and service disruptions.",
    label: "Public services",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 3.5S6.5 10 6.5 14.5a5.5 5.5 0 0011 0C17.5 10 12 3.5 12 3.5z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Parks & Public Spaces",
    description:
      "Report damaged trees, unsafe public areas, broken facilities, and maintenance issues.",
    label: "Community",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 20V9m0 0l-4-4m4 4l4-4M7 20h10M5 15l3-3m11 3l-3-3"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="relative bg-[#f7f8f5] py-24 lg:py-32 overflow-hidden">

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#e2e6e0] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20 mb-16 lg:mb-20">

          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase text-[#39734d]">
              Report categories
            </p>

            <div className="mt-4 w-12 h-1 bg-[#39734d]" />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[1.02] text-[#17231c]">
              Tell us what
              <br />
              needs attention.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#68736c]">
              From everyday maintenance to infrastructure problems,
              CivicConnect helps route community reports to the people
              responsible for resolving them.
            </p>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#dfe4de] border border-[#dfe4de]">

          {capabilities.map((feature) => (
            <div
              key={feature.number}
              className="group relative bg-white p-7 sm:p-9 lg:p-10 hover:bg-[#f2f6f1] transition-colors duration-300"
            >

              {/* Top row */}
              <div className="flex items-start justify-between mb-12">

                <div className="w-12 h-12 rounded-xl bg-[#eaf1e8] text-[#39734d] flex items-center justify-center group-hover:bg-[#183b2a] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>

                <span className="text-sm font-black tracking-wider text-[#a0aaa2]">
                  {feature.number}
                </span>
              </div>

              {/* Content */}
              <div className="max-w-md">

                <div className="inline-flex px-3 py-1 rounded-full border border-[#dce3db] text-[10px] font-bold uppercase tracking-[0.14em] text-[#738078]">
                  {feature.label}
                </div>

                <h3 className="mt-4 text-2xl font-black tracking-tight text-[#1c2b22]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-7 text-[#6d7870]">
                  {feature.description}
                </p>
              </div>

              {/* Bottom interaction */}
              <div className="mt-9 pt-5 border-t border-[#e7ebe5] flex items-center justify-between">

                <span className="text-sm font-bold text-[#39734d]">
                  Report a problem
                </span>

                <div className="w-8 h-8 rounded-full border border-[#cfd8cf] flex items-center justify-center group-hover:bg-[#183b2a] group-hover:border-[#183b2a] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom information strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 border border-[#dfe4de] bg-white">

          <div className="p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-[#dfe4de]">
            <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#8a948d]">
              Step 01
            </p>
            <p className="mt-2 font-extrabold text-[#26352b]">
              Submit a report
            </p>
          </div>

          <div className="p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-[#dfe4de]">
            <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#8a948d]">
              Step 02
            </p>
            <p className="mt-2 font-extrabold text-[#26352b]">
              Track progress
            </p>
          </div>

          <div className="p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#8a948d]">
              Step 03
            </p>
            <p className="mt-2 font-extrabold text-[#26352b]">
              See the resolution
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}