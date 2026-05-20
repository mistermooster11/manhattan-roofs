import React from 'react';
import {
  Mail,
  Building2,
  Search,
  Globe,
  CheckSquare,
  Monitor,
  Link as LinkIcon,
  FileText,
  Map,
  User,
  Info,
  ShieldCheck,
  ClipboardList,
  FileBarChart2,
  Volume2,
  Award,
  Heart,
  type LucideIcon,
} from 'lucide-react';

/** Map icomoon class names → Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  'icon-message':    Mail,
  'icon-buildings':  Building2,
  'icon-search':     Search,
  'icon-globe':      Globe,
  'icon-checkbox':   CheckSquare,
  'icon-verify':     ShieldCheck,
  'icon-powerpoint': Monitor,
  'icon-link':       LinkIcon,
  'icon-doc':        FileText,
  'icon-map':        Map,
  'icon-user':       User,
  'icon-info':       Info,
  'icon-assesment':  ClipboardList,
  'icon-file':       FileBarChart2,
  'icon-unmute':     Volume2,
  'icon-nccer':      Award,
  'icon-heart':      Heart,
};

interface NavDropdownLeftProps {
    dd: {
        title: string;
        titleHref: string;
        description: string;
        quickLinks?: Array<{
            label: string;
            href: string;
            external?: boolean;
            icon: string;
        }>;
        links: Array<{
            label: string;
            href: string;
            external?: boolean;
        }>;
    }
}
const NavDropdownRight:React.FC<NavDropdownLeftProps> = ({ dd }) => {
  return (
    <>
      {dd.quickLinks && (
        <div className="w-[32%] box-border py-[4rem] px-[2.5rem] bg-[#f2f2f2]">
          {/* nav-dropdown__sub-title */}
          <div className="text-[1rem] text-[#172535] tracking-[.15rem] uppercase mb-[2.5rem]">
            Quick Links
          </div>
          {/* nav-dropdown__extramenu */}
          <ul className="m-0 p-0 list-none">
            {dd.quickLinks.map((ql) => (
              <li key={ql.label} className="mb-[2.7rem]">
                {/* ia-link ia-link--arrow — ml-[2.2rem] creates space for the icon */}
                <a
                  href={ql.href}
                  target={ql.external ? "_blank" : "_self"}
                  rel={ql.external ? "noopener" : undefined}
                  className="group/ql relative inline-block align-top ml-[2.2rem] text-[#172535] text-[1.4rem] font-semibold leading-[1.5] no-underline"
                >
                  {/* ia-link--arrow icon — Lucide SVG, fromLeftRoll on hover */}
                  {(() => {
                    const IconComp = ICON_MAP[ql.icon];
                    return IconComp ? (
                      <span className="absolute -left-[2.2rem] top-[0.2rem] text-brand-orange overflow-hidden group-hover/ql:animate-[fromLeftRoll_0.5s_forwards]">
                        <IconComp size={15} strokeWidth={2} />
                      </span>
                    ) : null;
                  })()}
                  {/* span — border-bottom turns orange on hover */}
                  <span className="border-b border-[#172535] transition-colors duration-350 group-hover/ql:border-brand-orange ml-2">
                    {ql.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default NavDropdownRight