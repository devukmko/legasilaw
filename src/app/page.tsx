// import Button from "@/components/core/button";
// import Container from "@/components/core/container";
import Hero from "./_components/hero";
import Services from "./_components/services";
import AboutContact from './_components/about-contact';
import Counter from "./_components/counter-visitor"; 


export const metadata = {
  title: "Legasi Law Firm",
  description: "Tenang dan nyaman, properti Anda terlindungi.",
  openGraph: {
    title: "Legasi Law Firm",
    description: "Tenang dan nyaman, properti Anda terlindungi.",
    url: "/images/logo.png", 
    type: "website",
    images: [
      {
        url: "/images/logo.png",
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

export default async function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutContact />
      <Counter />
    </main>
  );
}
