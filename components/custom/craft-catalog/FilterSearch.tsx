"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

interface FilterSearchProps {
  keyword: string;
  setKeyword: (v: string) => void;
}

export default function FilterSearch({ keyword, setKeyword }: FilterSearchProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setKeyword("");
  };

  return (
    <div className="relative">
      {/* Icon trigger */}
      <div className="relative z-100 h-full flex items-center pr-6">
        <button
          onClick={() => setOpen((o) => !o)}
          className="bg-transparent border-0 cursor-pointer text-(--c-navy) block p-0 leading-none"
          aria-label="Search"
        >
          <Search strokeWidth={1.5} size={20} className="w-14 h-14" />
          <span className="sr-only">Search</span>
        </button>
      </div>

      {/* Overlay — light themed, drops below icon */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-9999 bg-white border-t border-[rgba(165,165,165,.5)] px-[5%] box-border shadow-md">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              type="search"
              placeholder="Type to search..."
              autoFocus
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="bg-transparent m-0 w-full h-20 text-(--c-navy) text-[1.4rem] pr-[5.2rem] pl-[1.7rem] outline-none box-border border-b border-(--c-orange) placeholder:text-(--c-navy)/40"
            />
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-0 cursor-pointer bg-transparent border-0 border-l-[6px] border-l-(--c-orange) w-20 h-full text-[1.8rem] text-(--c-navy) flex items-center justify-center"
              aria-label="Close search"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
