"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "shop",
    href: "/shop",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "contact",
    href: "/contact",
  },
];


const NavLinks = ({isMenuOpen}:{isMenuOpen?:boolean}) => {
    const pathName = usePathname()
  return (
    <ul className="flex gap-7">
      {navLinks.map((navLink) => (
        <Link key={navLink.label} href={navLink.href}>
          <li className="text-white group relative">
            <span
              className={`relative ${isMenuOpen && "text-black font-bold"} ${
                navLink.href === pathName && "text-pink-800 font-bold"
              }`}
            >
              {navLink.label}
              <div
                className={`absolute ${
                  isMenuOpen ? "bg-black" : "bg-white"
                }  -bottom-[8px] left-1/2 h-[2px] w-6 transform transition-transform ease-in-out duration-300 -translate-x-1/2 scale-x-0 group-hover:scale-x-150`}
              ></div>
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NavLinks

