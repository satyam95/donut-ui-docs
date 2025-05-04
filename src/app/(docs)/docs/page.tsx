import SidebarCTA from "@/components/SidebarCTA";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction to Donut-UI | Documentation",
  description:
    "Welcome to Donut-UI: learn how our React & Next.js component library accelerates development with 20+ accessible, customizable, and high-performance UI building blocks.",
  keywords: [
    "Donut-UI introduction",
    "React components",
    "Next.js UI library",
    "accessible UI",
    "performant components",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/docs/introduction`,
  },
  openGraph: {
    type: "article",
    url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/docs/introduction`,
    title: "Introduction to Donut-UI | Documentation",
    description:
      "Welcome to Donut-UI: learn how our React & Next.js component library accelerates development with 20+ accessible, customizable, and high-performance UI building blocks.",
    images: [
      {
        url: "/vercel-icon.svg",
        width: 1200,
        height: 630,
        alt: "Donut-UI Introduction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Donut-UI | Documentation",
    description:
      "Welcome to Donut-UI: learn how our React & Next.js component library accelerates development with 20+ accessible, customizable, and high-performance UI building blocks.",
    images: ["/vercel-icon.svg"],
  },
};

export default function IntroductionPage() {
  return (
    <div className="px-4 sm:px-8">
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <div className="py-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Introduction to Donut-UI
            </h1>
            <p className="text-sm sm:text-base">
              Welcome to Donut-UI, your all-in-one React component library
              designed to accelerate development and enhance productivity. With
              a collection of over 20+ commonly used components, Donut-UI
              empowers developers to build elegant, accessible, and performant
              user interfaces effortlessly. Whether you&apos;re creating a React
              application or leveraging the capabilities of Next.js, Donut-UI
              ensures seamless integration with both frameworks, making it the
              ultimate tool for frontend development.
            </p>
            <div className="py-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                Why Choose Donut-UI?
              </h2>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                1. Ease of Use
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                Simplicity is at the heart of Donut-UI. We understand the
                challenges developers face when adopting new tools, so we’ve
                prioritized a user-friendly experience. With minimal
                configuration, you can start building functional components
                right away, letting you focus on crafting your application
                rather than wrestling with setup.
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                2. Flexibility and Compatibility
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                Donut-UI is built with modern development needs in mind. It
                works seamlessly with both React and Next.js, offering
                flexibility to developers who work across different project
                setups. Whether you&apos;re building static websites or dynamic
                server-rendered applications, Donut-UI adapts to your workflow.
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                3. Comprehensive Component Library
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                With a curated selection of 20+ essential components, Donut-UI
                addresses a broad range of use cases. From buttons, modals, and
                cards to advanced elements like tables and notifications, our
                components are designed to meet the needs of modern web
                applications.
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                4. Customizable and Brand-Aware
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                Customization is crucial in creating unique user experiences.
                Donut-UI allows you to configure brand colors easily, ensuring
                your UI aligns with your brand identity. Use our default styles
                or define your own—the choice is yours.
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                5. Built for Performance
              </h3>
              <p className="text-sm sm:text-base">
                Every component in Donut-UI is optimized for speed and
                responsiveness. With lightweight designs and efficient
                rendering, your applications will perform seamlessly across
                devices.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Key Features
            </h2>
            <ol className="space-y-2 list-disc ml-4 mb-4">
              <li className="text-sm sm:text-base">
                Prebuilt, reusable components to accelerate development.
              </li>
              <li className="text-sm sm:text-base">
                Customizable themes for brand alignment.
              </li>
              <li className="text-sm sm:text-base">
                Optimized for React and Next.js applications.
              </li>
              <li className="text-sm sm:text-base">
                Fully documented and developer-friendly.
              </li>
              <li className="text-sm sm:text-base">
                Lightweight and performant for modern web applications.
              </li>
            </ol>
            <p className="text-sm sm:text-base">
              Whether you’re an individual developer or part of a team, Donut-UI
              is the toolkit you need to build stunning applications
              efficiently. Let’s get started and unlock the power of effortless
              UI development.
            </p>
          </div>
          <div className="flex item-center justify-end py-8">
            <Link
              href="/docs/installation"
              className="font-bold flex items-center gap-2"
            >
              Installation <ChevronRight size={16} className="font-bold" />
            </Link>
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
