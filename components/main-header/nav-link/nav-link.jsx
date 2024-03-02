"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styledClass from "./nav-link.module.css";
const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${styledClass.link} ${styledClass.active}`
          : styledClass.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
