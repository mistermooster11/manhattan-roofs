"use client";

import { useState, useMemo } from "react";
import { crafts, type CraftItem } from "@/data/craft-catalog/crafts";
import CraftList from "./CraftList";

export default function CraftCatalogClient() {
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = useMemo<CraftItem[]>(() => (
    [...crafts].sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    )
  ), [sortAsc]);

  return (
    <CraftList
      items={sorted}
      totalCount={sorted.length}
      sortAsc={sortAsc}
      onSort={() => setSortAsc((v) => !v)}
    />
  );
}
