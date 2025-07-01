"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./button";

type NavItem = {
  name: string;
  link: string;
};

type CombinedNavbarProps = {
  navItems: NavItem[];
  user?: { email?: string | null } | null;
  isAdmin?: boolean;
};

const CombinedNavbar = ({ navItems, user, isAdmin = false }: CombinedNavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-5 z-40 w-full")}
    >
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
            : "none",
              width: visible ? "60%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn(
          "relative z-[60] mx-auto hidden max-w-7xl items-center justify-between rounded-full px-4 py-2 lg:flex",
          visible && "bg-white/80 dark:bg-neutral-950/80"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
          <img src="/medwearicon.png" alt="logo" width={40} height={40} className="rounded-full" />
          <span className="text-blue-950 font-semibold dark:text-white">MedWear Solutions Inc.</span>
        </Link>

        {/* Center Nav Items */}
        <motion.div
          onMouseLeave={() => setHovered(null)}
          className="flex flex-1 justify-center items-center space-x-2 text-sm font-medium text-zinc-600 hover:text-zinc-800"
        >
          {navItems.map((item, idx) => (
            <a
              onMouseEnter={() => setHovered(idx)}
              key={`link-${idx}`}
              href={item.link}
              className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </a>
          ))}
        </motion.div>

       
        <div className="flex items-center gap-3 shrink-0">
          {user ? (
            <>
              <Link href="/api/auth/logout" className={buttonVariants()}>Sign Out</Link>
              {isAdmin && (
                <Link href="/admin/dashboard" className={buttonVariants({ variant: "secondary" })}>
                  Dashboard
                </Link>
              )}
              <Link
                href="/configure/upload"
                className={buttonVariants({ size: "sm", className: "hidden sm:flex items-center gap-1" })}
              >
                Order Now <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/api/auth/register" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                Sign Up
              </Link>
              <Link href="/api/auth/login" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                Login
              </Link>
              <Link
                href="/configure/upload"
                className={buttonVariants({ size: "sm", className: "hidden sm:flex items-center gap-1" })}
              >
                Order Now <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          )}
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
            : "none",
          y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn(
          "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
          visible && "bg-white/80 dark:bg-neutral-950/80"
        )}
      >
        {/* Header */}
        <div className="flex w-full flex-row items-center justify-between px-4">
          <Link href="/" className="relative z-20 flex items-center space-x-2 text-sm font-normal text-black">
            <img src="/medwearicon.png" alt="logo" width={40} height={40} className="rounded-full" />
            <span className="text-blue-950 font-semibold dark:text-white">MedWear Solutions Inc.</span>
          </Link>

          {/* Toggle */}
          {mobileOpen ? (
            <IconX className="text-black dark:text-white" onClick={() => setMobileOpen(false)} />
          ) : (
            <IconMenu2 className="text-black dark:text-white" onClick={() => setMobileOpen(true)} />
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start gap-4 rounded-lg bg-white px-4 py-8 shadow dark:bg-neutral-950"
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="text-neutral-700 dark:text-neutral-300 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              {user ? (
                <>
                  <Link href="/api/auth/logout" className={buttonVariants({ className: "w-full" })}>
                    Sign Out
                  </Link>
                  {isAdmin && (
                    <Link href="/admin/dashboard" className={buttonVariants({ className: "w-full" })}>
                      Dashboard
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link href="/api/auth/register" className={buttonVariants({ className: "w-full" })}>
                    Sign Up
                  </Link>
                  <Link href="/api/auth/login" className={buttonVariants({ className: "w-full" })}>
                    Login
                  </Link>
                </>
              )}
              <Link
                href="/configure/upload"
                className={buttonVariants({ className: "w-full flex items-center gap-1" })}
              >
                Order Now <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CombinedNavbar;
