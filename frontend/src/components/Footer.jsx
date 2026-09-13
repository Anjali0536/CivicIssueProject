import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#10271b] text-white relative overflow-hidden">

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr_0.6fr] gap-12">

          {/* Brand */}
          <div className="max-w-md">

            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#183b2a] flex items-center justify-center">
                <span className="text-xs font-black tracking-tight">
                  CC
                </span>
              </div>

              <span className="text-xl font-black tracking-tight">
                CivicConnect
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-[#b8c8bc] max-w-sm">
              A community reporting platform that helps residents raise
              civic issues and follow them from submission to resolution.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#91ae98]">
              <span className="w-2 h-2 rounded-full bg-[#82aa89]" />
              Built for better communities
            </div>

          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#91ae98]">
              Platform
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/login"
                className="text-sm text-[#d1ddd4] hover:text-white transition-colors"
              >
                Track a report
              </Link>

              <Link
                to="/register"
                className="text-sm text-[#d1ddd4] hover:text-white transition-colors"
              >
                Report an issue
              </Link>

              <Link
                to="/login"
                className="text-sm text-[#d1ddd4] hover:text-white transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Purpose */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#91ae98]">
              Purpose
            </p>

            <div className="mt-5 space-y-3 text-sm text-[#d1ddd4]">
              <p>Community reporting</p>
              <p>Issue tracking</p>
              <p>Department coordination</p>
              <p>Resolution visibility</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

          <p className="text-xs text-[#91a198]">
            © {new Date().getFullYear()} CivicConnect. All rights reserved.
          </p>

          <p className="text-xs text-[#718278]">
            Community-powered civic reporting
          </p>

        </div>

      </div>
    </footer>
  );
}