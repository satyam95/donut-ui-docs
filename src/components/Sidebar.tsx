"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItem {
  title: string;
  path: string;
  badge?: string;
}

interface SidebarGroupProps {
  title: string;
  items: SidebarItem[];
}

const gettingStartedItems = [
  { title: "Introduction", path: "/docs" },
  { title: "Installation", path: "/docs/installation" },
];

const componentsItems = [
  { title: "Accordion", path: "/components/accordion" },
  { title: "Alert", path: "/components/alert" },
  { title: "Avatar", path: "/components/avatar" },
  { title: "Badge", path: "/components/badge" },
  { title: "Breadcrumb", path: "/components/breadcrumb" },
  { title: "Button", path: "/components/button" },
  { title: "Card", path: "/components/card" },
  { title: "Checkbox", path: "/components/checkbox" },
  { title: "Dialog", path: "/components/dialog" },
  { title: "Dropdown Menu", path: "/components/dropdown-menu" },
  { title: "Input", path: "/components/input" },
  { title: "Label", path: "/components/label" },
  { title: "Radio Group", path: "/components/radio-group" },
  { title: "Select", path: "/components/select" },
  { title: "Separator", path: "/components/separator" },
  { title: "Skeleton", path: "/components/skeleton" },
  { title: "Switch", path: "/components/switch" },
  { title: "Table", path: "/components/table" },
  { title: "Tabs", path: "/components/tabs" },
  { title: "Textarea", path: "/components/textarea" },
  { title: "Toast", path: "/components/toast" },
  { title: "Toggle", path: "/components/toggle" },
  { title: "Tooltip", path: "/components/tooltip" },
];

const Sidebar = () => {
  return (
    <div className="no-scrollbar h-full overflow-auto py-6 pr-4">
      <div className="space-y-6">
        <SidebarGroup title="Getting Started" items={gettingStartedItems} />
        <SidebarGroup title="Components" items={componentsItems} />
      </div>
    </div>
  );
};

const SidebarGroup = ({ title, items }: SidebarGroupProps) => {
  const pathname = usePathname();
  return (
    <div>
      <h4 className="text-sm h-8 px-2 font-semibold text-black">{title}</h4>
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
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

export default Sidebar;
