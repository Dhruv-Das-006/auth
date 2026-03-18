"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, ShieldCheck, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 glass border-b transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 relative flex items-center">
        {/* Logo - Start */}
        <div className="flex-shrink-0 flex items-center gap-2 z-10">
          <div className="p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
            <ShieldCheck className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">Authly</span>
        </div>

        {/* Desktop Nav - Absolutely Centered */}
        <div className="hidden md:flex absolute inset-x-0 justify-center items-center gap-10 pointer-events-none">
          <div className="flex gap-10 pointer-events-auto">
            <Link href="#home" className="text-sm font-bold hover:text-primary transition-all relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="#features" className="text-sm font-bold hover:text-primary transition-all relative group py-2">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="#pricing" className="text-sm font-bold hover:text-primary transition-all relative group py-2">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link href="#docs" className="text-sm font-bold hover:text-primary transition-all relative group py-2">
              Docs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </div>
        </div>

        {/* Theme Toggle & Mobile Button - End */}
        <div className="ml-auto flex items-center gap-2 z-10">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-2xl hover:bg-secondary border border-transparent hover:border-border transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-primary" />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-2xl hover:bg-secondary border border-transparent hover:border-border transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - High Contrast Styling */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white dark:bg-slate-950 border-b p-8 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl z-50">
          <Link href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all border border-transparent hover:border-primary/20">
            <span className="text-xl font-bold">Home</span>
            <ChevronRight size={20} />
          </Link>
          <Link href="#features" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all border border-transparent hover:border-primary/20">
            <span className="text-xl font-bold">Features</span>
            <ChevronRight size={20} />
          </Link>
          <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all border border-transparent hover:border-primary/20">
            <span className="text-xl font-bold">Pricing</span>
            <ChevronRight size={20} />
          </Link>
          <Link href="#docs" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all border border-transparent hover:border-primary/20">
            <span className="text-xl font-bold">Docs</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
