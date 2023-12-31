"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  console.log(pathName);

  const links = (
    <>
      <li>
        <Link href="/" className={`${pathName == "/" ? "active" : ""}`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/shop" className={`${pathName == "/shop" ? "active" : ""}`}>
          Shop
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`${pathName == "/about" ? "active" : ""}`}
        >
          About
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar px-6 shadow-lg bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">ESSENCE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-warning">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
