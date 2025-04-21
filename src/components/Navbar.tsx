"use client";
import React, { useState } from "react";
import { Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
<>
<div
      className={cn(" fixed top-10 inset-x-0 max-w-5xl mx-auto z-40 hidden lg:block poppins-medium", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#about"}>
        <MenuItem setActive={setActive} active={active} item="ABOUT">
        </MenuItem>
        </Link>
        <Link href={"#edu"}>
        <MenuItem setActive={setActive} active={active} item="EDUCATION">
        </MenuItem>
        </Link>
        <Link href={"#work"}>
        <MenuItem setActive={setActive} active={active} item="WORK">
        </MenuItem>
        </Link>
        <Link href={"#tech"}>
        <MenuItem setActive={setActive} active={active} item="TECH STACK">
        </MenuItem>
        </Link>
        <Link href={"#proj"}>
        <MenuItem setActive={setActive} active={active} item="PROJECTS">
        </MenuItem>
        </Link>
        <Link href={"#contact"}>
        <MenuItem setActive={setActive} active={active} item="CONTACT">
        </MenuItem>
        </Link>
      </Menu>
    </div>
    <div className="lg:hidden">
      <Sidebar/>
    </div>
</>
  );
}
