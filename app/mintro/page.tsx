import { Metadata } from "next";
import { MintroClientView } from "./mintro-client-view";

export const metadata: Metadata = {
  metadataBase: new URL("https://mintro.webflow.io"),
  title: "Mintro - Financial Management App Webflow Template",
  description:
    "Empowering you to take charge of your financial future with intuitive tools, personalized insights, and comprehensive analytics.",
  openGraph: {
    title: "Mintro - Financial Management App Webflow Template",
    description:
      "Empowering you to take charge of your financial future with intuitive tools, personalized insights, and comprehensive analytics.",
    images: ["/mintro/assets/67050d6b59657c8a0a1cffd3_I_Phone.png"],
  },
};

export default function MintroPage() {
  return <MintroClientView />;
}
