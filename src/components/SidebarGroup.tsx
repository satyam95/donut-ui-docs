"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  title: string;
  path: string;
  badge?: string;
}

interface SidebarGroupProps {
  title: string;
  items: SidebarItem[];
  onItemClick?: () => void;
}

const SidebarGroup = ({ title, items, onItemClick }: SidebarGroupProps) => {
  const pathname = usePathname();

  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div>
      <h4 className="text-sm h-8 px-2 flex items-center font-semibold text-black">{title}</h4>
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={handleClick}
            className={`flex items-center h-8 px-2 hover:bg-accent rounded-lg ${
              pathname === item.path
                ? "font-semibold text-black bg-accent"
                : "text-gray-600"
            }`}
          >
            {item.title}
            {item.badge && (
              <span className="ml-2 rounded-md bg-black px-1.5 py-0.5 text-xs text-white">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarGroup;
