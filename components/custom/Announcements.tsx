'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Diagnosed, Quoted, and Fixed — Every Time</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://manhattanroofs.com/wp-content/uploads/flat-roof-nyc.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#5A0006',
                }}
              />
              {/* [TODO: Replace with Manhattan Roofing job site or completed roof photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every job starts the same way: we come to your roof, assess what&apos;s
                actually happening, and give you a straight answer and a price before
                any work begins. No mystery charges. No subcontractors. No pressure.
                Just an honest evaluation from an owner who does the work himself.
              </p>
              <p>
                <strong>Step 1: On-Site Inspection.</strong> George assesses the roof
                in person — flat, shingle, skylights, gutters, whatever you&apos;re
                dealing with — and identifies the source of the problem.
              </p>
              <p>
                <strong>Step 2: Free Estimate.</strong> You get the full price upfront —
                parts and labor. We don&apos;t start until you approve. What we quote
                is what you pay.
              </p>
              <p>
                <strong>Step 3: Repair &amp; Clean Up.</strong> We complete the job with
                quality materials and warrantied workmanship, then clean the site before
                we leave.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="tel:2124959840"
                label="Call for a Free Estimate"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
