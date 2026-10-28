import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Catatan: Tiga baris import di bawah ini sebenarnya sudah tidak terpakai lagi di file ini, 
// tapi saya biarkan saja sesuai permintaanmu agar tidak banyak merubah kode.
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Variable, Weight } from "lucide-react";


import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "manajemn siswa",
  description: "Belajar Next.js dan Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        
      
        
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        
      

      </body>
    </html>
  );
}