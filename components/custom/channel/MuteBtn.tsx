"use client";

import { useState } from "react";

interface MuteBtnProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export default function MuteBtn({ videoRef }: MuteBtnProps) {
  const [muted, setMuted] = useState(true);
  return (
    <button
      type="button"
      className="story-video__mute"
      aria-label={muted ? "Unmute Video" : "Mute Video"}
      onClick={() => {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
          setMuted(videoRef.current.muted);
        }
      }}
    >
      <i className={muted ? "icon-mute" : "icon-unmute"} />
    </button>
  );
}
