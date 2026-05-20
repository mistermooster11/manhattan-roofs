'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
interface NavDropdownLeftProps {
    dd: {
        title: string;
        titleHref: string;
        description: string;
        quickLinks?: Array<{
            label: string;
            href: string;
            external?: boolean;
        }>;
        links: Array<{
            label: string;
            href: string;
            external?: boolean;
        }>;
    }
}
const NavDropdownLeft:React.FC<NavDropdownLeftProps> = ({ dd }) => {
  return (
    <div
      className={[
        "box-border py-[3rem] px-[4rem]",
        dd.quickLinks ? "w-[68%]" : "w-full",
      ].join(" ")}
    >
      {/* nav-dropdown__excerpt */}
      <div className="relative pr-[65px]">
        {/* nav-dropdown__title — inline-block, pr-[50px] for circle icon */}
        <Link
          href={dd.titleHref}
          className="group relative inline-block align-top text-[2.1rem] leading-[1.3] font-medium text-[#172535] mb-[1rem] no-underline pr-[50px] group"
        >
          {/* span:after underline — anchored right, expands left-ward on hover */}
          <span className="relative after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-px after:bg-brand-orange after:transition-[width] after:duration-350 group-hover:after:w-full group-hover:after:left-0 group-hover:after:right-auto">
            {dd.title}
          </span>
          {/* .nav-dropdown__title em — circle border */}
          <em className="absolute -top-6 right-0 not-italic w-[40px] h-[40px] border-[5px] border-[rgba(165,165,165,.3)] rounded-full flex items-center justify-center">
            {/* i.icon-arrow-right — color transitions to orange on hover */}
            <ArrowRight size={10} className='group-hover:text-brand-orange'/>
          </em>
        </Link>

        {/* nav-dropdown__description */}
        <div className="pt-[0.5rem] pb-[1rem] text-[#172535] text-[1.2rem] leading-[1.4] border-b border-dashed border-[#a5a5a5]">
          {dd.description}
        </div>
      </div>

      {/* nav-dropdown__menu */}
      <ul className="pt-[2.7rem] flex flex-wrap m-0 p-0 list-none">
        {dd.links.map((link, li) => (
          <li
            key={link.label}
            className={[
              "mb-[2rem] text-[1.4rem] font-semibold leading-[1.5] inline-block",
              (li + 1) % 2 === 0 ? "w-[48%] mr-0" : "w-[48%] mr-[4%]",
            ].join(" ")}
          >
            <Link
              href={link.href}
              target={(link as {href:string; label:string; external?:boolean}).external ? "_blank" : "_self"}
              rel={(link as {href:string; label:string; external?:boolean}).external ? "noopener" : undefined}
              className="group/link relative block text-[#172535] pl-[1.6rem] pr-[1.6rem] no-underline"
            >
              {/* a:before — orange left bar */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-orange z-[7]" />
              {/* a:after — hover bg overlay */}
              <span className="absolute -left-[1rem] right-0 -top-[1rem] -bottom-[1rem] bg-[rgba(242,242,242,.5)] opacity-0 transition-opacity duration-350 group-hover/link:opacity-100" />
              {/* span — text with underline that turns orange on hover */}
              <span className="relative z-[5] border-b border-[#172535] transition-colors duration-350 group-hover/link:border-brand-orange">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavDropdownLeft