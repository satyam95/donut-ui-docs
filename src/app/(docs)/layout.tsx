import Sidebar from "@/components/Sidebar";

export default function DocsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 container mx-auto">
      <aside className="w-52 block border-r h-[calc(100vh-4rem)] sticky top-16">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
}
