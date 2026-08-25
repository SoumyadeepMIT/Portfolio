"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full py-4 text-2xl bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800">
      <nav className="flex items-center justify-center gap-8">
        {links.map(({ href, label }) => {
          const isActive = pathname === href

          return (
            <Link
              key={href}
              href={href}
              className={`border-b-2 pb-1 transition-all duration-300 ease-in-out ${
                isActive
                  ? "border-[#f4f1eb] text-[#f4f1eb]"
                  : "border-transparent text-[#9C978E] hover:text-[#f4f1eb]"
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}