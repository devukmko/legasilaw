// import Button from "@/components/core/button";
// import Container from "@/components/core/container";
import Hero from "./_components/hero";
import Services from "./_components/services";
import AboutContact from './_components/about-contact';

export const metadata = {
  title: "Legasi Law Firm",
  description: "Tenang dan nyaman, properti Anda terlindungi.",
  openGraph: {
    title: "Legasi Law Firm",
    description: "Tenang dan nyaman, properti Anda terlindungi.",
    url: "/images/logo.png", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "/images/logo.png", // Replace with the image URL
        width: 1200,
        height: 630,
        alt: "Lawfirm properti terlindungi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legasi Law Firm",
    description: "Tenang dan nyaman, properti Anda terlindungi.",
    images: ["/images/logo.png"],
  },
};

export default function Home() {
  return (
    <main>
      {/* <Button variant="contained" color="primary" size="medium">
        Hello World
      </Button> */}
      <Hero />
      <Services />
      {/* <AboutUs /> */}
      <AboutContact />
    </main>
  );
}
