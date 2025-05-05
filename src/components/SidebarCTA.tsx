import Link from "next/link";
import React from "react";

const SidebarCTA = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4 text-sm">
      <div className="text-balance text-lg font-semibold leading-tight group-hover:underline">
        Explore Components in Storybook
      </div>
      <div>
        Dive into detailed documentation with Storybook’s intuitive interface.
      </div>
      <div>
        Explore components, usage examples, and test cases effortlessly.
      </div>
      <Link
        href="https://donut-storybook.vercel.app/"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-2 w-fit"
      >
        Visit Storybook
      </Link>
    </div>
  );
};

export default SidebarCTA;
