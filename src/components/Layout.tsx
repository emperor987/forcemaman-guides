import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <AmbientBackground />
      <Header />
      <main
        id="main"
        className="flex-1 pb-24 animate-fade-in"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
