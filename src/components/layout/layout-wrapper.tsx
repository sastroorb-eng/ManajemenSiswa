"use client";

import React from "react";
import { usePathname } from "next/navigation";


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; 
import { AppSidebar } from "./app-sidebar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  
  const pathname = usePathname();
  
 
  const isAuthPage = pathname?.startsWith("/auth") || pathname?.startsWith("/login") || pathname?.startsWith("/register");

  
  if (isAuthPage) {
    return <>{children}</>;
  }


  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}