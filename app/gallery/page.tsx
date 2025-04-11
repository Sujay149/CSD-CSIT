import type { Metadata } from "next"
import GalleryPageClient from "./GalleryPageClient"

export const metadata: Metadata = {
  title: "Picture Gallery - CSD&IT Departments",
  description: "Browse through images of our campus, events, and student activities at CSD&IT Departments.",
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
