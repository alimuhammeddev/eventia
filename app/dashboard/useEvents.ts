"use client";

import useSWR from "swr";

export interface EventItem {
  id: string;
  title: string;
  image?: string | null;
  location?: string | null;
  startDate: string;
  endDate: string;
  createdAt?: string;
}

// ✅ Reusable fetcher function for SWR
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch events: ${res.statusText}`);
  }
  return res.json();
};

export function useEvents() {
  // ✅ SWR handles caching, revalidation, and refetching
  const { data: events = [], error, isLoading, mutate } = useSWR<EventItem[]>(
    "/api/events",
    fetcher,
    {
      revalidateOnFocus: true, // auto-refresh when you return to the tab
      refreshInterval: 5000, // re-fetch every 5s for live updates (optional)
    }
  );

  // ✅ Add Event (and revalidate SWR cache)
  const addEvent = async (formData: FormData) => {
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(await res.text());
      await mutate(); // 🔄 instantly refresh the events list
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  };

  // ✅ Delete Event (and revalidate SWR cache)
  const deleteEvent = async (id: string) => {
    try {
      const res = await fetch("/api/events", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to delete event");
      await mutate(); // 🔄 instantly refresh after deletion
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
  };

  return {
    events,
    addEvent,
    deleteEvent,
    loading: isLoading,
    error,
  };
}