import CodeSnippet from "@/components/CodeSnippet";
import SidebarCTA from "@/components/SidebarCTA";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation Guide | Donut-UI Documentation",
  description:
    "Quickly set up Donut-UI in your React or Next.js project. Follow our step-by-step installation guide to install the package, configure theme colors, and start using components.",
  keywords: [
    "Donut-UI installation",
    "React component setup",
    "Next.js UI library install",
    "npm install donut-ui",
  ],
  alternates: {
    canonical: "https://your-domain.com/docs/installation",
  },
  openGraph: {
    type: "article",
    url: "https://your-domain.com/docs/installation",
    title: "Installation Guide | Donut-UI Documentation",
    description:
      "Quickly set up Donut-UI in your React or Next.js project. Follow our step-by-step installation guide to install the package, configure theme colors, and start using components.",
    images: [
      {
        url: "https://your-domain.com/og-images/installation.png",
        width: 1200,
        height: 630,
        alt: "Donut-UI Installation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Guide | Donut-UI Documentation",
    description:
      "Quickly set up Donut-UI in your React or Next.js project. Follow our step-by-step installation guide to install the package, configure theme colors, and start using components.",
    images: ["https://your-domain.com/og-images/installation.png"],
  },
};

const install = `npm install donut-ui
`;

const css = `:root {
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.13 0.028 261.692);
  --color-primary: oklch(22.5% 0.146 265.82);
  --color-primary-foreground: oklch(100% 0 0);
  --color-secondary: oklch(0.69 0.146 265.82);
  --color-secondary-foreground: oklch(100% 0 0);
  --color-destructive: oklch(63.7% 0.237 25.331);
  --color-accent: oklch(0.97 0 0);
  --color-border: oklch(0.928 0.006 264.531);
  --color-muted: oklch(0.967 0.003 264.542);
  --color-muted-foreground: oklch(0.551 0.027 264.364);
  --color-input: oklch(0.928 0.006 264.531);
  --color-popover: oklch(1 0 0);
  --color-popover-foreground: oklch(0.13 0.028 261.692);
}
`;

const example = `import { Button } from "donut-ui";

function App() {
  return <Button>Default Button</Button>;
}

export default App;
`;

export default function InstallationPage() {
  return (
    <div className="px-4 sm:px-8">
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <div className="py-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Installation Guide
            </h1>
            <p className="text-sm sm:text-base">
              Setting up Donut-UI in your project is quick and straightforward.
              Follow these simple steps to integrate Donut-UI into your React or
              Next.js application and start building stunning user interfaces in
              no time.
            </p>
            <div className="py-6">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">
                  Step 1: Install Donut-UI
                </h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base">
                    To begin, install the Donut-UI package using npm. Run the
                    following command in your terminal:
                  </p>
                  <CodeSnippet code={install} />
                  <p className="text-sm sm:text-base">
                    This will add Donut-UI to your project’s dependencies,
                    making it ready for use.
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">
                  Step 2: Configure Theme Colors
                </h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base">
                    Donut-UI provides a default color palette, but you can
                    easily customize it to align with your brand. To configure
                    the theme, add the following CSS variables to your global
                    stylesheet or include them in your CSS-in-JS solution:
                  </p>
                  <CodeSnippet code={css} />
                  <p className="text-sm sm:text-base">
                    These variables define the color scheme for your
                    application, ensuring a cohesive and polished look. You can
                    modify these values to suit your specific design needs.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">
                  Step 3: Start Using Components
                </h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base">
                    Once installed and configured, you can import components
                    from Donut-UI and start using them in your application.
                    Here’s an example:
                  </p>
                  <CodeSnippet code={example} />
                  <p className="text-sm sm:text-base">
                    With just a few lines of code, you’ve added a functional and
                    styled button to your application.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Best Practices
            </h2>
            <ol className="space-y-2 list-disc ml-4 mb-4">
              <li className="text-sm sm:text-base">
                <b>Organize Your Styles:</b> Use a global CSS or theme file to
                manage your Donut-UI configurations.
              </li>
              <li className="text-sm sm:text-base">
                <b>Explore the Documentation:</b> Leverage the full potential of
                Donut-UI by exploring its documentation and learning about
                advanced features.
              </li>
              <li className="text-sm sm:text-base">
                <b>Stay Updated:</b> Keep your Donut-UI package up to date to
                access new components, features, and improvements.
              </li>
            </ol>
            <p className="text-sm sm:text-base">
              By following these steps, you’ll be ready to harness the power of
              Donut-UI to create visually stunning and highly functional
              applications. Let’s build something amazing together!
            </p>
          </div>
          <div className="flex item-center justify-start py-8">
            <Link href="/docs" className="font-bold flex items-center gap-2"><ChevronLeft size={16} className="font-bold" /> Introduction</Link>
          </div>
        </div>
        <div className="w-48 xl:w-60 hidden lg:block h-[calc(100vh-4rem)] sticky top-16">
          <div className="no-scrollbar h-full overflow-auto">
            <div className="py-6">
              <h3 className="font-medium mb-2">On This Page</h3>
              <div className="space-y-2">
                <a
                  href="#usage"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Usage
                </a>
                <a
                  href="#examples"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Examples
                </a>
              </div>
            </div>
            <SidebarCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
