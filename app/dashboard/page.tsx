"use client";

import { useState } from "react";
import { Menu, PlusCircle, Trash2, CalendarDays } from "lucide-react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
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
          <Image src="/logo.png" alt="brand-logo" width={150} height={150} />
        </div>
        <nav className="mt-5 p-4 space-y-3">
          <button className="block w-full text-left px-4 py-2 rounded hover:bg-[#1f4d63] hover:text-white text-[#1f4d63]">
            Dashboard
          </button>
          <button className="block w-full text-left px-4 py-2 rounded hover:bg-[#1f4d63] hover:text-white text-[#1f4d63]">
            My Events
          </button>
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
          {/* Left side: menu + welcome text */}
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

        {/* Page Content */}
        <main className="flex-1 p-6 flex justify-center pt-28">
          <div className="w-full max-w-4xl space-y-6">
            {/* Create Event Card */}
            <div className="bg-gradient-to-r from-[#17364A] to-[#1f4d63] text-white p-6 shadow-lg rounded-2xl">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <PlusCircle className="h-5 w-5" /> Create Event
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                {/* Event Title */}
                <div className="flex flex-col">
                  <label
                    htmlFor="event-title"
                    className="text-sm font-medium mb-1 text-white"
                  >
                    Event Title
                  </label>
                  <input
                    id="event-title"
                    type="text"
                    placeholder="Event Title"
                    className="border rounded-lg px-3 py-2 flex-1 text-white placeholder:text-white focus:ring-2 bg-transparent"
                  />
                </div>

                {/* Event Description */}
                <div className="flex flex-col">
                  <label
                    htmlFor="event-description"
                    className="text-sm font-medium mb-1 text-white"
                  >
                    Event Description
                  </label>
                  <textarea
                    id="event-description"
                    placeholder="Event Description"
                    className="border rounded-lg px-3 py-2 flex-1 text-white placeholder:text-white focus:ring-2 bg-transparent"
                  />
                </div>

                {/* Start Date */}
                <div className="flex flex-col">
                  <label
                    htmlFor="event-start"
                    className="text-sm font-medium mb-1 text-white"
                  >
                    Start Date
                  </label>
                  <input
                    id="event-start"
                    type="date"
                    className="border rounded-lg px-3 py-2 flex-1 text-white focus:ring-2 bg-transparent"
                  />
                </div>

                {/* End Date */}
                <div className="flex flex-col">
                  <label
                    htmlFor="event-end"
                    className="text-sm font-medium mb-1 text-white"
                  >
                    End Date
                  </label>
                  <input
                    id="event-end"
                    type="date"
                    className="border rounded-lg px-3 py-2 flex-1 text-white focus:ring-2 bg-transparent"
                  />
                </div>

                <button className="bg-white text-[#17364A] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition shadow">
                  Add
                </button>
              </div>
            </div>

            {/* Event List */}
            <div className="bg-white p-6 shadow-lg rounded-2xl">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-[#17364A]" /> Recent
                Events
              </h2>

              {/* Empty state */}
              <p className="text-gray-500 italic">No events created yet.</p>

              {/* Example Event Card */}
              <div className="mt-6 space-y-4">
                <div className="p-5 border border-[#17364A] rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#17364A]">
                      🎉 Sample Event
                    </p>
                    <p className="text-sm text-gray-500">2025-09-27</p>
                  </div>
                  <button
                    aria-label="Delete event"
                    type="button"
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="p-5 border border-[#17364A] rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#17364A]">
                      📅 Team Meeting
                    </p>
                    <p className="text-sm text-gray-500">2025-10-01</p>
                  </div>
                  <button
                    aria-label="Delete event"
                    type="button"
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
