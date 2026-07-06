import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";
import CustomCursor from "@/components/ui/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Calibration | Precision Beyond Measurement",
    template: "%s | Calibration"
  },
  description: "ISO Certified Calibration Laboratory delivering accurate, reliable and traceable calibration services across India. NABL Accredited.",
  keywords: ["calibration services", "NABL laboratory", "ISO 17025", "electrical calibration", "mechanical calibration", "precision measurement"],
  authors: [{ name: "Calibration India" }],
  creator: "Calibration",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://calibration.com",
    siteName: "Calibration",
    title: "Calibration | Precision Beyond Measurement",
    description: "ISO Certified Calibration Laboratory delivering accurate, reliable and traceable calibration services across India.",
    images: [
      {
        url: "https://calibration.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calibration - Precision Beyond Measurement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calibration | Precision Beyond Measurement",
    description: "ISO Certified Calibration Laboratory delivering accurate, reliable and traceable calibration services.",
    images: ["https://calibration.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-[100]">
            Skip to content
          </a>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
