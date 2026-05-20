'use client';
import Link from 'next/link';
import DoorSVG from '../svgs/DoorSVG';
import SecondaryButton from '../buttons/SecondaryButton';

interface AccordionStep { label: string; body: string; }

interface InsightAccordionItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    learnHref: string;
    steps: AccordionStep[];
  };
  isOpen: boolean;
  setActiveId: (id: string) => void;
}

const InsightAccordionItem: React.FC<InsightAccordionItemProps> = ({
  item,
  isOpen,
  setActiveId,
}) => {
  return (
    <div
      key={item.id}
      className={`accordion-item${isOpen ? ' opened' : ''}`}
      data-detect={item.id}
    >
      <div className="accordion-item-in">
        <div className="accordion-item__door relative z-10">
          <DoorSVG />
        </div>
        <div
          className="accordion-item__title h4 relative z-20"
          onClick={() => setActiveId(item.id)}
        >
          {item.title}
          <i className="icon-arr-down" />
        </div>

        <div
          className="accordion-item__desc relative z-20"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {/* Description shown on expand */}
          <p
            className="p3"
            style={{ color: 'var(--color-brand-navy)', marginBottom: '1rem', lineHeight: 1.6 }}
          >
            {item.description}
          </p>
          <Link href={item.learnHref} className="ia-link" style={{ fontSize: '1.3rem' }}>
            <span>Full Service Details →</span>
          </Link>

          {/* Mobile only: steps + CTA */}
          <div className="mob-version" style={{ marginTop: '2rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-brand-navy)' }}>
              How We Handle It
            </p>
            {item.steps.map((step, i) => (
              <p key={i} className="p3" style={{ marginBottom: '0.75rem', color: 'var(--color-brand-navy)' }}>
                <strong>Step {i + 1} — {step.label}.</strong> {step.body}
              </p>
            ))}
            <div style={{ marginTop: '1.5rem' }}>
              <SecondaryButton label="Contact Now" href="/contact-us" wow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightAccordionItem;
