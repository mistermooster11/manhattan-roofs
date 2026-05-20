"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import MuteBtn from "./MuteBtn";

interface StoryVideoProps {
  bg: string;
  src: string;
  title: string;
  name: string;
  position: string;
  readHref: string;
}

export default function StoryVideo({ bg, src, title, name, position, readHref }: StoryVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div className="story-video story-item">
      <div ref={ref} className={`story-video__bg vape wow${vis}`}>
        <div
          className="story-video__bg-div"
          style={{ background: `${bg} no-repeat 50% 50% / cover` }}
        >
          <video ref={vidRef} loop autoPlay muted playsInline preload="none">
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <div
          className={`story-video__triangle wow fadeInRight${vis}`}
          style={{ animationDelay: "0.3s" }}
        >
          <span />
          <a href={readHref} className="story-video__read">
            Watch Full <br />Story
          </a>
        </div>
      </div>
      <div className={`story-video__in wow fadeInUp${vis}`}>
        <h4 className="story-video__title h4">{title}</h4>
        <div className="story-video__name">{name}</div>
        <div className="story-video__position ia-sky">{position}</div>
      </div>
      <MuteBtn videoRef={vidRef} />
    </div>
  );
}
