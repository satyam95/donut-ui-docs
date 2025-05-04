// "use client";

import { componentsItems, gettingStartedItems } from "@/data/menu";
import SidebarGroup from "./SidebarGroup";

const Sidebar = () => {
  return (
    <div className="no-scrollbar h-full overflow-auto py-6 pr-4 pl-4 xl:pl-0">
      <div className="space-y-6">
        <SidebarGroup title="Getting Started" items={gettingStartedItems} />
        <SidebarGroup title="Components" items={componentsItems} />
      </div>
    </div>
  );
};

export default Sidebar;
