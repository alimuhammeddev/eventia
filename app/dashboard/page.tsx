"use client";

import { useState } from "react";
import { PlusCircle, CalendarDays, Loader2 } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { useEvents } from "./useEvents";
import { Toaster, toast } from "sonner";
import Image from "next/image";
import "./dashboard.css";

export default function DashboardPage() {
  const { events, addEvent, loading } = useEvents();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    image: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);

    const form = new FormData();
    form.append("title", formData.title);
    form.append("location", formData.location);
    form.append("startDate", formData.startDate);
    form.append("endDate", formData.endDate);
    if (formData.image) form.append("image", formData.image);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      await addEvent(form);

      setFormData({
        title: "",
        location: "",
        startDate: "",
        endDate: "",
        image: null,
      });

      toast.success("Event created successfully!", {
        position: "bottom-right",
        duration: 3000,
      });
    } catch (error) {
      toast.error("Failed to create event.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const latestEvent = events.length > 0 ? events[events.length - 1] : null;

  return (
    <DashboardLayout>
      <Toaster richColors position="bottom-right" />

      <main className="flex-1 p-6 flex justify-center bg-gray-50 min-h-screen">
        <div className="w-full max-w-4xl space-y-6">
          <div className="bg-gradient-to-r from-[#17364A] to-[#1f4d63] text-white p-6 shadow-lg rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <PlusCircle className="h-5 w-5" /> Create Event
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {/* Title */}
              <div>
                <label
                  htmlFor="event-title"
                  className="block text-sm font-medium mb-1 text-white/90"
                >
                  Event Title
                </label>
                <input
                  id="event-title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter event title"
                  className="border rounded-lg w-full px-3 py-2 text-white placeholder:text-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="event-location"
                  className="block text-sm font-medium mb-1 text-white/90"
                >
                  Location
                </label>
                <input
                  id="event-location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="border rounded-lg w-full px-3 py-2 text-white placeholder:text-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Start Date */}
              <div>
                <label
                  htmlFor="event-startDate"
                  className="block text-sm font-medium mb-1 text-white/90"
                >
                  Start Date
                </label>
                <div className="relative">
                  <input
                    id="event-startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="date-input border rounded-lg w-full px-3 py-2 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                  />
                </div>
              </div>

              {/* End Date */}
              <div>
                <label
                  htmlFor="event-endDate"
                  className="block text-sm font-medium mb-1 text-white/90"
                >
                  End Date
                </label>
                <div className="relative">
                  <input
                    id="event-endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="date-input border rounded-lg w-full px-3 py-2 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="event-image"
                  className="block text-sm font-medium mb-1 text-white/90"
                >
                  Event Image
                </label>
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

              {/* Add Button */}
              <button
                onClick={handleAdd}
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-white text-[#17364A] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition shadow cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 text-[#17364A]" />
                    Creating...
                  </>
                ) : (
                  "Add Event"
                )}
              </button>
            </div>
          </div>

          {/* Recent Event */}
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