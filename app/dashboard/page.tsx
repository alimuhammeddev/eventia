"use client";

import { PlusCircle, Trash2, CalendarDays } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Page Content */}
        <main className="flex-1 p-6 flex justify-center">
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

                <button className="bg-white text-[#17364A] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition shadow cursor-pointer">
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
    </DashboardLayout>
  );
}
