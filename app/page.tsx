import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-svh bg-[#0a0a0a] text-white relative overflow-hidden pt-20 md:pt-32 pb-24">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-4 h-4 bg-[#6366f1] rounded-full blur-md animate-blob" />
        <div className="absolute top-1/3 left-4/5 w-6 h-6 bg-[#a855f7] rounded-full blur-md animate-blob" animation-delay="2000ms" />
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-[#6366f1] rounded-full blur-sm animate-blob" animation-delay="4000ms" />
        <div className="absolute top-3/4 left-3/5 w-5 h-5 bg-[#a855f7] rounded-full blur-md animate-blob" animation-delay="1000ms" />
        <div className="absolute top-4/5 left-1/8 w-4 h-4 bg-[#6366f1] rounded-full blur-sm animate-blob" animation-delay="3000ms" />
        <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-[#a855f7] rounded-full blur-sm animate-blob" animation-delay="5000ms" />
        <div className="absolute top-2/3 left-1/10 w-5 h-5 bg-[#6366f1] rounded-full blur-md animate-blob" animation-delay="6000ms" />
        <div className="absolute top-9/10 left-4/5 w-4 h-4 bg-[#a855f7] rounded-full blur-md animate-blob" animation-delay="7000ms" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="bg-[#111827] border border-[#2a2a2a] px-4 py-1.5 rounded-full text-xs font-medium text-gray-400 flex items-center gap-2 tracking-tight">
            <span>💼</span>
            <span>50,000+</span>
            <span className="text-gray-500">NEW JOBS THIS MONTH</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of curated
          opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <div className="bg-[#111827] border border-[#2a2a2a] rounded-[2rem] p-1 flex flex-col md:flex-row gap-2 md:gap-0 w-full max-w-4xl mx-auto shadow-2xl">
          <div className="flex-1 min-w-0">
            <div className="flex items-center px-4 py-3 bg-transparent hover:bg-[#1a1a1a] rounded-xl transition-colors cursor-default border border-transparent focus-within:border-[#6366f1]/40">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="bg-transparent text-white w-full py-0 outline-none placeholder-gray-500 text-sm"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0 md:border-l md:border-[#2a2a2a]">
            <div className="flex items-center px-4 py-3 bg-transparent hover:bg-[#1a1a1a] rounded-xl transition-colors cursor-default border border-transparent focus-within:border-[#6366f1]/40">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Location or Remote"
                className="bg-transparent text-white w-full py-0 outline-none placeholder-gray-500 text-sm"
              />
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl px-6 py-3 font-medium text-sm shadow-lg hover:from-[#4f46e5] hover:to-[#9333ea] transition-all active:scale-95 w-full md:w-auto">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Trending positions */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="bg-[#111827] border border-[#2a2a2a] text-xs font-medium text-gray-400 px-3 py-1.5 rounded-full hover:text-white hover:border-[#6366f1] transition-colors">
            Trending Position
          </span>
          <span className="bg-[#111827] border border-[#2a2a2a] text-xs font-medium text-gray-400 px-3 py-1.5 rounded-full hover:text-white hover:border-[#6366f1] transition-colors">
            Product Designer
          </span>
          <span className="bg-[#111827] border border-[#2a2a2a] text-xs font-medium text-gray-400 px-3 py-1.5 rounded-full hover:text-white hover:border-[#6366f1] transition-colors">
            AI Engineering
          </span>
          <span className="bg-[#111827] border border-[#2a2a2a] text-xs font-medium text-gray-400 px-3 py-1.5 rounded-full hover:text-white hover:border-[#6366f1] transition-colors">
            Dev-ops Engineer
          </span>
        </div>
      </div>
    </div>
  )
}
