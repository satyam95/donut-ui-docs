import Sidebar from "@/components/Sidebar";

export default function DocsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 container mx-auto">
      <aside className="w-52 hidden sm:block border-r h-[calc(100vh-3.5rem)] sticky top-14">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
}
