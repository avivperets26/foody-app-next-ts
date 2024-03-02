import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styledClass from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background/main-header-background";
import NavLink from "./nav-link/nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styledClass.header}>
        <Link className={styledClass.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styledClass.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
