'use client';
import Link from 'next/link';

interface LogoProps {
  isFixed?: boolean;
  isLoaded?: boolean;
}

const Logo = ({ isFixed = false, isLoaded = false }: LogoProps) => {
  return (
    <div
      className={[
        "overflow-hidden transition-[width,height] duration-350 shrink-0",
        isFixed ? "w-[150px] h-[38px]" : "w-[200px] h-[80px]",
      ].join(" ")}
    >
      <Link
        href="/"
        className={[
          "block transition-[opacity,transform] duration-[800ms]",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[50px]",
        ].join(" ")}
      >
        <span className="sr-only">NCCER</span>
        <img
          className="w-full"
          src="/logos/logo-large.svg"
          alt="Logo of NCCER"
        />
      </Link>
    </div>
  );
};

export default Logo;