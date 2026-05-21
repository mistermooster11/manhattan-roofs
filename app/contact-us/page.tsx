"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Styled submit button ── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="/images/roofer-installing-shingles-aerial-view.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ── */}
      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Get a Free On-Site Estimate
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "2.5rem" }}
          >
            Fill out the form below or call us directly at{" "}
            <strong>(212) 495-9840</strong>. We come to you — free on-site
            estimates across Manhattan and all NYC boroughs.
            {/* [TODO: Confirm business hours with client] */}
          </p>

          {/* Two-column: form left, map right. Stacks on mobile. */}
          <div className="contact-layout-grid">

            {/* ── Form ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
              {/* TODO: Replace with real form backend (Gravity Forms, JotForm, HubSpot, etc.) */}
              <form
                action="#"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="name" className="p3 ia-medium">Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="(555) 000-0000"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="email" className="p3 ia-medium">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                    <select
                      id="service" name="service"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                    >
                      <option value="">Select a service…</option>
                      <option>Flat Roof Installation</option>
                      <option>Flat Roof Repair</option>
                      <option>Shingle Roof Installation</option>
                      <option>Roof Repair</option>
                      <option>Storm Damage Repair</option>
                      <option>Skylight Installation &amp; Repair</option>
                      <option>Roof &amp; Gutter Cleaning</option>
                      <option>Roof Maintenance Plans</option>
                      <option>Roof &amp; Attic Inspection</option>
                      <option>Energy &amp; Insulation Upgrade</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Describe the issue — what's happening and where?"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* ── Map ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              {/* [TODO: Replace with Google Maps embed for Manhattan Roofing service area — centered on Manhattan, NY] */}
              <iframe
                title="Manhattan Roofing — Serving Manhattan & NYC Boroughs"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1716000000000!5m2!1sen!2sus"
                width="100%"
                height="340"
                style={{ border: 0, display: "block", borderRadius: "6px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p3 ia-medium" style={{ marginTop: "1.25rem", lineHeight: "1.7" }}>
                <strong>Manhattan Roofing</strong><br />
                Manhattan, New York, NY<br />
                <a href="tel:2124959840" style={{ color: "inherit" }}>(212) 495-9840</a><br />
                {/* [TODO: Add Manhattan Roofing email address] */}
                {/* [TODO: Confirm business hours with client] */}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
