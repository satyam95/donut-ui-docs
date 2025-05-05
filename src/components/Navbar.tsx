"use client";
import { Github, Search, Menu, X } from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarGroup from "./SidebarGroup";
import { componentsItems, gettingStartedItems } from "@/data/menu";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Lock scroll on both html and body when sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container mx-auto flex h-14 items-center sm:justify-between space-x-4 sm:space-x-0 px-4 xl:px-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden sm:flex items-center space-x-2">
              <span className="inline-block font-bold">Donut UI</span>
            </Link>
            <Menu className="sm:hidden" onClick={toggleSidebar} />
            <nav className="hidden sm:flex items-center text-sm gap-4">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/80"
                href="/docs/installation"
              >
                Docs
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/80"
                href="/components/accordion"
              >
                Components
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between sm:justify-end space-x-2 sm:space-x-4">
            <div className="relative w-full sm:w-[300px] rounded-md shadow-sm flex">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                className="block w-full rounded-md border-0 py-1.5 pl-8 sm:pl-10 pr-4 bg-background text-foreground text-xs sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <kbd className="hidden h-5 rounded px-1.5 bg-muted text-[10px] font-medium sm:inline-flex items-center gap-1">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
            <a
              href="https://github.com/satyam95/donut"
              target="_blank"
              rel="noreferrer"
              className="p-2"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </header>
      <aside
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-70 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="sticky top-0 bg-white flex items-center justify-end p-2 border-b">
          <X
            className="cursor-pointer p-0.5 border rounded-lg"
            onClick={toggleSidebar}
          />
        </div>
        <div>
          <nav className="flex flex-col p-2 gap-3">
            <SidebarGroup
              title="Getting Started"
              items={gettingStartedItems}
              onItemClick={toggleSidebar}
            />
            <SidebarGroup
              title="Components"
              items={componentsItems}
              onItemClick={toggleSidebar}
            />
          </nav>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
