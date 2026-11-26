import Link from "next/link";
import { Home } from "lucide-react";

export default function AppLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#303A32]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E8EBE5] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <Link href="/households" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#496B55] text-white">
              <span className="text-lg font-semibold">स</span>
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Saakshi
            </span>
          </Link>

          {/* Navigation */}
          <nav>
            <Link
              href="/households"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#496B55] transition-colors hover:bg-[#F1F4EF]"
            >
              <Home size={17} />
              <span>Households</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto min-h-[calc(100vh-64px)] max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        {children}
      </main>
    </div>
  );
}