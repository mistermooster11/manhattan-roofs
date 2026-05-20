'use client';
import { Search } from 'lucide-react';
import React, { useState } from 'react'

const HeaderSearch = () => {
     const [searchOpen, setSearchOpen] = useState(false);
    return (
        <>
        <div className="relative z-[100] h-full flex items-center pr-[1.5rem] ">
            <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="bg-transparent border-0 cursor-pointer text-white block p-0 leading-none"
                aria-label="Search"
                >
                <Search strokeWidth={1.5} size={20} className='w-14 h-14' />
                <span className="sr-only">Search</span>
            </button>
        </div>

                 {/* Search overlay — position fixed, full width */}
            {searchOpen && (
                <div className="fixed top-[8rem]  right-20 z-[9999] bg-[#172535] px-[5%] box-border">
                    <form onSubmit={(e) => e.preventDefault()} className="relative">
                        <input
                            type="search"
                            placeholder="Search NCCER..."
                            autoFocus
                            className="bg-transparent m-0 w-full md:w-[400px] h-[5rem] text-white text-[1.2rem] px-[5.2rem] pl-[3.2rem] outline-none box-border border border-brand-orange placeholder:text-white/50"
                        />
                        <button
                            type="button"
                            onClick={() => setSearchOpen(false)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-0 cursor-pointer bg-transparent border-0 border-l-[6px] border-l-brand-orange w-[5rem] h-full text-[1.8rem] text-white flex items-center justify-center"
                        >
                            ✕
                        </button>
                    </form>
                </div>
            )}
                </>
    )
}

export default HeaderSearch