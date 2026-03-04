import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Khalil Systems Engineering Ltd",
  description: "High-reliability software and broadcast graphics systems."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_30%,rgba(255,255,255,0.06),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.9))]" />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}