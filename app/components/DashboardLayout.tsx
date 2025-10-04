"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useUser();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:translate-x-0`}
      >
        <div className="lg:p-6 p-4 border-b">
          <Image src="/logo.png" alt="brand-logo" width={150} height={150} priority />
        </div>
        <nav className="mt-5 p-4 space-y-3">
          <Link
            href="/dashboard"
            className="block w-full text-left px-4 py-2 rounded hover:bg-[#1f4d63] hover:text-white text-[#1f4d63]"
          >
            Dashboard
          </Link>
          <Link
            href="/myevent"
            className="block w-full text-left px-4 py-2 rounded hover:bg-[#1f4d63] hover:text-white text-[#1f4d63]"
          >
            My Events
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-white shadow px-6 py-4 lg:ml-64">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="lg:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <span className="text-[#17364A] font-medium">
              Welcome,{" "}
              {user?.firstName ||
                user?.fullName ||
                user?.primaryEmailAddress?.emailAddress ||
                "Guest"}
            </span>
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>

        <main className="flex-1 p-6 pt-28">{children}</main>
      </div>
    </div>
  );
}