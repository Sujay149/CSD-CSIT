import type { Metadata } from "next"
import CampusClient from "./CampusClient"

export const metadata: Metadata = {
  title: "Campus Life",
  description:
    "Explore our vibrant campus with state-of-the-art facilities designed to enhance your learning and living experience.",
}

export default function CampusPage() {
  return <CampusClient />
}
