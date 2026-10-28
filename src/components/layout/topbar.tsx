'use client';

import React, { useState } from "react";
import { usePathname, useRouter} from "next/navigation";
import { Menu, LogOut,} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from"../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export function Topbar({onMenuClick}: {onMenuClick: () => void}) {
const pathname = usePathname();
const router = useRouter();
const [loading, setLoading] = useState(false);
const menuMap: Record<string, string> = {};

const title = menuMap[pathname] || "SMK Telekomunikasi Tunas Harapan"; 


const handlelogout = () => {
    router.push("/auth/loging");


return(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-15 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
             <Button
             variant="ghost"
             size="icon"
             className="ig:hidden"
             onClick={onMenuClick}
             >
                <menu className="w-5 h-5" />
                </Button>   
                <div className="flex items-center space-x-2">
                    <h2 className="text-x1 font-semibold tracking-tight"></h2>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                          <Avatar>
                            <AvatarImage src="/avatar.png" alt="user avatar" />
                            <AvatarFallback>BH</AvatarFallback>
                          </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm fomt-medium leading-none">
                                    Muhammad Rizal

                                </p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    MuhammadRizal@example.com

                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem

                            className="text-red-600 focus:text-red-600 focus:bg-red-50"
                            onClick={handlelogout}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </header>
)

}
}