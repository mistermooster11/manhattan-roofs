import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    label: 'Donate',
    href: 'https://secure.givelively.org/donate/national-center-for-construction-education-research/build-america-change-lives',
    filled: false,
  },
  {
    label: 'Support',
    href: 'https://tracker.pardot.nccer.org/l/961192/2024-03-22/5hfvt',
    filled: false,
  },
  {
    label: 'Sign In',
    href: 'https://web.myaccount.nccer.org/',
    filled: true,
  },
];

interface SocialLinksProps {
  /** 'row' = horizontal (Topnav desktop), 'column' = vertical (MobileNav) */
  layout?: 'row' | 'column';
  onClick?: () => void;
}

export default function SocialLinks({ layout = 'row', onClick }: SocialLinksProps) {
  return (
    <ul
      className={[
        'list-none p-0 m-0 text-[0]',
        layout === 'row' ? 'flex items-center' : 'flex flex-col',
      ].join(' ')}
    >
      {socialLinks.map((s, i) => (
        <li
          key={s.label}
          className={[
            'inline-block font-medium',
            layout === 'row' && i !== 0 ? 'ml-[1.5rem]' : '',
            layout === 'column' && i !== 0 ? 'mt-[1.2rem]' : '',
          ].join(' ')}
        >
          <Link
            href={s.href}
            target="_blank"
            rel="noopener"
            onClick={onClick}
            className={[
              'text-4xl! md:text-xl! inline-flex items-center gap-2',
              'text-[1.4rem] leading-[1.4] no-underline whitespace-nowrap',
              'px-[1.2rem] py-[1rem] border border-white rounded-[2px]',
              'transition-[background,color,border-color] duration-350',
              'hover:bg-brand-sky hover:text-brand-navy hover:border-brand-sky',
              s.filled ? 'bg-white text-brand-navy' : 'bg-transparent text-white',
            ].join(' ')}
          >
            {s.label}
            <ExternalLink size={11} strokeWidth={2} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
