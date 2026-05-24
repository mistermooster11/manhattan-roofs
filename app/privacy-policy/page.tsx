import type { Metadata } from "next";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy — Manhattan Roofing",
  description: "Privacy Policy for Manhattan Roofing. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroSection
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section style={{ padding: "4rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>

        <p style={{ marginBottom: "3rem", fontStyle: "italic", color: "#6b7280" }}>
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <p>
          Manhattan Roofing (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates this website
          and is committed to protecting your privacy. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have regarding your information.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Information We Collect</h2>
        <p>We collect information you provide directly to us, including when you:</p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
          <li>Fill out our contact or service request form</li>
          <li>Call us directly at (212) 495-9840</li>
          <li>Send us an email</li>
        </ul>
        <p>
          The types of information we may collect include your name, phone number, email address,
          service address, and a description of the roofing issue you need help with.
        </p>
        <p>
          We also automatically collect certain information when you visit our website, including your
          IP address, browser type, referring URLs, and pages viewed. This information is collected
          through standard web analytics tools.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
          <li>Respond to your service inquiries and schedule appointments</li>
          <li>Communicate with you about the status of your service request</li>
          <li>Send appointment reminders or follow-up communications</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third parties for their
          marketing purposes.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to improve your browsing
          experience and analyze site traffic. Cookies are small data files stored on your device.
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being
          sent. However, if you do not accept cookies, some portions of our website may not function
          properly.
        </p>
        <p>
          We may use Google Analytics or similar services to understand how visitors use our site.
          These services collect information such as how often users visit the site, what pages they
          visit, and what other sites they used prior to coming to our site. We use this information
          to improve our site. Google&apos;s ability to use and share information collected by Google
          Analytics is restricted by the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#CF0013" }}>
            Google Analytics Terms of Service
          </a>{" "}
          and the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#CF0013" }}>
            Google Privacy Policy
          </a>.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites, including review platforms such as
          Google and Yelp. We are not responsible for the privacy practices of these third parties.
          We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Data Retention</h2>
        <p>
          We retain the information you provide for as long as necessary to fulfill the purposes
          outlined in this policy, or as required by law. If you would like us to delete your
          information from our records, please contact us using the information below.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Your Rights</h2>
        <p>
          You have the right to access, correct, or request deletion of the personal information
          we hold about you. To exercise any of these rights, please contact us directly. We will
          respond to your request within a reasonable timeframe.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Children&apos;s Privacy</h2>
        <p>
          Our website is not directed to children under the age of 13, and we do not knowingly
          collect personal information from children. If you believe we have inadvertently collected
          information from a child, please contact us so we can delete it promptly.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this
          policy periodically to stay informed about how we protect your information.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem", fontSize: "1.25rem", fontWeight: 700 }}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal
          information, please contact us:
        </p>
        <p>
          <strong>Manhattan Roofing</strong><br />
          Manhattan, Brooklyn, Queens, and The Bronx, NY<br />
          Phone: <a href="tel:2124959840" style={{ color: "#CF0013" }}>(212) 495-9840</a>
        </p>

      </section>
    </>
  );
}
