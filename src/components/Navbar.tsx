import { Donut, Github, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container mx-auto flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Donut size={24} />
            <span className="inline-block font-bold">Donut UI</span>
          </Link>
          <nav className="flex items-center text-sm gap-4">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/80"
              href="/docs/installation"
            >
              Docs
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/80"
              href="/components"
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative rounded-md shadow-sm hidden sm:flex">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="block w-[300px] rounded-md border-0 py-1.5 pl-10 pr-4 bg-background text-foreground sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <kbd className="hidden h-5 rounded px-1.5 bg-muted text-[10px] font-medium sm:inline-flex items-center gap-1">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
          <a
            href="https://github.com"
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
  );
};

export default Navbar;
