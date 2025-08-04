"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../../../../components/registry/seraui/button";
import { Input } from "@/components/ui/input";
import { Heart, MenuIcon, Search, ShoppingCart, X } from "lucide-react";
import ShimmerButton from "../../../../components/registry/seraui/ShimmerButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "New Arrivals" },
    { href: "#", label: "Top Sellers" },
    { href: "/products", label: "Products" },
  ];

  return (
    <header className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-3xl font-bold text-[#0000FF]"
          >
            FMart
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-300 hover:text-[#0000FF] hover:font-bold dark:hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {/* Search */}
            <div className="relative hidden lg:block">
              <Input
                className="peer h-9 ps-7 pe-2 focus:outline-none focus:border-none focus:ring-0"
                placeholder="Search..."
                type="search"
              />
              <div className="text-gray-600 dark:text-gray-700 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center">
                <Search className="size-6 ps-2" />
              </div>
            </div>

            <div className="flex gap-5 items-center justify-center pr-1  ">
              <Link
                href="/wishlist"
                className="size-4 text-gray-600 dark:text-gray-700 "
              >
                <Heart />
              </Link>
              <Link
                href="/cart"
                className="size-4 text-gray-600 dark:text-gray-700 "
              >
                <ShoppingCart />
              </Link>
            </div>
            {/* Sign In (Desktop) */}
            <div className="hidden lg:flex">
              <ShimmerButton className="text-sm font-medium ">
                <Link href="#">Sign In</Link>
              </ShimmerButton>
            </div>

            {/* Mobile Search Button */}
            <div className="lg:hidden mt-2">
              <Button
                variant="ghost"
                onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
              >
                <Search className="size-5" />
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden mt-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <MenuIcon className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMobileSearchVisible && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 px-4 py-2">
          <Input placeholder="Search..." type="search" className="w-full" />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-center px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="w-full mt-2 text-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-colors duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
