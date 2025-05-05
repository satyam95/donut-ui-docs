import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build Stunning Interfaces with Ease | Donut-UI",
  description:
    "Donut-UI is your all-in-one React component library offering seamless integration with React and Next.js. Start building modern, responsive UIs effortlessly today.",
  keywords: [
    "React component library",
    "Donut-UI",
    "UI components",
    "Next.js UI",
    "responsive design",
    "frontend development",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_NEXTJS_SITE_URL!),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}`,
    title: "Build Stunning Interfaces with Ease | Donut-UI",
    description:
      "Donut-UI is your all-in-one React component library offering seamless integration with React and Next.js. Start building modern, responsive UIs effortlessly today.",
    images: [
      {
        url: "/vercel-icon.svg",
        width: 1200,
        height: 630,
        alt: "Donut-UI – Build Stunning Interfaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Stunning Interfaces with Ease | Donut-UI",
    description:
      "Donut-UI is your all-in-one React component library offering seamless integration with React and Next.js. Start building modern, responsive UIs effortlessly today.",
    images: ["/vercel-icon.svg"],
  },
};

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center bg-white">
      <section className="flex items-center justify-center w-full">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center px-4 lg:px-0">
            <h1 className="text-3xl sm:text-6xl font-bold mb-6">
              Build Stunning Interfaces with Ease
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Donut-UI is your all-in-one React component library, offering
              seamless integration with React and Next.js. Start building
              modern, responsive UIs effortlessly.
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
              <Link
                href="/docs/installation"
                className="min-w-[164px] px-4 sm:px-8 py-2 sm:py-3 sm:text-base bg-black text-white font-medium rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/components/accordion"
                className="min-w-[164px] px-4 sm:px-8 py-2 sm:py-3 sm:text-base bg-white text-black font-medium rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Components
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
