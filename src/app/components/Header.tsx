"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Noticias", description: "Últimas actualizaciones y eventos" },
    { name: "Eventos", description: "Próximos encuentros y conferencias" },
    { name: "Comunidad", description: "Conéctate con otros miembros" },
    { name: "Recursos", description: "Herramientas y materiales útiles" },
    { name: "Contacto", description: "Ponte en contacto con nosotros" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-green-600 tracking-tight">
                ALAS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`/${item.name.toLowerCase()}`}
                className="group inline-flex items-center text-base font-medium text-black hover:text-green-600 transition-colors duration-300"
              >
                <span>{item.name}</span>
                <span className="absolute hidden group-hover:inline-block bg-black text-white text-xs py-1 px-2 rounded-md mt-8 transform -translate-x-1/2 left-1/2 whitespace-nowrap">
                  {item.description}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-green-600 hover:bg-gray-100 transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-xl`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`/${item.name.toLowerCase()}`}
              className="block px-3 py-4 rounded-md text-base font-medium text-black hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="block text-lg">{item.name}</span>
              <span className="block mt-1 text-sm text-gray-500">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
