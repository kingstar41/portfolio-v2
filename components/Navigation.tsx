"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    // If we're on /blog, only the blog link can be active
    if (pathname === "/blog") {
      return href === "/blog";
    }

    // If we're on the home page
    if (pathname === "/") {
      // For hash routes
      if (href.includes("#")) {
        return currentHash === href.substring(1);
      }
      // For home route - only active if no hash
      if (href === "/") {
        return currentHash === "";
      }
    }

    return false;
  };

  return (
    <nav className="nav-pill">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`nav-link ${isActive(link.href) ? "active" : ""}`}
          onClick={() => {
            if (link.href.includes("#")) {
              setCurrentHash(link.href.substring(link.href.indexOf("#")));
            } else {
              setCurrentHash("");
            }
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
