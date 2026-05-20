'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface NumberStatsItemProps {
    item: {
        stat: string;
        label: string;
        linkText: string;
        href: string;
    }
}
const NumberStatsItem = ({ item }: NumberStatsItemProps) => {
    return (
        <div key={item.stat} className="w-full md:w-[50%] pr-8 group cursor-pointer">
            <div className="text-[7.4rem] font-light leading-none mb-[1.8rem] text-navy">
                {item.stat}
            </div>
            <h3 className="h5 font-medium leading-tight text-navy mb-[1.2rem]">
                {item.label}
            </h3>
            <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="ia-link ia-link--arrow flex flex-row items-center">
                <div className="overflow-hidden -translate-x-6 group-hover:translate-x-6 group-hover:text-(--c-orange) flex flex-row duration-500">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <ArrowRight size={12} className="group-hover:opacity-0 group-hover:text-(--c-orange) duration-300" />
                </div>
                <span>{item.linkText}</span>
            </Link>
        </div>
    )
}

export default NumberStatsItem