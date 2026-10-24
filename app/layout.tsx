import type { Metadata } from "next";
import "./aside.css";

export const metadata: Metadata = {
  title: "Aside | The browser built to do real work for you",
  description:
    "A browser that gets complex work done across your websites, accounts, and history.",
  applicationName: "Aside",
  openGraph: {
    title: "Aside | The browser built to do real work for you",
    description:
      "A browser that gets complex work done across your websites, accounts, and history.",
    url: "https://aside.com",
    siteName: "Aside",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aside",
    description:
      "A browser that gets complex work done across your websites, accounts, and history.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="displayfont_c3e94ca7-module__x8xMHq__variable geist_6a7f31db-module__Nv7kgG__variable geist_mono_98bf3e5-module__Bk4vWG__variable antialiased"
    >
      <body>{children}</body>
    </html>
  );
}
