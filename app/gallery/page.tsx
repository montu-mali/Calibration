import { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual tour of our state-of-the-art laboratories and precision calibration processes.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
