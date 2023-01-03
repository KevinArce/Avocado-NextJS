import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch={false}>
            Home
          </Link>
        </li>

        <li>
          <Link href="/about" prefetch={false}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
