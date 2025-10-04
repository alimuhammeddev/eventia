"use client";

import Image from "next/image";
import DashboardLayout from "../components/DashboardLayout";
import { Calendar, MapPin, Trash2 } from "lucide-react";
import { useEvents } from "../dashboard/useEvents"; 
import React, { useState } from "react";

export default function MyEvent() {
  const { events, loading, deleteEvent } = useEvents(); // use deleteEvent from hook
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    try {
      setDeleting(id);

      await deleteEvent(id); // ✅ call hook function

      setDeleting(null);
    } catch (error) {
      console.error(error);
      alert("Error deleting event");
      setDeleting(null);
    }
  };

  return (
    <DashboardLayout>
      <section className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-[#17364A] mb-6">My Events</h1>

        {loading ? (
          <p className="text-gray-500 italic">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-gray-500 italic">No events available yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 relative"
              >
                <Image
                  src={event.image || "/placeholder.jpg"}
                  alt={event.title}
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{event.title}</h2>

                  <p className="text-gray-600 mt-2 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.startDate).toLocaleDateString()}{" "}
                    {event.endDate &&
                      `→ ${new Date(event.endDate).toLocaleDateString()}`}
                  </p>

                  {event.location && (
                    <p className="text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </p>
                  )}

                  <button
                    onClick={() => handleDelete(event.id)}
                    disabled={deleting === event.id}
                    className="mt-3 flex items-center gap-1 text-red-600 hover:text-red-800 font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    {deleting === event.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}