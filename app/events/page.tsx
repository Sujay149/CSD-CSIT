import type { Metadata } from "next"
import EventsPageClient from "./EventsPageClient"

export const metadata: Metadata = {
  title: "Events - CSD&IT Departments",
  description: "Explore past and upcoming events at CSD&IT Departments's Computer Science & Design Department.",
}

export default function EventsPage() {
  return <EventsPageClient />
}
