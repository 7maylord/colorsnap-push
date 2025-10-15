import type { Metadata } from "next";
import './globals.css';
import { PushChainProvider } from '@/providers/PushChainProvider'
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ColorSnap - Push Chain Color Matching Game",
  description: "A fun and interactive color bottle matching game built on Push Chain - Play from any blockchain!",
  keywords: ["Push Chain", "blockchain", "game", "DApp", "Web3", "Universal App"],
  authors: [{ name: "ColorSnap Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
        <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-gray-50 to-purple-50`}>
        <PushChainProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-gray-100 border-t border-gray-200 py-2">
              <div className="container mx-auto px-4 text-center text-sm text-gray-600">
                <p>
                  Built with ❤️ by {" "}
                  <a
                    href="https://github.com/7maylord/colorsnap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Maylord
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </PushChainProvider>
      </body>
    </html>
  );
}
