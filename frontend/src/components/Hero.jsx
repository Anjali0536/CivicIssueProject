import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f5] min-h-[90vh] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#dfe3dc 1px, transparent 1px), linear-gradient(90deg, #dfe3dc 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Soft background shape */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#dce8d7] blur-3xl opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-2xl">
            {/* Small label */}
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#183b2a] text-white text-xs font-bold">
                CC
              </span>

              <span className="text-sm font-semibold tracking-wide text-[#526158]">
                CIVICCONNECT · COMMUNITY PLATFORM
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.045em] leading-[0.98] text-[#17231c]">
              Better streets
              <br />
              start with
              <br />
              <span className="text-[#39734d]">better reporting.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg sm:text-xl leading-8 text-[#59665e]">
              CivicConnect gives residents a simple way to report local
              problems, track progress, and stay informed while issues move
              from complaint to resolution.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#183b2a] text-white font-bold text-base hover:bg-[#24543b] transition-all duration-200 shadow-lg shadow-[#183b2a]/10"
              >
                Report an issue
                <svg
                  className="w-5 h-5"
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
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-[#cbd3cc] bg-white text-[#26372d] font-bold text-base hover:border-[#183b2a] hover:bg-[#f4f6f2] transition-all duration-200"
              >
                Track a report
              </Link>
            </div>

            {/* Trust statement */}
            <div className="mt-9 flex items-center gap-3 text-sm text-[#69756d]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4b9b66]" />
              Built for residents, departments and field teams
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* Main dashboard card */}
            <div className="relative bg-white border border-[#dce1db] rounded-[28px] shadow-[0_25px_70px_rgba(24,59,42,0.10)] overflow-hidden">

              {/* Card header */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#e8ebe6] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#78837c]">
                    City pulse
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold text-[#1b2820]">
                    Community reports
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#39734d]">
                  <span className="w-2 h-2 rounded-full bg-[#4b9b66] animate-pulse" />
                  Live
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 divide-x divide-[#e8ebe6] border-b border-[#e8ebe6]">
                <div className="p-5 sm:p-6">
                  <p className="text-2xl sm:text-3xl font-black text-[#1c2b22]">
                    42
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#7a847d]">
                    Open
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-2xl sm:text-3xl font-black text-[#a56b24]">
                    18
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#7a847d]">
                    In progress
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-2xl sm:text-3xl font-black text-[#39734d]">
                    126
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#7a847d]">
                    Resolved
                  </p>
                </div>
              </div>

              {/* Issue list */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-extrabold text-[#243229]">
                    Recent reports
                  </h3>

                  <span className="text-xs font-bold text-[#6d7971]">
                    Updated today
                  </span>
                </div>

                <div className="space-y-3">

                  {/* Issue 1 */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f7f9f6] border border-[#edf0eb]">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#e6efe5] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#39734d]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M4 17l4-4 3 3 5-6 4 4"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm text-[#26342b]">
                        Damaged road surface
                      </p>
                      <p className="text-xs text-[#7b857e] mt-1">
                        Central Avenue · 24 min ago
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-[#fff3df] text-[#9a641f] text-xs font-bold">
                      Assigned
                    </span>
                  </div>

                  {/* Issue 2 */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f7f9f6] border border-[#edf0eb]">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#e8edf4] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#506783]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M12 3v18m9-9H3"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm text-[#26342b]">
                        Street light outage
                      </p>
                      <p className="text-xs text-[#7b857e] mt-1">
                        Park Road · 1 hr ago
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-[#e8f2eb] text-[#39734d] text-xs font-bold">
                      Resolved
                    </span>
                  </div>

                  {/* Issue 3 */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f7f9f6] border border-[#edf0eb]">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#f3e9e5] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#9a5b43]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M4 7h16M7 7v13h10V7M9 7V4h6v3"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm text-[#26342b]">
                        Waste collection request
                      </p>
                      <p className="text-xs text-[#7b857e] mt-1">
                        Green Market · 2 hrs ago
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-[#edf0f2] text-[#65727c] text-xs font-bold">
                      Open
                    </span>
                  </div>
                </div>

                {/* Bottom action */}
                <div className="mt-6 pt-5 border-t border-[#e8ebe6] flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#7b857e]">
                      Average response time
                    </p>
                    <p className="text-lg font-black text-[#26342b]">
                      2.4 days
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-[#39734d]">
                    View activity
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating status card */}
            <div className="absolute -bottom-7 -left-5 sm:-left-8 bg-[#183b2a] text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-white/60">
                    Resolution update
                  </p>
                  <p className="text-sm font-bold">
                    Issue successfully closed
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute -z-10 -right-8 top-12 w-24 h-24 border border-[#bfcabe] rounded-full" />
            <div className="absolute -z-10 -right-2 top-6 w-3 h-3 rounded-full bg-[#39734d]" />
          </div>
        </div>
      </div>
    </section>
  );
}