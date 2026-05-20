"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CATEGORIES, DISCIPLINES } from "@/data/craft-catalog/crafts";
import { useIsMobile } from "@/hooks/useIsMobile";
import HeaderSearch from "../search/HeaderSearch";
import { Search } from "lucide-react";



/* ── SelectDropdown ─────────────────────────────────────── */
interface SelectProps {
    id: string;
    label: string;
    options: readonly string[];
    value: string;
    onChange: (v: string) => void;
    openId: string | null;
    setOpenId: (id: string | null) => void;
}

function SelectDropdown({ id, label, options, value, onChange, openId, setOpenId }: SelectProps) {
    const open = openId === id;
    const toggle = () => setOpenId(open ? null : id);
    return (
        <div className={`select${open ? " open" : ""}${value ? " selected" : ""} border-b border-neutral-300`}>
            <a className="relative z-0" href="javascript:;" onClick={(e) => { e.preventDefault(); toggle(); }}>
                <span className="text-2xl! font-bold!">{value || label}</span>
            </a>
            <div className="dropdown-list">
                <div className="ap-filter">Apply filter</div>
                <div className="dropdown-list-in">
                    <div className={`dropdown-list-item${!value ? " selected" : ""}`}>
                        <a href="javascript:;" onClick={(e) => { e.preventDefault(); onChange(""); setOpenId(null); }}>
                            All {label}
                        </a>
                    </div>
                    {options.map((opt) => (
                        <div key={opt} className={`dropdown-list-item${value === opt ? " selected" : ""}`}>
                            <a href="javascript:;" onClick={(e) => { e.preventDefault(); onChange(opt); setOpenId(null); }}>
                                {opt}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ── Props ──────────────────────────────────────────────── */
export interface FilterBarProps {
    keyword: string;
    setKeyword: (v: string) => void;
    category: string;
    setCategory: (v: string) => void;
    discipline: string;
    setDiscipline: (v: string) => void;
    assessment: boolean;
    setAssessment: (v: boolean) => void;
    translation: boolean;
    setTranslation: (v: boolean) => void;
    chips: { label: string; clear: () => void }[];
    clearAll: () => void;
    resultCount: number;
    sortAsc: boolean;
    onSort: () => void;
}

/* ── CraftFilterBar ─────────────────────────────────────── */
export default function CraftFilterBar({
    keyword, setKeyword,
    category, setCategory,
    discipline, setDiscipline,
    assessment, setAssessment,
    translation, setTranslation,
    chips, clearAll, resultCount,
    sortAsc, onSort,
}: FilterBarProps) {
    /* local: mobile panel open/close */
    const [filtersOpen, setFiltersOpen] = useState(false);
    /* local: desktop search overlay */
    const [searchActive, setSearchActive] = useState(false);
    /* mutual-exclusion: only one dropdown open at a time */
    const [openId, setOpenId] = useState<string | null>(null);
    /* portal only on mobile — desktop renders panel inline */
    const isMobile = useIsMobile();

    /* shared panel JSX — rendered via portal so position:fixed works
       even when parent has a CSS animation / transform stacking context */
    const panel = (
        <div className={`filters-bar-wrap${filtersOpen ? " active" : ""}`}>
            <a
                href="javascript:;"
                className="filters-bar-close"
                onClick={(e) => { e.preventDefault(); setFiltersOpen(false); }}
            >
                <i className="icon-cross" />
            </a>

            <div className="filters-bar-wrap-in">

                {/* Left: search + dropdowns */}
                <div className="filters-bar-left">
                    <div className={`filter-search${searchActive ? " active" : ""}`}>
                        <a
                            href="javascript:;"
                            className="filter-search-icon"
                            onClick={(e) => { e.preventDefault(); setSearchActive((o) => !o); }}
                        >
                            <i className="icon-search" />
                            <span className="sr-only">Open search</span>
                        </a>
                        <div className="search-overlay">
                            <div className="search-overlay-in  gap-2 border! border-neutral-300! h-24! flex flex-row items-center">
                                <input
                                    type="text"
                                    className="search-field keyword border-none! placeholder:text-3xl placeholder:font-medium"
                                    autoComplete="off"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="Type to search..."
                                />
                                <button type="button" className="search-submit h-24 border-l-4! border-(--c-orange)! flex items-center justify-center w-24">
                                    <Search className="ml-4"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="filter-group-label">Filters:</div>
                        <div className="flex flex-col md:flex-row">
                            <div className="dropdown-col" id="discipline-filter">
                                <SelectDropdown
                                    id="categories"
                                    label="Categories"
                                    options={CATEGORIES}
                                    value={category}
                                    onChange={setCategory}
                                    openId={openId}
                                    setOpenId={setOpenId}
                                />
                            </div>
                            <div className="dropdown-col" id="industry-filter">
                                <SelectDropdown
                                    id="disciplines"
                                    label="Disciplines"
                                    options={DISCIPLINES}
                                    value={discipline}
                                    onChange={setDiscipline}
                                    openId={openId}
                                    setOpenId={setOpenId}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: option toggles */}
                <div className="filters-bar-right">
                    <div className="filter-group-label filter-group-label__mob">Options:</div>
                    <div className="filter-options">
                        <div className="filter-group-label">Options:</div>
                        <a
                            href="javascript:;"
                            className={`filter-option${assessment ? " active" : ""}`}
                            id="assessment"
                            onClick={(e) => { e.preventDefault(); setAssessment(!assessment); }}
                        >
                            <i className="icon-checkbox" />
                            Journey Level <br />Assessment Available
                        </a>
                        <a
                            href="javascript:;"
                            className={`filter-option${translation ? " active" : ""}`}
                            id="translation"
                            onClick={(e) => { e.preventDefault(); setTranslation(!translation); }}
                        >
                            <i className="icon-checkbox" />
                            Translation <br />Available
                        </a>
                    </div>
                </div>

            </div>

            {/* Mobile apply / clear */}
            <div className="filter-buttons">
                <a href="javascript:;" className="filter-buttons-clear" onClick={(e) => { e.preventDefault(); clearAll(); }}>
                    Clear All
                </a>
                <a href="javascript:;" className="filter-buttons-apply" onClick={(e) => { e.preventDefault(); setFiltersOpen(false); }}>
                    Apply
                </a>
            </div>
        </div>
    );

    return (
        <div className="filters-bar fadeInUpS wow is-visible relative z-10">
            <div className="inner inner--slim-1172">
                <div className="filters-bar-in">

                    {/* ── Mobile toggle row ── */}
                    <div className="filter-open">
                        <span
                            className="filter-open-btn"
                            onClick={() => setFiltersOpen((o) => !o)}
                        >
                            <i className="icon-filter ia-orange" />
                            Filters
                        </span>
                        <a
                            href="javascript:;"
                            className="sort"
                            onClick={(e) => { e.preventDefault(); onSort(); }}
                        >
                            <em>Sort {sortAsc ? "A to Z" : "Z to A"}</em>
                            <span>
                                <span className={`sort-up icon-arr-up${sortAsc ? " active" : ""}`} />
                                <span className={`sort-down icon-arr-down${!sortAsc ? " active" : ""}`} />
                            </span>
                        </a>
                    </div>

                    {/* ── Filters panel:
                desktop → inline (normal flow, no fixed)
                mobile  → portal to body (escapes parent transform stacking context) ── */}
                    {isMobile ? createPortal(panel, document.body) : panel}

                    {/* ── Filter info: chips + result count ── */}
                    <div className="filter-info">
                        <div className="filter-info-left">
                            {keyword && (
                                <div className="search-phrase">
                                    Search Results: &ldquo;<span>{keyword}</span>&rdquo;
                                </div>
                            )}
                            <div className="chips-wrap">
                                <div className="chips-list">
                                    {chips.map((chip) => (
                                        <span key={chip.label} className="chips">
                                            {chip.label}
                                            <button type="button" onClick={chip.clear}>
                                                <i className="icon-cross" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                {chips.length > 1 && (
                                    <a
                                        href="javascript:;"
                                        className="clear-results p3 ia-link"
                                        onClick={(e) => { e.preventDefault(); clearAll(); }}
                                    >
                                        <span>Clear All</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="filter-info-right">
                            <div className="filter-result-count">
                                <span>{resultCount}</span> Results
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}