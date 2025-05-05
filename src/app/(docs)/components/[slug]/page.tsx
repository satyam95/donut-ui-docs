import CodeSnippet from "@/components/CodeSnippet";
import SidebarCTA from "@/components/SidebarCTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { components } from "@/data/components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);

  if (!component?.metadata) {
    return { title: "Component | Donut-UI" };
  }

  const { title, description, keywords, canonical, openGraph } =
    component.metadata;

  const parentMeta = await parent;
  const prevImages = parentMeta.openGraph?.images ?? [];

  type OGDescriptor = {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };

  const prevDescriptors: OGDescriptor[] = (
    Array.isArray(prevImages) ? prevImages : [prevImages]
  )
    .filter(Boolean)
    .map((img) => {
      if (typeof img === "string") {
        return { url: img };
      }
      if (img instanceof URL) {
        return { url: img.toString() };
      }
      return img as OGDescriptor;
    });

  const fullOGImages: OGDescriptor[] = openGraph.image
    ? [{ url: openGraph.image, width: 1200, height: 630 }, ...prevDescriptors]
    : prevDescriptors;

  const twitterImages = fullOGImages.map((d) => d.url);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(process.env.NEXT_PUBLIC_NEXTJS_SITE_URL!),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}${canonical}`,
    },
    openGraph: {
      type: "website",
      url: openGraph.url,
      title: openGraph.title,
      description: openGraph.description,
      images: fullOGImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImages,
    },
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Comming Soon...
        </h1>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8">
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <div className="py-6">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
              <Link href="/docs" className="hover:text-foreground">
                Docs
              </Link>
              <span>&gt;</span>
              <span>{component?.componentName}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
              {component?.componentName}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground pt-1">
              {component?.description}
            </p>
            <div className="mt-8">
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-2 border-b w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="preview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent text-base py-2 px-4"
                  >
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent text-base py-2 px-4"
                  >
                    Code
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="mt-0">
                  <div className="border rounded-md bg-white">
                    <div className="flex items-center justify-center p-6 min-h-[200px]">
                      {component?.preview.component}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="code" className="mt-0">
                  <CodeSnippet
                    code={component?.preview.code || "Code coming soon..."}
                  />
                </TabsContent>
              </Tabs>
            </div>
            <div className="mt-10" id="#usage">
              <h2 className="text-2xl font-bold mb-4">Comming Soon...</h2>
            </div>
            {component.pagination && (
              <div
                className={`py-8 flex items-center ${
                  component.pagination.next && component.pagination.previous
                    ? "justify-between"
                    : component.pagination.next &&
                        !component.pagination.previous
                      ? "justify-end"
                      : !component.pagination.next &&
                          component.pagination.previous
                        ? "justify-start"
                        : ""
                }`}
              >
                {component.pagination.previous && (
                  <Link
                    href={component.pagination.previous.slug}
                    className="font-bold flex items-center gap-2"
                  >
                    <ChevronLeft size={16} className="font-bold" />
                    {component.pagination.previous.title}
                  </Link>
                )}
                {component.pagination.next && (
                  <Link
                    href={component.pagination.next.slug}
                    className="font-bold flex items-center gap-2"
                  >
                    {component.pagination.next.title}
                    <ChevronRight size={16} className="font-bold" />
                  </Link>
                )}
              </div>
            )}
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
