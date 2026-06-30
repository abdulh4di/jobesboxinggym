import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}