"use client";

import Announcements from "@/components/custom/Announcements";
import Difference from "@/components/custom/Difference";
import DecorativeSVG from "@/components/custom/DecorativeSVG";
import GenralLineDeco from "@/components/custom/GenralLineDeco";
import { useElementHeight } from "@/hooks/useElementHeight";

/**
 * Client wrapper — dùng ResizeObserver để đo chiều cao div,
 * sau đó truyền xuống GenralLineDeco để đường trang trí chạy
 * đúng từ đầu đến cuối phần này.
 */
export default function HomeSectionWithLine() {
  const { ref, height } = useElementHeight<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      <GenralLineDeco height={height} />
      <>
      <DecorativeSVG />
      <Announcements />
      <Difference />
      </>
    </div>
  );
}
