import React from "react";

const steps = [
  {
    num: "01",
    title: "Spot the problem",
    desc: "Notice a road, waste, utility, or public-space issue that needs attention.",
  },
  {
    num: "02",
    title: "Send the details",
    desc: "Add a photo, description, and location so the issue can be clearly understood.",
  },
  {
    num: "03",
    title: "Follow the progress",
    desc: "Your report is routed to the appropriate team and its status can be tracked.",
  },
  {
    num: "04",
    title: "See it resolved",
    desc: "Get updates as the responsible team works toward closing the reported issue.",
  },
];

export function CTA() {
  return (
    <section className="relative bg-[#183b2a] py-24 lg:py-32 overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full border border-white/10" />

      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-24 mb-20">

          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase text-[#a9c9a5]">
              The process
            </p>

            <div className="mt-4 w-12 h-1 bg-[#a9c9a5]" />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[1.02] text-white">
              From a report
              <br />
              to a resolution.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c4d2c8]">
              CivicConnect turns a community observation into a structured
              report that can be routed, monitored, and resolved.
            </p>
          </div>

        </div>

        {/* Process */}
        <div className="relative">

          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[31px] left-[12%] right-[12%] h-px bg-white/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {steps.map((step) => (
              <div key={step.num} className="relative">

                {/* Number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#183b2a] border border-[#8fb08b] flex items-center justify-center mb-7">
                  <span className="text-sm font-black text-[#d6e5d3]">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#b7c8bc] max-w-xs">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-7">

          <div>
            <p className="text-lg font-extrabold text-white">
              See something that needs attention?
            </p>

            <p className="mt-1 text-sm text-[#b7c8bc]">
              A useful report can be the first step toward getting it fixed.
            </p>
          </div>

          <a
            href="/register"
            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-white text-[#183b2a] font-black text-sm hover:bg-[#edf3eb] transition-colors duration-200"
          >
            Create a report

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
          </a>

        </div>

      </div>
    </section>
  );
}