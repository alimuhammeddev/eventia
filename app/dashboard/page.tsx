"use client";

import { useState } from "react";
import { PlusCircle, CalendarDays } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { useEvents } from "./useEvents";
import { toast } from "sonner";
import Image from "next/image";

export default function DashboardPage() {
  const { events, addEvent, loading } = useEvents();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id.replace("event-", "")]: value,
      }));
    }
  };

  const handleAdd = async () => {
    if (!formData.title || !formData.startDate || !formData.endDate) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("location", formData.location);
    form.append("startDate", formData.startDate);
    form.append("endDate", formData.endDate);
    if (formData.image) form.append("image", formData.image);

    toast.promise(addEvent(form), {
      loading: "Creating event...",
      success: "Event created successfully!",
      error: "Failed to create event.",
    });

    setFormData({
      title: "",
      location: "",
      startDate: "",
      endDate: "",
      image: null,
    });
  };

  // ✅ Only show the latest event (if any)
  const latestEvent = events.length > 0 ? events[events.length - 1] : null;

  return (
    <DashboardLayout>
      <main className="flex-1 p-6 flex justify-center bg-gray-50 min-h-screen">
        <div className="w-full max-w-4xl space-y-6">
          {/* Create Event Form */}
          <div className="bg-gradient-to-r from-[#17364A] to-[#1f4d63] text-white p-6 shadow-lg rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <PlusCircle className="h-5 w-5" /> Create Event
            </h2>

            <div className="grid grid-cols-1 gap-4">
              <input
                id="event-title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Event Title"
                className="border rounded-lg px-3 py-2 text-white placeholder:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                id="event-location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Event Location"
                className="border rounded-lg px-3 py-2 text-white placeholder:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                aria-label="Event Start Date"
                id="event-startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                aria-label="Event End Date"
                id="event-endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <div>
                <label
                  htmlFor="event-image"
                  className="flex items-center justify-between border rounded-lg px-3 py-2 text-white bg-transparent cursor-pointer hover:bg-white/10 transition focus-within:ring-2 focus-within:ring-white/50"
                >
                  <span>
                    {formData.image
                      ? formData.image.name
                      : "Choose an image file"}
                  </span>
                  <span className="text-sm text-white/70">
                    {formData.image ? "✓ Selected" : ""}
                  </span>
                </label>
                <input
                  id="event-image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </div>
              <button
                onClick={handleAdd}
                className="bg-white text-[#17364A] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition shadow cursor-pointer"
              >
                Add Event
              </button>
            </div>
          </div>

          {/* Event List */}
          <div className="bg-white p-6 shadow-lg rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-[#17364A]" /> Recent Event
            </h2>

            {loading ? (
              <p className="text-gray-500 italic">Loading event...</p>
            ) : !latestEvent ? (
              <p className="text-gray-500 italic">No event created yet.</p>
            ) : (
              <div className="mt-6 p-5 border border-[#17364A] rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {latestEvent.image && (
                    <Image
                      src={latestEvent.image || "/placeholder.jpg"}
                      alt={latestEvent.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-[#17364A]">
                      {latestEvent.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {latestEvent.startDate} → {latestEvent.endDate}
                    </p>
                    {latestEvent.location && (
                      <p className="text-xs text-gray-600 mt-1">
                        {latestEvent.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}