"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
      <nav
          className="
        fixed top-0 left-0 w-full z-50
        px-10 py-5
        flex items-center justify-between
        text-white
        pointer-events-auto
      "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
              src="/logo-savify-no-background.png"
              alt="Savify logo"
              width={80}
              height={80}
              priority
              className="opacity-90"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-lg">
          <Link href="#about" className="text-white/70 hover:text-white transition">
            about us
          </Link>
          <Link href="#learn" className="text-white/70 hover:text-white transition">
            learn
          </Link>
          <Link href="#prices" className="text-white/70 hover:text-white transition">
            prices
          </Link>

          {/* Login */}
          <Link
              href="/auth/login"
              className="
            ml-4
            px-6 py-1
            rounded-full
            bg-white/80
            text-black
            font-medium
            hover:bg-white
            transition
          "
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
              href="/auth/signup"
              className="
            px-6 py-1
            rounded-full
            bg-indigo-400/90
            text-black
            font-medium
            hover:bg-indigo-400
            transition
          "
          >
            Sign Up
          </Link>
        </div>
      </nav>
  );
}
