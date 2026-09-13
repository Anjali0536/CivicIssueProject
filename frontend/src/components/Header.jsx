import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f8f5]/95 backdrop-blur-md border-b border-[#dfe4de]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[76px]">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#183b2a] text-white overflow-hidden">
              <span className="text-sm font-black tracking-tight">
                CC
              </span>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#75a86f]" />
            </div>

            <div className="leading-none">
              <span className="block text-[17px] font-black tracking-tight text-[#17231c]">
                CivicConnect
              </span>
              <span className="hidden sm:block mt-1 text-[9px] font-bold tracking-[0.2em] text-[#78837c] uppercase">
                Community reporting
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3 sm:gap-7">

            <Link
              to="/login"
              className="hidden sm:block text-sm font-semibold text-[#536158] hover:text-[#183b2a] transition-colors"
            >
              Track a report
            </Link>

            <Link
              to="/login"
              className="text-sm font-semibold text-[#536158] hover:text-[#183b2a] transition-colors"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#183b2a] text-white text-sm font-bold hover:bg-[#28563d] transition-all duration-200"
            >
              <span>Get started</span>

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
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}